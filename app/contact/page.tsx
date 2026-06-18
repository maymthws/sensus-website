import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Apply to demo at SENSUS, partner with us, or join the community.",
};

const contactChannels = [
  {
    label: "X / Twitter",
    handle: "@SensusHQ",
    href: siteConfig.social.x,
    description: "Fastest way to reach us. DM is open.",
  },
  {
    label: "YouTube",
    handle: "@SENSUSHQ",
    href: siteConfig.social.youtube,
    description: "Watch every demo. Subscribe for updates.",
  },
  {
    label: "Email",
    handle: "hello@sensus.website",
    href: "mailto:hello@sensus.website",
    description: "Partnerships, press, and slow conversations.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
            <span className="text-sensus-50">Let's</span>{" "}
            <span className="chrome-text">build together.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sensus-300 text-pretty leading-relaxed">
            Applying to demo, partnering on an edition, or joining the
            community — pick the path that fits and we'll route you to the
            right person.
          </p>
        </div>
      </section>

      <Section className="!pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-2xl p-6 sm:p-10">
            <SectionHeading
              eyebrow="Apply"
              title="Tell us about your project"
              description="We review every application personally. Expect a reply within a week."
            />
            <ContactForm />
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-sensus-50 mb-6">
              Other ways to reach us
            </h3>
            <div className="space-y-4">
              {contactChannels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass glass-hover rounded-2xl p-5 block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sensus-400">
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
                      className="text-sensus-400"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </div>
                  <div className="mt-2 font-display text-base text-sensus-50">
                    {c.handle}
                  </div>
                  <p className="mt-1 text-sm text-sensus-300">{c.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
