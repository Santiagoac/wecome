import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { TESTIMONIALS } from "@/content/testimonials";

export function Testimonials() {
  return (
    <Section tone="muted">
      <SectionHeader
        eyebrow="Historias reales"
        title="Empresarios que dieron el siguiente paso"
        description="Detrás de cada crédito hay una decisión valiente, un equipo y una historia."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-ink-200/60"
          >
            <Quote className="h-6 w-6 text-brand-300" />
            <blockquote className="mt-4 grow text-pretty text-ink-700 leading-relaxed">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-ink-100 pt-4">
              <p className="font-semibold text-ink-900">{t.name}</p>
              <p className="text-sm text-ink-500">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
