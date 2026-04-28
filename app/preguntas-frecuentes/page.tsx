import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { FaqList } from "@/components/faq/faq-list";
import { FAQS_PYME } from "@/content/faqs-pyme";
import { FAQS_NOMINA } from "@/content/faqs-nomina";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre Crédito Pyme y Crédito Nómina: tasas, plazos, garantías, requisitos y proceso.",
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <Section className="!pb-12">
        <span className="pill">Preguntas frecuentes</span>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-5xl">
          Todo lo que querías saber, en un solo lugar.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg text-ink-600">
          Si tu duda no está aquí, escríbenos por correo o desde la página de
          contacto. Respondemos en horario hábil.
        </p>
      </Section>

      <Section tone="muted" className="!py-16">
        <SectionHeader
          eyebrow="Crédito Pyme"
          title="Sobre Wecome Business Credit"
        />
        <div className="mt-8">
          <FaqList faqs={FAQS_PYME} />
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Crédito Nómina"
          title="Sobre el crédito de nómina"
          description="Pendiente de ampliar con copy oficial de Wecome."
        />
        <div className="mt-8">
          <FaqList faqs={FAQS_NOMINA} />
        </div>
      </Section>
    </>
  );
}
