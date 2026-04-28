import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", className)}
      aria-label="Wecome - Inicio"
    >
      <span
        className="font-sans text-2xl font-medium tracking-[-0.02em] leading-none select-none"
        style={{ letterSpacing: "-0.02em" }}
      >
        <span className="text-brand-500">we</span>
        <span className={variant === "light" ? "text-white" : "text-ink-700"}>come</span>
      </span>
    </Link>
  );
}
