import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative mt-32 hairline border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 max-w-md">
            <Logo />
            <p className="mt-4 text-sm text-sensus-300 text-pretty leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-xs text-sensus-400 leading-relaxed">
              Curated by operators, for builders. Every demo is recorded and
              published.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sensus-400">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/" className="text-sensus-200 hover:text-sensus-50">Home</Link></li>
              <li><Link href="/events" className="text-sensus-200 hover:text-sensus-50">Events</Link></li>
              <li><Link href="/community" className="text-sensus-200 hover:text-sensus-50">Community</Link></li>
              <li><Link href="/spotlight" className="text-sensus-200 hover:text-sensus-50">Project Spotlight</Link></li>
              <li><Link href="/contact" className="text-sensus-200 hover:text-sensus-50">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sensus-400">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sensus-200 hover:text-sensus-50"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sensus-200 hover:text-sensus-50"
                >
                  YouTube
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sensus-200 hover:text-sensus-50">
                  Apply to demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-sensus-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-sensus-500">
            Crafted in Bangkok · Built for the Web3 ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
}
