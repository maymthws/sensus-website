import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { events } from "@/lib/events";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past SENSUS editions — curated Web3 gatherings.",
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
  });
}

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "Upcoming");
  const past = events.filter((e) => e.status === "Past");

  return (
    <>
      {/* Page header */}
      <section className="pt-40 sm:pt-48 pb-12 text-center">
        <div className="container-x">
          <span className="eyebrow reveal">Calendar</span>
          <h1 className="mt-6 reveal">
            <span className="text-[var(--ink-900)]">SENSUS</span>{" "}
            <span className="chrome-text">editions.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--ink-500)] text-pretty leading-relaxed reveal">
            A focused calendar of curated gatherings. Every edition is small,
            every demo is recorded, every recording is public.
          </p>
        </div>
      </section>

      {upcoming.length > 0 && (
        <Section id="upcoming" className="!pt-8">
          <SectionHeading
            eyebrow="Upcoming"
            title={
              <>
                Next on the <span className="chrome-text">calendar.</span>
              </>
            }
            description="Limited seats. Applications reviewed on a rolling basis."
          />
          <div className="grid gap-6 reveal-stagger">
            {upcoming.map((e) => (
              <article
                key={e.slug}
                id={e.slug}
                className="chrome-surface p-7 sm:p-10 relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute inset-y-0 right-0 w-1/3"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255,255,255,0.4), transparent)",
                  }}
                />
                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="tag-pill">Upcoming</span>
                      <span className="tag-pill">{e.theme}</span>
                      {e.capacity && (
                        <span className="text-xs text-[var(--ink-500)]">· {e.capacity}</span>
                      )}
                    </div>
                    <h3 className="text-[var(--ink-900)] text-balance">{e.title}</h3>
                    <p className="mt-3 text-sm text-[var(--ink-500)] text-pretty max-w-2xl">
                      {e.summary}
                    </p>
                    <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                      <div className="flex gap-2">
                        <dt className="text-[var(--ink-400)] min-w-[60px]">Date</dt>
                        <dd className="text-[var(--ink-700)]">{formatEventDate(e.date)}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-[var(--ink-400)] min-w-[60px]">Time</dt>
                        <dd className="text-[var(--ink-700)]">{formatEventTime(e.date)}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-[var(--ink-400)] min-w-[60px]">Venue</dt>
                        <dd className="text-[var(--ink-700)]">{e.location}</dd>
                      </div>
                    </dl>
                    <ul className="mt-5 space-y-1.5 text-sm text-[var(--ink-700)]">
                      {e.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <svg
                            className="mt-1 shrink-0"
                            width="14"
                            height="14"
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
                  <div className="flex flex-col gap-3 lg:items-end">
                    <Link href={e.rsvpUrl || "/contact"} target={e.rsvpUrl ? "_blank" : undefined} rel={e.rsvpUrl ? "noopener noreferrer" : undefined} className="btn btn-primary">
                      Apply to attend
                    </Link>
                    <Link href="/contact" className="btn btn-ghost">
                      Sponsor / partner
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading
          eyebrow="Archive"
          title={
            <>
              Past <span className="chrome-text">editions.</span>
            </>
          }
          description="Recordings live on the Project Spotlight page."
        />
        <div className="grid gap-6 md:grid-cols-2 reveal-stagger">
          {past.map((e) => (
            <article key={e.slug} id={e.slug} className="glass-card p-7 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="tag-pill">{e.theme}</span>
                <span className="text-xs text-[var(--ink-400)]">{formatEventDate(e.date)}</span>
              </div>
              <h3 className="text-[var(--ink-900)] text-balance">{e.title}</h3>
              <p className="mt-3 text-sm text-[var(--ink-500)] text-pretty">{e.summary}</p>
              <p className="mt-3 text-xs text-[var(--ink-400)]">{e.location}</p>
              <ul className="mt-4 space-y-1 text-sm text-[var(--ink-700)]">
                {e.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="text-[var(--ink-400)]">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-[var(--line)]">
                <Link href="/spotlight" className="text-sm font-medium text-[var(--ink-900)] hover:underline underline-offset-4">
                  Watch recordings →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="chrome-surface text-center p-12 sm:p-16">
          <span className="eyebrow">Stay in the loop</span>
          <h2 className="mt-4 font-display text-[var(--ink-900)] text-balance">
            Don't miss the next edition
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[var(--ink-500)] text-pretty">
            Follow on X for the live announcement, or drop us a line to get on the partner list.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
