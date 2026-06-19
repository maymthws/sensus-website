import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--line)] bg-gradient-to-b from-transparent to-[var(--bg-tint)]/50">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1 max-w-xs">
            <Logo />
            <p className="mt-4 text-sm text-[var(--ink-500)] text-pretty leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-400)] mb-4">
              Explore
            </h5>
            <div className="flex flex-col gap-2.5">
              <Link href="/events" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">Events</Link>
              <Link href="/spotlight" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">Project Spotlight</Link>
              <Link href="/community" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">Community</Link>
              <Link href="/contact" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">Apply to demo</Link>
            </div>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-400)] mb-4">
              Follow
            </h5>
            <div className="flex flex-col gap-2.5">
              <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">
                Twitter / X
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">
                YouTube
              </a>
              <a href="mailto:hello@sensus.events" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">
                hello@sensus.events
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-400)] mb-4">
              Next edition
            </h5>
            <div className="flex flex-col gap-2.5">
              <Link href="/contact" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">Apply to demo</Link>
              <Link href="/contact" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">Partner with SENSUS</Link>
              <Link href="/contact" className="text-sm text-[var(--ink-500)] hover:text-[var(--ink-900)]">Press &amp; media</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--ink-400)]">
            © {new Date().getFullYear()} SENSUS. A demo night for what's next.
          </p>
          <div className="flex gap-2">
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/70 border border-[var(--line)] text-[var(--ink-500)] hover:bg-[var(--ink-900)] hover:text-white hover:border-[var(--ink-900)] hover:-translate-y-0.5 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/70 border border-[var(--line)] text-[var(--ink-500)] hover:bg-[var(--ink-900)] hover:text-white hover:border-[var(--ink-900)] hover:-translate-y-0.5 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
