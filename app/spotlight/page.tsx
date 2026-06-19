import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { getChannelVideos } from "@/lib/youtube";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Project Spotlight",
  description:
    "Watch every SENSUS demo on demand. The full archive of Web3 builders and operators, recorded live.",
};

export const revalidate = 300;

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
      <section className="pt-40 sm:pt-48 pb-12 text-center">
        <div className="container-x">
          <span className="eyebrow reveal">On-demand archive</span>
          <h1 className="mt-6 reveal">
            <span className="text-[var(--ink-900)]">Project</span>{" "}
            <span className="chrome-text">Spotlight.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--ink-500)] text-pretty leading-relaxed reveal">
            Every demo we've ever run, recorded and searchable. The full archive lives on our YouTube channel.
          </p>
          <div className="mt-8 reveal">
            <Link href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
            </Link>
          </div>
        </div>
      </section>

      <Section className="!pt-8">
        <SectionHeading
          eyebrow="Latest demos"
          title={
            <>
              Recently on <span className="chrome-text">the stage.</span>
            </>
          }
          description="Live demos from the most recent SENSUS editions."
        />

        {videos.length === 0 ? (
          <EmptyState reason={reason} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger">
            {videos.map((v) => (
              <a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <article className="glass-card overflow-hidden p-0">
                  <div className="relative aspect-video bg-[var(--ink-900)] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <time
                      dateTime={v.publishedAt}
                      className="text-xs text-[var(--ink-400)]"
                    >
                      {formatPublished(v.publishedAt)}
                    </time>
                    <h3 className="mt-2 text-[var(--ink-900)] text-base font-semibold leading-snug line-clamp-2 group-hover:text-[var(--ink-700)] transition-colors">
                      {v.title}
                    </h3>
                    {v.description && (
                      <p className="mt-2 text-sm text-[var(--ink-500)] line-clamp-2">
                        {v.description}
                      </p>
                    )}
                  </div>
                </article>
              </a>
            ))}
          </div>
        )}
      </Section>

      <Section className="!pt-0">
        <div className="chrome-surface text-center p-12 sm:p-16">
          <span className="eyebrow">From the spotlight</span>
          <h2 className="mt-4 font-display text-[var(--ink-900)] text-balance">
            Every demo, on the record.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[var(--ink-500)] text-pretty">
            Subscribe to the SENSUS YouTube channel for full recordings, dropped within 72 hours of every edition.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Subscribe on YouTube <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function EmptyState({ reason }: { reason?: string }) {
  return (
    <div className="chrome-surface p-12 sm:p-16 text-center">
      <span className="eyebrow">Archive</span>
      <h3 className="mt-4 font-display text-[var(--ink-900)] text-balance">
        The archive is warming up.
      </h3>
      <p className="mt-4 max-w-xl mx-auto text-[var(--ink-500)] text-pretty">
        We couldn't load the latest demos right now. Subscribe on YouTube to catch every recording as soon as it ships.
      </p>
      {reason && (
        <p className="mt-3 text-xs text-[var(--ink-400)] font-mono">
          Reason: {reason}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Open YouTube channel
        </Link>
        <Link href="/contact" className="btn btn-ghost">
          Get notified
        </Link>
      </div>
    </div>
  );
}
