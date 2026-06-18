import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { getChannelVideos } from "@/lib/youtube";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Project Spotlight",
  description:
    "Watch every SENSUS demo on demand. The full archive of Web3 builders and operators, recorded live.",
};

export const revalidate = 300; // refresh every 5 minutes

function formatPublished(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function SpotlightPage() {
  const { videos, reason } = await getChannelVideos(24);

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>On-demand archive</Eyebrow>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
            <span className="text-sensus-50">Project</span>{" "}
            <span className="chrome-text">Spotlight.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sensus-300 text-pretty leading-relaxed">
            Every demo we've ever run, recorded and searchable. The full archive
            lives on our YouTube channel.
          </p>
          <div className="mt-6">
            <Button href={siteConfig.social.youtube} variant="primary" external>
              Subscribe on YouTube
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      <Section className="!pt-8">
        <SectionHeading
          eyebrow="Latest demos"
          title="Recently on the stage"
          description="Live demos from the most recent SENSUS editions."
        />

        {videos.length === 0 ? (
          <EmptyState reason={reason} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover rounded-2xl overflow-hidden group flex flex-col"
              >
                <div className="relative aspect-video bg-sensus-900 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-sensus-950/80 via-transparent to-transparent"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-sensus-400">
                    <time dateTime={v.publishedAt}>
                      {formatPublished(v.publishedAt)}
                    </time>
                  </div>
                  <h3 className="mt-2 font-display text-base font-semibold text-sensus-50 line-clamp-2 group-hover:chrome-text transition-colors">
                    {v.title}
                  </h3>
                  {v.description && (
                    <p className="mt-2 text-sm text-sensus-400 line-clamp-2">
                      {v.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </Section>

      <Section className="!pt-0">
        <div className="glass rounded-3xl p-10 sm:p-14 text-center">
          <Eyebrow>Submit your project</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Want to be the next one featured?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sensus-300 text-pretty">
            Applications open before every edition. Real traction, real
            product, real story.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary">
              Apply to demo
            </Button>
            <Button href="/events" variant="secondary">
              See upcoming dates
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function EmptyState({ reason }: { reason?: string }) {
  return (
    <div className="glass rounded-2xl p-10 sm:p-16 text-center">
      <Eyebrow>Archive</Eyebrow>
      <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-sensus-50 text-balance">
        The archive is warming up.
      </h3>
      <p className="mt-4 max-w-xl mx-auto text-sensus-300 text-pretty">
        We couldn't load the latest demos right now. Subscribe on YouTube to
        catch every recording as soon as it ships.
      </p>
      {reason && (
        <p className="mt-3 text-xs text-sensus-500 font-mono">
          Reason: {reason}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href={siteConfig.social.youtube} variant="primary" external>
          Open YouTube channel
        </Button>
        <Button href="/contact" variant="secondary">
          Get notified
        </Button>
      </div>
    </div>
  );
}
