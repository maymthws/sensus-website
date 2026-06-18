import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 will-change-transform hover:translate-y-[-1px] active:translate-y-0";
  const variants = {
    primary:
      "chrome-text bg-white/[0.06] ring-1 ring-white/15 hover:bg-white/[0.10] hover:ring-white/25 shadow-glass hover:shadow-glass-hover",
    secondary:
      "text-sensus-100 bg-transparent ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20",
    ghost:
      "text-sensus-300 hover:text-sensus-50 hover:bg-white/5",
  };

  const cls = `${base} ${variants[variant]} ${className}`;
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;

  if (!href) {
    return <button className={cls}>{children}</button>;
  }
  return (
    <Link href={href} target={target} rel={rel} className={cls}>
      {children}
    </Link>
  );
}
