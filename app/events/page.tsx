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
  // Gallery: real event photos (3:2 landscape, optimized 1600w)
  const galleryItems = [
    { src: "/gallery/gallery-01.jpg", alt: "SENSUS BKK Edition — opening keynote on the Community slide" },
    { src: "/gallery/gallery-02.jpg", alt: "SENSUS BKK Edition — wide shot of the full room" },
    { src: "/gallery/gallery-03.jpg", alt: "SENSUS BKK Edition — group photo with partners and attendees" },
    { src: "/gallery/gallery-04.jpg", alt: "SENSUS BKK Edition — Project Spotlight stage" },
    { src: "/gallery/gallery-05.jpg", alt: "SENSUS BKK Edition — networking in the room" },
    { src: "/gallery/gallery-06.jpg", alt: "SENSUS BKK Edition — sponsor booth and check-in" },
  ];

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
            A city-by-city series of curated gatherings for the people shaping Web3.
            <br />
            Small rooms, meaningful conversations, and ideas shared beyond the room.
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
          {galleryItems.map((item, i) => (
            <a
              key={item.src}
              href={featured.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/2] rounded-[var(--radius-md)] overflow-hidden ring-1 ring-[var(--line)] block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
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
            Be the first to know where SENSUS goes next.
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
            <Link
              href="https://luma.com/sensus"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Follow on Luma
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
