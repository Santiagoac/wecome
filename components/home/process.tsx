import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  { n: "01", title: "Simula tu crédito", description: "Define el monto, el plazo y conoce tu pago mensual estimado." },
  { n: "02", title: "Regístrate y completa la solicitud", description: "Crea tu usuario y captura tus datos en la plataforma segura." },
  { n: "03", title: "Envía tu documentación", description: "Carga identificación, comprobantes y documentos del inmueble." },
  { n: "04", title: "Análisis y avalúo", description: "Análisis financiero personalizado y avalúo en 24–72 horas." },
  { n: "05", title: "Firma y recibe tu crédito", description: "Firma ante notario público con fideicomiso de garantía." },
  { n: "06", title: "Paga a tiempo", description: "Conviértete en Cliente VIP al concluir tu crédito." },
];

export function Process() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Proceso"
        title="Rápido, seguro y personalizado"
        description="Así obtienes tu Wecome Business Credit en seis pasos claros, sin sorpresas ni costos ocultos."
      />
      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="relative rounded-2xl bg-white p-6 ring-1 ring-ink-200/60 transition hover:shadow-md"
          >
            <span className="font-display text-3xl font-semibold text-brand-200">
              {s.n}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">
              {s.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">
              {s.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
