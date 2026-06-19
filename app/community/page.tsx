import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Builders, investors, and operators who make SENSUS what it is.",
};

const archetypes = [
  { n: "01", title: "Builders", body: "Founders, engineers, designers shipping the next wave of Web3, AI, and consumer products." },
  { n: "02", title: "Partners", body: "Tier-1 VCs, ecosystem funds, launchpads, exchanges, and infra providers." },
  { n: "03", title: "Operators", body: "Product, growth, and community leaders scaling teams and category-defining products." },
  { n: "04", title: "Press & Creators", body: "Newsletters, analysts, and creators covering the next chapter of Web3." },
];

const benefits = [
  { title: "Curated invitations", body: "First-look invites to every edition and the recordings before public release." },
  { title: "Direct intros", body: "Warm connections to partners, investors, and peer founders who've shipped." },
  { title: "Working sessions", body: "Small-group pre-event working sessions with speakers and core community." },
  { title: "Permanent archive", body: "Full access to the recording library — searchable demos, transcripts, and slides." },
];

export default function CommunityPage() {
  return (
    <>
      <section className="pt-40 sm:pt-48 pb-12 text-center">
        <div className="container-x">
          <span className="eyebrow reveal">Community</span>
          <h1 className="mt-6 reveal">
            <span className="text-[var(--ink-900)]">People who</span>{" "}
            <span className="chrome-text">make SENSUS.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--ink-500)] text-pretty leading-relaxed reveal">
            SENSUS is the people in the room. We curate a small, working group
            of builders, partners, and operators who turn a 10-minute demo into
            long-term relationships.
          </p>
        </div>
      </section>

      <Section className="!pt-8">
        <SectionHeading
          eyebrow="Who's in the room"
          title={
            <>
              Four <span className="chrome-text">archetypes.</span>
            </>
          }
          description="A working community, not a spectator audience."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 reveal-stagger">
          {archetypes.map((b) => (
            <div key={b.title} className="glass-card p-7">
              <div className="chrome-text font-display font-semibold tracking-[0.2em] text-sm">
                {b.n}
              </div>
              <h3 className="mt-3 text-[var(--ink-900)]">{b.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-500)] text-pretty leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Membership"
          title={
            <>
              What you <span className="chrome-text">get.</span>
            </>
          }
          description="Tangible reasons to be part of the SENSUS network."
        />
        <div className="grid gap-6 md:grid-cols-2 reveal-stagger">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card p-8">
              <h3 className="text-[var(--ink-900)]">{b.title}</h3>
              <p className="mt-3 text-sm text-[var(--ink-500)] text-pretty leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Partners"
          title={
            <>
              Backed by people who <span className="chrome-text">build.</span>
            </>
          }
          description="SENSUS is supported by a growing group of partners who share the mission — curated, recorded, high-signal gatherings for the Web3 ecosystem."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 reveal-stagger">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[5/2] glass-card flex items-center justify-center text-[var(--ink-400)] text-xs uppercase tracking-[0.2em]"
            >
              Partner {i + 1}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-[var(--ink-400)]">
          Partner logos coming soon. Want to back the next edition?{" "}
          <Link href="/contact" className="text-[var(--ink-700)] hover:text-[var(--ink-900)] underline underline-offset-4">
            Get in touch
          </Link>
          .
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="chrome-surface text-center p-12 sm:p-20 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 800px 400px at 50% 50%, rgba(216,227,243,0.3), transparent 60%)",
            }}
          />
          <div className="relative">
            <span className="eyebrow">Join</span>
            <h2 className="mt-4 font-display text-[var(--ink-900)] text-balance">
              Be in the next room.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[var(--ink-500)] max-w-2xl mx-auto text-pretty">
              Apply once, get on the radar for every future edition. We'll only reach out when there's a real fit.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Apply to join <span className="arrow">→</span>
              </Link>
              <Link href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                See who's there
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
