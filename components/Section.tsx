import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section-pad container-x ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-14 ${
        align === "center"
          ? "text-center mx-auto max-w-3xl"
          : "max-w-3xl"
      } reveal`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 font-display text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-500)] text-pretty leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
