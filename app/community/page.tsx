import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Builders, investors, and operators who make SENSUS what it is. Join the SENSUS community.",
};

const builderArchetypes = [
  {
    title: "Builders",
    body: "Founders, engineers, designers shipping the next wave of Web3, AI, and consumer products.",
  },
  {
    title: "Partners",
    body: "Tier-1 VCs, ecosystem funds, launchpads, exchanges, and infra providers.",
  },
  {
    title: "Operators",
    body: "Product, growth, and community leaders scaling teams and category-defining products.",
  },
  {
    title: "Press & Creators",
    body: "Newsletters, analysts, and creators covering the next chapter of Web3.",
  },
];

const benefits = [
  {
    title: "Curated invitations",
    body: "First-look invites to every edition and the recordings before public release.",
  },
  {
    title: "Direct intros",
    body: "Warm connections to partners, investors, and peer founders who've shipped.",
  },
  {
    title: "Working sessions",
    body: "Small-group pre-event working sessions with speakers and core community.",
  },
  {
    title: "Permanent archive",
    body: "Full access to the recording library — searchable demos, transcripts, and slides.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Community</Eyebrow>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
            <span className="text-sensus-50">People who</span>{" "}
            <span className="chrome-text">make SENSUS.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sensus-300 text-pretty leading-relaxed">
            SENSUS is the people in the room. We curate a small, working group
            of builders, partners, and operators who turn a 10-minute demo into
            long-term relationships.
          </p>
        </div>
      </section>

      <Section className="!pt-8">
        <SectionHeading
          eyebrow="Who's in the room"
          title="Four archetypes"
          description="A working community, not a spectator audience."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {builderArchetypes.map((b, i) => (
            <div key={b.title} className="glass glass-hover rounded-2xl p-6">
              <div className="chrome-text font-display text-xs tracking-[0.2em]">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-sensus-50">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-sensus-300 text-pretty leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Membership"
          title="What you get"
          description="Tangible reasons to be part of the SENSUS network."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="glass glass-hover rounded-2xl p-8 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-chrome-grad opacity-[0.04] blur-2xl"
              />
              <h3 className="font-display text-xl font-semibold text-sensus-50">
                {b.title}
              </h3>
              <p className="mt-3 text-sm text-sensus-300 text-pretty leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Partners"
          title="Backed by people who build"
          description="SENSUS is supported by a growing group of partners who share the mission — curated, recorded, high-signal gatherings for the Web3 ecosystem."
        />
        {/* Partner placeholders — replace with real logos when available */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[5/2] glass rounded-xl flex items-center justify-center text-sensus-500 text-xs uppercase tracking-[0.2em]"
            >
              Partner {i + 1}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-sensus-400">
          Partner logos coming soon. Want to back the next edition?{" "}
          <a
            href="/contact"
            className="text-sensus-200 hover:text-sensus-50 underline underline-offset-4"
          >
            Get in touch
          </a>
          .
        </p>
      </Section>

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
          <Eyebrow>Join</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-balance">
            Be in the next room.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-sensus-300 max-w-2xl mx-auto text-pretty">
            Apply once, get on the radar for every future edition. We'll only
            reach out when there's a real fit.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary">
              Apply to join
            </Button>
            <Button href={siteConfig.social.x} variant="secondary" external>
              See who's there
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
