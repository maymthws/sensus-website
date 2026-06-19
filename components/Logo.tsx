import Link from "next/link";
import Image from "next/image";

export function Logo({
  size = "md",
  asLink = true,
  showText = true,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
  showText?: boolean;
}) {
  const dim =
    size === "sm" ? 28 : size === "lg" ? 56 : size === "xl" ? 96 : 32;
  const textSize =
    size === "sm"
      ? "text-sm"
      : size === "lg"
      ? "text-xl"
      : size === "xl"
      ? "text-2xl"
      : "text-base";

  const content = (
    <span className="inline-flex items-center gap-2.5 group">
      <span
        aria-hidden
        className="relative inline-block"
        style={{ width: dim, height: dim }}
      >
        <Image
          src="/logo-s.png"
          alt="SENSUS"
          width={dim * 2}
          height={dim * 2}
          priority
          className="w-full h-full object-contain transition-transform group-hover:scale-105"
        />
      </span>
      {showText && (
        <span
          className={`${textSize} font-display font-semibold tracking-[0.12em] text-[var(--ink-900)]`}
        >
          SENSUS
        </span>
      )}
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
