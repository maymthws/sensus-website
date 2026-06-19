"use client";

import { useEffect, useRef } from "react";

/**
 * Reveal-on-scroll — adds .is-visible to any element with .reveal or .reveal-stagger
 * Uses IntersectionObserver for cheap, smooth reveal animations.
 */
export function RevealOnScroll() {
  const observed = useRef(new WeakSet<Element>());

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".reveal:not(.is-visible), .reveal-stagger:not(.is-visible)",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observed.current.add(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    targets.forEach((t) => {
      if (!observed.current.has(t)) observer.observe(t);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
