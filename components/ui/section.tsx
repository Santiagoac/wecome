import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "default" | "muted" | "brand" | "dark";
};

export function Section({
  className,
  tone = "default",
  children,
  ...props
}: SectionProps) {
  const tones = {
    default: "bg-white",
    muted: "bg-ink-50",
    brand: "bg-brand-50",
    dark: "bg-ink-900 text-white",
  } as const;
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)}
      {...props}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <span className="pill mb-4">{eyebrow}</span>}
      <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-600">
          {description}
        </p>
      )}
    </div>
  );
}
