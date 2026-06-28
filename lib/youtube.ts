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
 * Curated, hand-picked videos from the SENSUS YouTube channel.
 * Bypasses the YouTube Data API — these stay on the homepage until
 * the team updates this list. Order is shown left-to-right.
 *
 * To add or replace a video, simply swap the id. Thumbnails resolve
 * to YouTube's CDN (i.ytimg.com) — no API key required.
 */
export function getFeaturedVideos(): YouTubeVideo[] {
  const entries: Array<{
    id: string;
    title: string;
    publishedAt: string;
  }> = [
    { id: "ZvP-yDwpfho", title: "Road to SENSUS: BKK Edition — Video Recap", publishedAt: "2026-05-25T19:00:00Z" },
    { id: "yP_qgmdS9qI", title: "SENSUS BKK: ContributionDAO", publishedAt: "2026-05-22T19:00:00Z" },
    { id: "vdmViV4Z-dc", title: "SENSUS BKK: Mozi", publishedAt: "2026-05-22T19:00:00Z" },
    { id: "A9oFv4UvQpg", title: "SENSUS BKK: Noodle.Fi", publishedAt: "2026-05-22T19:00:00Z" },
    { id: "Pj5UoB8c4yE", title: "SENSUS BKK: Hashcut", publishedAt: "2026-05-22T19:00:00Z" },
  ];

  return entries.map((e) => ({
    id: e.id,
    title: e.title,
    description: "",
    publishedAt: e.publishedAt,
    thumbnail: `https://i.ytimg.com/vi/${e.id}/maxresdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${e.id}`,
  }));
}

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
