import Link from "next/link";
import { Button } from "@/components/Button";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { events } from "@/lib/events";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  const upcoming = events.find((e) => e.status === "Upcoming");
  const past = events.filter((e) => e.status === "Past").slice(0, 3);

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative pt-40 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 30%, rgba(199,211,222,0.16) 0%, rgba(13,18,23,0) 60%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Eyebrow>Web3 · AI · Consumer · Bangkok / Singapore</Eyebrow>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.02] tracking-tight text-balance">
              <span className="block text-sensus-50">A curated gathering for</span>
              <span className="block chrome-text mt-2">the Web3 ecosystem.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-sensus-300 text-pretty leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/events" variant="primary">
                See upcoming events
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Button>
              <Button href="/spotlight" variant="secondary">
                Watch project spotlight
              </Button>
            </div>

            {/* Quick social proof */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-sensus-400">
              <div className="flex items-center gap-2">
                <span className="chrome-text font-semibold text-base">6</span>
                <span>curated editions</span>
              </div>
              <span className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="chrome-text font-semibold text-base">48+</span>
                <span>demos shipped</span>
              </div>
              <span className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="chrome-text font-semibold text-base">100%</span>
                <span>recorded &amp; published</span>
              </div>
            </div>
          </div>

          {/* Decorative S mark — references the chrome logo aesthetic */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-32 hidden lg:block opacity-[0.07]"
          >
            <svg width="520" height="520" viewBox="0 0 64 64">
              <defs>
                <linearGradient id="heroS" x1="0" y1="0" x2="64" y2="64">
                  <stop offset="0" stopColor="#f6f9fc" />
                  <stop offset=".5" stopColor="#c7d3de" />
                  <stop offset="1" stopColor="#6c7a88" />
                </linearGradient>
              </defs>
              <path
                d="M20 12c-6 0-11 5-11 11v18c0 6 5 11 11 11h24c6 0 11-5 11-11V23c0-6-5-11-11-11H20zm8 10h8c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5h-8c-3 0-5-2.2-5-5V27c0-2.8 2-5 5-5z"
                fill="url(#heroS)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ───────── What makes SENSUS different ───────── */}
      <Section>
        <SectionHeading
          eyebrow="Why SENSUS"
          title={
            <>
              Ten minutes. <span className="chrome-text">Real product.</span> Real partners.
            </>
          }
          description="Every demo on the SENSUS stage has been pre-vetted by operators who've shipped, scaled, and exited. No pitches. No decks. Just working software and the people behind it."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              tag: "Curated",
              title: "Vetted by operators",
              body: "Every applicant is reviewed by a panel of builders, investors, and operators. We reject 80%+ of submissions so the room stays high-signal.",
            },
            {
              tag: "Format",
              title: "10-minute live demos",
              body: "Strict 10-minute live demo format. Working product only. Anything that looks like a deck or a roadmap gets cut.",
            },
            {
              tag: "Archive",
              title: "Recorded for the ecosystem",
              body: "Every session is filmed, edited, and pushed to the SENSUS YouTube channel within 48 hours — searchable forever.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="glass glass-hover rounded-2xl p-6 sm:p-8"
            >
              <Eyebrow>{card.tag}</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-semibold text-sensus-50">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-sensus-300 leading-relaxed text-pretty">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ───────── Themes ───────── */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Focus areas"
          title="Where SENSUS plays"
          description="Three themes. Deep cuts. No generalist noise."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "AI",
              desc: "Agents, infra, evaluation, and applied research shipping today.",
              icon: (
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
              ),
            },
            {
              name: "Blockchain",
              desc: "Onchain products with real users, distribution, and economics that work.",
              icon: (
                <>
                  <path d="M12 2 4 7v10l8 5 8-5V7l-8-5z" />
                  <path d="M12 22V12" />
                  <path d="M4 7l8 5 8-5" />
                </>
              ),
            },
            {
              name: "Consumer Apps",
              desc: "Mobile-first, retention-obsessed products that consumers actually open.",
              icon: (
                <>
                  <rect x="6" y="2" width="12" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </>
              ),
            },
          ].map((t) => (
            <div
              key={t.name}
              className="group glass glass-hover rounded-2xl p-8 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-chrome-grad opacity-[0.04] blur-2xl group-hover:opacity-[0.10] transition-opacity"
              />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center chrome-text">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {t.icon}
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-sensus-50">
                  {t.name}
                </h3>
                <p className="mt-3 text-sm text-sensus-300 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ───────── Upcoming + past teaser ───────── */}
      <Section className="!pt-0">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <SectionHeading
            eyebrow="Latest editions"
            title="What's been on the SENSUS stage"
            description="Recent gatherings. The next one is around the corner."
          />
          <Link
            href="/events"
            className="text-sm text-sensus-300 hover:text-sensus-50 inline-flex items-center gap-1.5"
          >
            View all events
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {upcoming && (
          <div className="glass rounded-2xl p-6 sm:p-10 mb-6 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/[0.06] to-transparent"
            />
            <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 ring-1 ring-white/15 text-sensus-100">
                    Upcoming
                  </span>
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 ring-1 ring-white/10 text-sensus-300">
                    {upcoming.theme}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-sensus-50 text-balance">
                  {upcoming.title}
                </h3>
                <p className="mt-3 text-sm text-sensus-300 text-pretty max-w-2xl">
                  {upcoming.summary}
                </p>
                <p className="mt-4 text-xs text-sensus-400">
                  {new Date(upcoming.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  · {upcoming.location}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={upcoming.rsvpUrl || "/contact"}
                  external={!!upcoming.rsvpUrl}
                  variant="primary"
                >
                  RSVP / Apply
                </Button>
                <Button href="/contact" variant="secondary">
                  Get involved
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {past.map((e) => (
            <Link
              key={e.slug}
              href={`/events#${e.slug}`}
              className="glass glass-hover rounded-2xl p-6 block group"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 ring-1 ring-white/10 text-sensus-300">
                  {e.theme}
                </span>
                <span className="text-xs text-sensus-400">
                  {new Date(e.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h4 className="font-display text-lg font-semibold text-sensus-50 group-hover:chrome-text transition-colors">
                {e.title}
              </h4>
              <p className="mt-2 text-sm text-sensus-300 line-clamp-2">
                {e.summary}
              </p>
              <p className="mt-3 text-xs text-sensus-400">{e.location}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ───────── CTA ───────── */}
      <Section className="!pt-0">
        <div className="glass rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-50"
            style={{
              background:
                "radial-gradient(800px 300px at 50% 50%, rgba(199,211,222,0.10), transparent 60%)",
            }}
          />
          <Eyebrow>Apply</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-balance">
            Ship something worth demoing?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-sensus-300 max-w-2xl mx-auto text-pretty">
            We open applications for each edition. Founders, builders, and
            operators with real traction — we'd love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary">
              Apply to demo
            </Button>
            <Button href={siteConfig.social.x} variant="secondary" external>
              Follow on X
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
