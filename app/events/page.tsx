import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { events } from "@/lib/events";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past SENSUS editions — curated Web3 gatherings in Bangkok and Singapore.",
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
    timeZoneName: "short",
  });
}

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "Upcoming");
  const past = events.filter((e) => e.status === "Past");

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Calendar</Eyebrow>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
            <span className="text-sensus-50">SENSUS</span>{" "}
            <span className="chrome-text">editions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sensus-300 text-pretty leading-relaxed">
            A focused calendar of curated gatherings. Every edition is small,
            every demo is recorded, every recording is public.
          </p>
        </div>
      </section>

      {upcoming.length > 0 && (
        <Section id="upcoming" className="!pt-8">
          <SectionHeading
            eyebrow="Upcoming"
            title="Next on the calendar"
            description="Limited seats. Applications reviewed on a rolling basis."
          />
          <div className="grid gap-6">
            {upcoming.map((e) => (
              <article
                key={e.slug}
                id={e.slug}
                className="glass glass-hover rounded-2xl p-6 sm:p-10 relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/[0.05] to-transparent"
                />
                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 ring-1 ring-white/15 text-sensus-100">
                        Upcoming
                      </span>
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 ring-1 ring-white/10 text-sensus-300">
                        {e.theme}
                      </span>
                      {e.capacity && (
                        <span className="text-xs text-sensus-400">
                          · {e.capacity}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-sensus-50 text-balance">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-sm text-sensus-300 text-pretty max-w-2xl">
                      {e.summary}
                    </p>
                    <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                      <div className="flex gap-2">
                        <dt className="text-sensus-400 min-w-[60px]">Date</dt>
                        <dd className="text-sensus-100">
                          {formatEventDate(e.date)}
                        </dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-sensus-400 min-w-[60px]">Time</dt>
                        <dd className="text-sensus-100">
                          {formatEventTime(e.date)}
                        </dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-sensus-400 min-w-[60px]">
                          Venue
                        </dt>
                        <dd className="text-sensus-100">{e.location}</dd>
                      </div>
                    </dl>
                    <ul className="mt-5 space-y-1.5 text-sm text-sensus-200">
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
                    <Button
                      href={e.rsvpUrl || "/contact"}
                      external={!!e.rsvpUrl}
                      variant="primary"
                    >
                      Apply to attend
                    </Button>
                    <Button href="/contact" variant="secondary">
                      Sponsor / partner
                    </Button>
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
          title="Past editions"
          description="Recordings live on the Project Spotlight page."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {past.map((e) => (
            <article
              key={e.slug}
              id={e.slug}
              className="glass glass-hover rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 ring-1 ring-white/10 text-sensus-300">
                  {e.theme}
                </span>
                <span className="text-xs text-sensus-400">
                  {formatEventDate(e.date)}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-sensus-50">
                {e.title}
              </h3>
              <p className="mt-3 text-sm text-sensus-300 text-pretty">
                {e.summary}
              </p>
              <p className="mt-3 text-xs text-sensus-400">{e.location}</p>
              <ul className="mt-4 space-y-1 text-sm text-sensus-300">
                {e.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 before:content-['—'] before:text-sensus-500 before:mr-1"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t hairline">
                <Button href="/spotlight" variant="ghost">
                  Watch recordings →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="glass rounded-3xl p-10 sm:p-14 text-center">
          <Eyebrow>Stay in the loop</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Don't miss the next edition
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sensus-300 text-pretty">
            Follow on X for the live announcement, or drop us a line to get on
            the partner list.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={siteConfig.social.x} variant="primary" external>
              Follow on X
            </Button>
            <Button href="/contact" variant="secondary">
              Get on the list
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
