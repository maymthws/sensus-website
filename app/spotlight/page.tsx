import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { getChannelVideos, getFeaturedVideos } from "@/lib/youtube";
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

function isRecap(title: string) {
  return /recap/i.test(title);
}

export default async function SpotlightPage() {
  const { videos: apiVideos, reason } = await getChannelVideos(24);
  // Fallback to curated list when API key is missing or fails
  const videos = apiVideos.length > 0 ? apiVideos : getFeaturedVideos();

  // Featured = first video with "Recap" in title, else most recent
  const featured =
    videos.find((v) => isRecap(v.title)) ?? videos[0];
  // Remaining videos for the grid (skip the featured one)
  const rest = videos
    .filter((v) => v.id !== featured.id)
    .slice(0, 8);

  return (
    <>
      {/* Page header */}
      <section className="pt-40 sm:pt-48 pb-12 text-center">
        <div className="container-x">
          <span className="eyebrow reveal">On-demand archive</span>
          <h1 className="mt-6 reveal">
            <span className="text-[var(--ink-900)]">Project</span>{" "}
            <span className="chrome-text">Spotlight.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--ink-500)] text-pretty leading-relaxed reveal">
            Every demo we&rsquo;ve ever run, recorded and searchable. The full
            archive lives on our YouTube channel.
          </p>
        </div>
      </section>

      {/* FEATURED — hero recap */}
      <Section className="!pt-4">
        <div className="chrome-surface p-6 sm:p-8 reveal">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[var(--ink-900)] ring-1 ring-[var(--line)] shadow-glass">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/30 flex items-center justify-center">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-white font-medium">
                  Featured
                </div>
              </div>
            </a>
            <div className="flex flex-col gap-3">
              <span className="tag-pill self-start">
                {isRecap(featured.title) ? "Recap · BKK Edition" : "Latest demo"}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink-900)] text-balance">
                {featured.title}
              </h2>
              <p className="text-sm text-[var(--ink-500)] text-pretty leading-relaxed">
                A look back at the room, the speakers, and the conversations that
                moved the work forward.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch now
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* GRID — more from the stage */}
      {rest.length > 0 && (
        <Section className="!pt-8">
          <SectionHeading
            eyebrow="More from the stage"
            title={
              <>
                More from <span className="chrome-text">the stage.</span>
              </>
            }
            description="Live demos from the most recent SENSUS editions."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 reveal-stagger">
            {rest.map((v) => (
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
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="tag-pill text-[10px]">Talk</span>
                    <h3 className="mt-2 text-[var(--ink-900)] text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[var(--ink-700)] transition-colors">
                      {v.title}
                    </h3>
                    <time
                      dateTime={v.publishedAt}
                      className="mt-1 block text-xs text-[var(--ink-400)]"
                    >
                      {formatPublished(v.publishedAt)}
                    </time>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="!pt-0">
        <div className="chrome-surface text-center p-12 sm:p-16">
          <span className="eyebrow">On YouTube</span>
          <h2 className="mt-4 font-display text-[var(--ink-900)] text-balance">
            Every demo, on the record.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[var(--ink-500)] text-pretty">
            Subscribe for full recordings, dropped within 72 hours of every
            edition.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Subscribe on YouTube <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
