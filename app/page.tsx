import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeading, SectionDivider } from "@/components/Section";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "SENSUS — A curated gathering for the Web3 ecosystem",
  description: siteConfig.description,
};

const marqueeTopics = [
  "AI agents",
  "DePIN",
  "Consumer crypto",
  "On-chain games",
  "Modular L1s",
  "ZK proofs",
  "Prediction markets",
  "Decentralized identity",
  "Robotics + AI",
  "RWA",
  "Social graphs",
  "Dev tooling",
];

const featuredDemos = [
  {
    title: "Aether — an agentic wallet that routes your intent",
    speaker: "Lin Park · Co-founder",
    tags: ["AI", "Wallet"],
    bg: "linear-gradient(135deg, #1a1f2c, #2a3a55)",
  },
  {
    title: "Nimbus — the social graph that doesn't sell you out",
    speaker: "Diego Marin · CEO",
    tags: ["Consumer", "Social"],
    bg: "linear-gradient(135deg, #0b0d12, #1a2030)",
  },
  {
    title: "Helix — sub-second finality for the next billion users",
    speaker: "Anya Volkov · Co-founder",
    tags: ["Blockchain", "L2"],
    bg: "linear-gradient(135deg, #1a2030, #3a4a6a)",
  },
];

const stats = [
  { value: "28", label: "Demos shipped" },
  { value: "3", label: "Editions · 2024–2025" },
  { value: "240K+", label: "YouTube minutes watched" },
  { value: "42M+", label: "Combined raised by alumni" },
];

export default function HomePage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden">
        {/* Decorative chrome ribbons */}
        <div aria-hidden className="hero-ribbon absolute inset-0 pointer-events-none">
          <svg
            className="hero-ribbon-1 absolute"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            style={{ top: "-20%", left: "-10%", width: "60%", opacity: 0.6 }}
          >
            <defs>
              <linearGradient id="chrome1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#d8e3f3" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#c8d3e3" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#aab2c2" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M-50,200 C150,80 350,320 550,200 C700,110 850,250 850,250 L850,400 C650,460 450,260 250,360 C100,430 -50,330 -50,330 Z"
              fill="url(#chrome1)"
            />
          </svg>
          <svg
            className="hero-ribbon-2 absolute"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            style={{ bottom: "-10%", right: "-10%", width: "55%", opacity: 0.6 }}
          >
            <defs>
              <linearGradient id="chrome2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#e8d8f3" stopOpacity="0.45" />
                <stop offset="80%" stopColor="#c5d5ee" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#8a98b0" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M850,300 C650,420 450,200 250,320 C100,410 -50,290 -50,290 L-50,140 C150,80 350,260 550,160 C700,80 850,180 850,180 Z"
              fill="url(#chrome2)"
            />
          </svg>
        </div>

        <div className="container-x relative z-10 pt-40 sm:pt-48 pb-20 sm:pb-28 text-center">
          <h1 className="reveal max-w-[1000px] mx-auto">
            A curated gathering for{" "}
            <span className="chrome-text">the Web3 ecosystem.</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--ink-500)] text-pretty leading-relaxed reveal">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3 reveal">
            <Link href="/spotlight" className="btn btn-primary">
              Watch past sessions <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ───────── WHAT IS SENSUS ───────── */}
      <Section variant="loose">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:items-center">
          {/* Text — left */}
          <div>
            <div className="reveal">
              <span className="eyebrow">What is SENSUS</span>
            </div>

            <h2
              className="mt-6 text-[var(--ink-900)] text-balance reveal"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.035em" }}
            >
              A curated gathering for{" "}
              <br className="hidden sm:block" />
              the Web3 ecosystem
            </h2>

            <div className="mt-10 max-w-2xl reveal-stagger space-y-6">
              <p className="text-base sm:text-lg text-[var(--ink-500)] text-pretty leading-relaxed">
                <strong className="text-[var(--ink-900)] font-semibold">Not a conference.</strong>{" "}
                SENSUS is a curated gathering — every edition is built around
                high-signal conversations, exclusive showcases, and real
                connections between builders and strategic partners.
              </p>
              <p className="text-base sm:text-lg text-[var(--ink-500)] text-pretty leading-relaxed">
                <strong className="text-[var(--ink-900)] font-semibold">A culture-first event series.</strong>{" "}
                SENSUS is designed to build long-term relationships within the
                Web3 community. The first chapter begins in Bangkok, followed
                by Seoul and Singapore — each edition contributes to a growing
                body of content and community.
              </p>
            </div>
          </div>

          {/* Visual — right: oversized chrome S inside glass card */}
          <div className="reveal lg:order-last">
            <div
              className="relative aspect-square w-full rounded-[var(--radius-xl)] overflow-hidden ring-1 ring-[var(--line)]"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #e9eef6 50%, #d8e3f3 100%)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(232,216,243,0.4), transparent 60%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 grid-bg opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center p-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-s.png"
                  alt=""
                  aria-hidden
                  className="w-full h-full object-contain drop-shadow-[0_8px_24px_rgba(20,28,50,0.10)]"
                />
              </div>
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--ink-500)]">
                <span>Chrome S</span>
                <span>sensus.events</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ───────── MARQUEE ───────── */}
      <div className="border-y border-[var(--line)] bg-white/40 backdrop-blur-md overflow-hidden">
        <div className="marquee-track flex gap-14 py-5 whitespace-nowrap animate-marquee">
          {[...marqueeTopics, ...marqueeTopics].map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 text-base font-medium text-[var(--ink-500)]"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--chrome-4)" }}
              />
              {t}
            </span>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* ───────── THE PROBLEM WE ARE SOLVING ───────── */}
      <Section variant="loose">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
          {/* Visual — left: oversized number/stat */}
          <div className="reveal order-2 lg:order-1">
            <div
              className="relative aspect-[4/5] w-full rounded-[var(--radius-xl)] overflow-hidden ring-1 ring-[var(--line)]"
              style={{
                background:
                  "linear-gradient(160deg, #1a1f2c 0%, #0b0d12 60%, #1a2030 100%)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 600px 500px at 30% 30%, rgba(216,227,243,0.16), transparent 60%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <div
                  className="font-display font-semibold tracking-tight leading-none"
                  style={{
                    fontSize: "clamp(120px, 18vw, 220px)",
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #c8d3e3 50%, #5a6878 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  80%
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.22em] text-white/60">
                  Rejection rate
                </div>
                <p className="mt-6 max-w-xs text-sm text-white/70 text-pretty leading-relaxed">
                  of demos that apply don't make the cut — every edition is
                  curated for signal, not volume.
                </p>
              </div>
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
                <span>Quality over quantity</span>
                <span>sensus.events</span>
              </div>
            </div>
          </div>

          {/* Text — right */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <span className="eyebrow">The problem we are solving</span>
            </div>
            <h2
              className="mt-6 text-[var(--ink-900)] text-balance reveal"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
              }}
            >
              Ecosystems need a spotlight for{" "}
              <span className="chrome-text">their best builders</span>
            </h2>

            <div className="mt-12 space-y-8 reveal-stagger">
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-md bg-[var(--bg-tint)] ring-1 ring-[var(--line)] flex items-center justify-center text-sm font-semibold text-[var(--ink-700)]">
                  01
                </div>
                <p className="text-base sm:text-lg text-[var(--ink-700)] text-pretty leading-relaxed">
                  <strong className="text-[var(--ink-900)] font-semibold">Ecosystem Visibility —</strong>{" "}
                  Major ecosystems lack an intimate, high-signal stage to showcase
                  their top-tier projects and key initiatives to a curated audience.
                </p>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-md bg-[var(--bg-tint)] ring-1 ring-[var(--line)] flex items-center justify-center text-sm font-semibold text-[var(--ink-700)]">
                  02
                </div>
                <p className="text-base sm:text-lg text-[var(--ink-700)] text-pretty leading-relaxed">
                  <strong className="text-[var(--ink-900)] font-semibold">Proof of Progress —</strong>{" "}
                  Emerging builders often lack a professional platform to demonstrate
                  real-world technical progress to strategic partners and potential allies.
                </p>
              </div>

              <div className="flex gap-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-md flex items-center justify-center text-sm font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(180deg, #1a1f2c 0%, #0b0d12 100%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 14px rgba(20,28,50,0.15)",
                  }}
                >
                  03
                </div>
                <p className="text-base sm:text-lg text-[var(--ink-700)] text-pretty leading-relaxed">
                  <strong className="text-[var(--ink-900)] font-semibold">
                    SENSUS fills this gap: A shared stage connecting strategic partners
                    with top builders, amplified by premium content.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ───────── FEATURED SPOTLIGHT ───────── */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-xl">
            <span className="eyebrow">From the spotlight</span>
            <h2 className="mt-4 font-display text-[var(--ink-900)] text-balance">
              Builders that hit our stage.
            </h2>
          </div>
          <Link href="/spotlight" className="btn btn-ghost">
            Browse all sessions <span className="arrow">→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 reveal-stagger">
          {featuredDemos.map((demo) => (
            <Link key={demo.title} href="/spotlight" className="block group">
              <article className="glass-card overflow-hidden p-0">
                <div
                  className="relative aspect-video flex items-center justify-center text-[var(--chrome-3)] text-sm"
                  style={{ background: demo.bg }}
                >
                  <span className="opacity-70 px-4 text-center font-medium">
                    {demo.title.split(" — ")[0]}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/40 to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="transition-transform group-hover:scale-110"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {demo.tags.map((t) => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-[var(--ink-900)] text-lg font-semibold leading-snug group-hover:text-[var(--ink-700)] transition-colors">
                    {demo.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--ink-500)]">{demo.speaker}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>

      <SectionDivider />

      {/* ───────── STATS ───────── */}
      <Section variant="loose">
        <div className="relative">
          {/* Oversized chrome S decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 -right-10 w-[420px] h-[420px] opacity-[0.06] hidden lg:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-s.png" alt="" aria-hidden className="w-full h-full object-contain" />
          </div>

          <div className="reveal">
            <span className="eyebrow">By the numbers</span>
          </div>

          <h2
            className="mt-6 max-w-2xl text-[var(--ink-900)] text-balance reveal"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
          >
            Three years of curated gatherings.{" "}
            <span className="chrome-text">Permanent archive.</span>
          </h2>

          <div className="mt-14 grid gap-10 grid-cols-2 lg:grid-cols-4 reveal-stagger">
            {stats.map((s) => (
              <div key={s.label}>
                <span
                  className="block font-display font-semibold tracking-tight text-[var(--ink-900)] leading-none mb-3"
                  style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
                >
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-[0.06em] text-[var(--ink-500)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Next edition teaser handled in stats block above — no CTA section */}
    </>
  );
}
