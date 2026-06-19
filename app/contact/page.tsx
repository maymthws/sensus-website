import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Apply to demo at SENSUS, partner with us, or join the community.",
};

const channels = [
  {
    label: "X / Twitter",
    handle: "@SensusHQ",
    href: siteConfig.social.x,
    desc: "Fastest way to reach us. DM is open.",
  },
  {
    label: "YouTube",
    handle: "@SENSUSHQ",
    href: siteConfig.social.youtube,
    desc: "Watch every demo. Subscribe for updates.",
  },
  {
    label: "Email",
    handle: "hello@sensus.events",
    href: "mailto:hello@sensus.events",
    desc: "Partnerships, press, and slow conversations.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 sm:pt-48 pb-12 text-center">
        <div className="container-x">
          <span className="eyebrow reveal">Get in touch</span>
          <h1 className="mt-6 reveal">
            <span className="text-[var(--ink-900)]">Let's</span>{" "}
            <span className="chrome-text">build together.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--ink-500)] text-pretty leading-relaxed reveal">
            Applying to demo, partnering on an edition, or joining the community — pick the path that fits and we'll route you to the right person.
          </p>
        </div>
      </section>

      <Section className="!pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="chrome-surface p-7 sm:p-10 reveal">
            <span className="eyebrow">Apply</span>
            <h2 className="mt-4 font-display text-[var(--ink-900)]">Tell us about your project</h2>
            <p className="mt-3 text-sm text-[var(--ink-500)]">
              We review every application personally. Expect a reply within a week.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="reveal">
            <h3 className="font-display text-[var(--ink-900)] mb-6">Other ways to reach us</h3>
            <div className="flex flex-col gap-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card p-5 block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-400)]">
                      {c.label}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-[var(--ink-400)]"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </div>
                  <div className="mt-2 font-display text-[var(--ink-900)]">{c.handle}</div>
                  <p className="mt-1 text-sm text-[var(--ink-500)]">{c.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
