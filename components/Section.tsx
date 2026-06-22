import type { ReactNode } from "react";

type Variant = "default" | "tight" | "loose" | "withDivider";

export function Section({
  children,
  className = "",
  id,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: Variant;
}) {
  const padding =
    variant === "tight"
      ? "py-16 sm:py-20"
      : variant === "loose"
      ? "py-28 sm:py-40"
      : "py-20 sm:py-28";

  return (
    <section
      id={id}
      className={`relative ${padding} container-x ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionDivider() {
  return (
    <div aria-hidden className="container-x">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(20,28,50,0.10) 20%, rgba(20,28,50,0.10) 80%, transparent 100%)",
        }}
      />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[var(--ink-400)]">
      <span className="h-px w-6 bg-gradient-to-r from-transparent to-[var(--ink-500)]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "default",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  size?: "default" | "lg";
}) {
  const titleClass =
    size === "lg"
      ? "mt-6 font-display font-semibold tracking-tight text-balance"
      : "mt-4 font-display font-semibold tracking-tight text-balance";

  const titleStyle =
    size === "lg"
      ? { fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.035em", lineHeight: 1.05 }
      : undefined;

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === "center"
          ? "text-center mx-auto max-w-3xl"
          : "max-w-3xl"
      } reveal`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={titleClass} style={titleStyle}>
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-[var(--ink-500)] text-pretty leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
