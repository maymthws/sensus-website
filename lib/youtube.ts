import { siteConfig } from "./config";

export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
  duration?: string;
};

type YouTubeApiItem = {
  id: string | { videoId?: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      high?: { url: string };
      medium?: { url: string };
      default?: { url: string };
    };
  };
};

type YouTubeSearchResponse = {
  items?: YouTubeApiItem[];
  error?: { message: string };
};

/**
 * Fetch the most recent uploads from the SENSUS YouTube channel.
 *
 * Falls back to an empty array (with a flag) when:
 *   - YOUTUBE_API_KEY is missing
 *   - the upstream API errors out
 *
 * This keeps the build green in environments where the key isn't configured.
 */
export async function getChannelVideos(
  maxResults = 12,
): Promise<{ videos: YouTubeVideo[]; reason?: string }> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return { videos: [], reason: "YOUTUBE_API_KEY not configured" };
  }

  const params = new URLSearchParams({
    key: apiKey,
    channelId: siteConfig.youtube.channelId,
    part: "snippet",
    order: "date",
    type: "video",
    maxResults: String(maxResults),
  });

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params.toString()}`,
      { next: { revalidate: 300 } }, // cache 5 minutes
    );
    if (!res.ok) {
      return { videos: [], reason: `YouTube API ${res.status}` };
    }
    const data = (await res.json()) as YouTubeSearchResponse;
    if (data.error) {
      return { videos: [], reason: data.error.message };
    }

    const items = data.items ?? [];
    const videos: YouTubeVideo[] = items
      .map((item) => {
        const videoId =
          typeof item.id === "string" ? item.id : item.id?.videoId;
        if (!videoId) return null;
        const thumb =
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.default?.url ||
          "";
        return {
          id: videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          thumbnail: thumb,
          url: `https://www.youtube.com/watch?v=${videoId}`,
        } satisfies YouTubeVideo;
      })
      .filter((v): v is YouTubeVideo => v !== null);

    return { videos };
  } catch (err) {
    return {
      videos: [],
      reason: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
