"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navItems } from "@/lib/config";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="container-x">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/85 border border-[var(--line)] backdrop-blur-xl shadow-md"
              : "bg-white/60 border border-white/70 backdrop-blur-xl"
          }`}
          style={{ padding: "10px 16px 10px 20px" }}
        >
          <Logo />
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all ${
                    active
                      ? "text-[var(--ink-900)] bg-white/80 shadow-sm border border-[var(--line)]"
                      : "text-[var(--ink-500)] hover:text-[var(--ink-900)] hover:bg-white/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="btn btn-primary hidden sm:inline-flex text-sm"
              style={{ padding: "10px 18px" }}
            >
              Apply to demo <span className="arrow">→</span>
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 border border-[var(--line)] text-[var(--ink-700)]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {open ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 chrome-surface p-2 animate-fade-up">
            <nav className="flex flex-col">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 text-sm font-medium rounded-[var(--radius-md)] transition-colors ${
                      active
                        ? "bg-[var(--bg-tint)] text-[var(--ink-900)]"
                        : "text-[var(--ink-700)] hover:bg-[var(--bg-tint)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 btn btn-primary justify-center"
              >
                Apply to demo <span className="arrow">→</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
