import { Clock, Home, BadgePercent } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const features = [
  {
    icon: Clock,
    title: "Plazos flexibles",
    description:
      "Desde 12 hasta 60 meses, sin comisión por pago anticipado. Ajusta el plazo a tu flujo y al proyecto que tienes en mente.",
  },
  {
    icon: Home,
    title: "Garantía inmobiliaria",
    description:
      "Inmueble libre de gravamen. El dueño puede ocuparlo y usarlo: solo se deposita en fideicomiso de garantía.",
  },
  {
    icon: BadgePercent,
    title: "Tasas y comisiones a tu medida",
    description:
      "Personalizadas según tu perfil y capacidad de pago. Incluso con calificación baja en buró, podemos apoyarte.",
  },
];

export function Features() {
  return (
    <Section tone="muted">
      <SectionHeader
        eyebrow="Lo que nos distingue"
        title="Crédito empresarial diseñado para crecer contigo"
        description="Tres pilares que hacen que cientos de empresarios mexicanos hayan confiado en nosotros para su próximo paso."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="group rounded-2xl bg-white p-6 ring-1 ring-ink-200/60 transition hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-ink-600">{f.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
