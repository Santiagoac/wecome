import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { ABOUT } from "@/content/nosotros";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Wecome es una SOFOM E.N.R. especializada en crédito empresarial con garantía inmobiliaria. Conoce nuestra misión, visión y valores.",
};

export default function NosotrosPage() {
  return (
    <>
      <Section className="!pb-12">
        <span className="pill">Nosotros</span>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-5xl">
          Una financiera que cree en el siguiente paso de tu negocio.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg text-ink-600">
          Operamos como SOFOM E.N.R. y combinamos disciplina financiera con
          atención humana, para acompañar a empresas con flujo comprobable y
          activos que pueden trabajar a su favor.
        </p>
      </Section>

      <Section tone="muted" className="!py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <article>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Misión
            </span>
            <p className="mt-3 text-lg leading-relaxed text-ink-800">
              {ABOUT.mission}
            </p>
          </article>
          <article>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Visión
            </span>
            <p className="mt-3 text-lg leading-relaxed text-ink-800">
              {ABOUT.vision}
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Valores"
          title="La forma en que trabajamos"
          description="Seis principios que guían cada decisión que tomamos, desde la primera llamada hasta la firma."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ABOUT.values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl bg-white p-6 ring-1 ring-ink-200/60"
            >
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-8 sm:grid-cols-3">
          {ABOUT.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl font-semibold text-accent-300">
                {s.value}
              </p>
              <p className="mt-2 max-w-xs text-pretty text-brand-100">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
