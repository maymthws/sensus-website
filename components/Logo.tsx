import Link from "next/link";

export function Logo({
  size = "md",
  asLink = true,
}: {
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
}) {
  const dim = size === "sm" ? 28 : size === "lg" ? 48 : 32;
  const textSize =
    size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";

  const content = (
    <span className="inline-flex items-center gap-2.5 group">
      <span
        aria-hidden
        className="relative inline-block"
        style={{ width: dim, height: dim }}
      >
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <defs>
            <linearGradient
              id="lg-chrome"
              x1="0"
              y1="0"
              x2="64"
              y2="64"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffffff" />
              <stop offset=".25" stopColor="#c8d3e3" />
              <stop offset=".5" stopColor="#5a6878" />
              <stop offset=".75" stopColor="#c8d3e3" />
              <stop offset="1" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path
            d="M20 12c-6 0-11 5-11 11v18c0 6 5 11 11 11h24c6 0 11-5 11-11V23c0-6-5-11-11-11H20z"
            stroke="url(#lg-chrome)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(255,255,255,0.4)"
          />
          <path
            d="M28 22c-3 0-5 2.2-5 5v10c0 2.8 2 5 5 5h8c2.8 0 5-2.2 5-5V27c0-2.8-2.2-5-5-5h-8z"
            stroke="url(#lg-chrome)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="36" cy="32" r="1.8" fill="#ffffff" />
        </svg>
      </span>
      <span
        className={`${textSize} font-display font-semibold tracking-[0.12em] text-[var(--ink-900)]`}
      >
        SENSUS
      </span>
    </span>
  );

  if (!asLink) return content;
  return (
    <Link
      href="/"
      className="inline-flex items-center transition-opacity hover:opacity-80"
    >
      {content}
    </Link>
  );
}
