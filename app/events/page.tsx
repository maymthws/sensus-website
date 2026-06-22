import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { events } from "@/lib/events";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Events",
  description:
    "SENSUS editions — curated Web3 gatherings in Bangkok and beyond.",
};

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatEventTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Bangkok",
  });
}

export default function EventsPage() {
  // Always show the single featured event (BKK Edition)
  const featured = events[0];
  // Luma gallery: duplicate cover image as a faux gallery (1 event = repeat 6×)
  const galleryItems = Array.from({ length: 6 });

  return (
    <>
      {/* Page header */}
      <section className="pt-40 sm:pt-48 pb-12 text-center">
        <div className="container-x">
          <span className="eyebrow reveal">Editions</span>
          <h1 className="mt-6 reveal">
            <span className="text-[var(--ink-900)]">SENSUS</span>{" "}
            <span className="chrome-text">calendar.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--ink-500)] text-pretty leading-relaxed reveal">
            A focused calendar of curated gatherings. Every edition is small,
            every demo is recorded, every recording is public.
          </p>
        </div>
      </section>

      {/* FEATURED EVENT — Luma-style hero card */}
      <Section className="!pt-4">
        <article
          id={featured.slug}
          className="chrome-surface relative overflow-hidden reveal"
        >
          {/* Cover image backdrop */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage: `url(${featured.coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.95) 100%)",
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] p-7 sm:p-10">
            {/* Left: meta + content */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="tag-pill">BKK Edition</span>
                <span className="tag-pill">{featured.theme}</span>
                {featured.capacity && (
                  <span className="text-xs text-[var(--ink-500)]">· {featured.capacity}</span>
                )}
              </div>
              <h2 className="text-[var(--ink-900)] text-balance">
                {featured.title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[var(--ink-500)] text-pretty leading-relaxed max-w-2xl">
                {featured.summary}
              </p>
              <p className="mt-4 text-sm text-[var(--ink-500)] text-pretty max-w-2xl">
                {featured.description}
              </p>

              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="text-[var(--ink-400)] min-w-[60px]">Date</dt>
                  <dd className="text-[var(--ink-700)]">{formatEventDate(featured.date)}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[var(--ink-400)] min-w-[60px]">Time</dt>
                  <dd className="text-[var(--ink-700)]">
                    {formatEventTime(featured.date)} – {formatEventTime(featured.endDate || featured.date)}
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[var(--ink-400)] min-w-[60px]">Venue</dt>
                  <dd className="text-[var(--ink-700)]">{featured.location}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[var(--ink-400)] min-w-[60px]">Host</dt>
                  <dd className="text-[var(--ink-700)]">{featured.organizer}</dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={featured.lumaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on Luma <span className="arrow">→</span>
                </a>
                <Link href="/spotlight" className="btn btn-ghost">
                  Watch Project Spotlight
                </Link>
              </div>
            </div>

            {/* Right: cover image (clean) */}
            <div className="relative">
              <div
                className="relative aspect-square w-full rounded-[var(--radius-lg)] overflow-hidden ring-1 ring-[var(--line)] shadow-glass"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1f2c 0%, #0b0d12 100%)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/70">
                  <span>Hosted by {featured.organizer}</span>
                  <span>luma.com</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Section>

      {/* HIGHLIGHTS — single column */}
      <Section>
        <div className="max-w-3xl space-y-10">
          <div className="reveal">
            <span className="eyebrow">What to expect</span>
            <ul className="mt-6 space-y-3">
              {featured.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm text-[var(--ink-700)] text-pretty leading-relaxed"
                >
                  <svg
                    className="mt-0.5 shrink-0"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <span className="eyebrow">Who should attend</span>
              <ul className="mt-6 space-y-2">
                {featured.whoShouldAttend.map((w) => (
                  <li
                    key={w}
                    className="text-sm text-[var(--ink-500)] text-pretty leading-relaxed"
                  >
                    — {w}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <span className="eyebrow">Sponsors</span>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.sponsors.map((s) => (
                  <span
                    key={s}
                    className="tag-pill backdrop-blur-sm"
                    style={{
                      background: "rgba(255,255,255,0.65)",
                      border: "1px solid rgba(255,255,255,0.7)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
        </div>
      </Section>

      {/* LUMA GALLERY — cover image repeated as a 6-cell grid */}
      <Section className="!pt-4">
        <div className="text-center mb-10 reveal">
          <span className="eyebrow">From the room</span>
          <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-[var(--ink-900)] text-balance">
            Captured at {featured.location.split(",")[0]}.
          </h3>
          <p className="mt-3 max-w-xl mx-auto text-sm text-[var(--ink-500)] text-pretty">
            A visual snapshot of the room, the partners, and the conversations that moved the work forward.
          </p>
        </div>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 reveal-stagger">
          {galleryItems.map((_, i) => (
            <a
              key={i}
              href={featured.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-[var(--radius-md)] overflow-hidden ring-1 ring-[var(--line)] block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.coverImage}
                alt={`${featured.title} — frame ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[var(--ink-400)]">
          Gallery placeholder · opens Luma event page for full album
        </p>
      </Section>

      {/* STAY IN THE LOOP */}
      <Section className="!pt-4">
        <div className="chrome-surface text-center p-12 sm:p-16">
          <span className="eyebrow">Stay in the loop</span>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-[var(--ink-900)] text-balance">
            Don't miss the next edition
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[var(--ink-500)] text-pretty">
            Follow on X for the live announcement, or drop us a line to get on the partner list.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Follow on X
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Get on the list
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
