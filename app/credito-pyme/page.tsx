import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Simulator } from "@/components/simulator/simulator";
import { PRODUCT_PYME, RATES } from "@/lib/constants";
import { formatMXN } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Crédito Pyme",
  description:
    "Crédito empresarial con garantía inmobiliaria desde $1M hasta $3M MXN. Plazos flexibles, sin comisión por pago anticipado.",
};

const features = [
  {
    title: "Sin historial crediticio perfecto",
    description:
      "Analizamos tu flujo de efectivo y la garantía. Tener antecedentes en buró no significa rechazo automático.",
  },
  {
    title: "Atención humana, no algorítmica",
    description:
      "Cada solicitud la evalúa un equipo de expertos financieros y valuadores certificados.",
  },
  {
    title: "Sin penalización por pago anticipado",
    description:
      "Toda aportación que exceda tu mensualidad reduce plazo o pago, según te convenga.",
  },
  {
    title: "Avalúo en 24–72 horas",
    description:
      "Proceso ágil con avalúo profesional incluido y formalización ante notario público.",
  },
];

export default function CreditoPymePage() {
  return (
    <>
      <Section className="!pb-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="pill">Crédito Pyme</span>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Convierte tu propiedad en una oportunidad real de crecimiento.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-ink-600">
              Wecome Business Credit es un crédito simple o revolvente para
              PyMEs y personas físicas con actividad empresarial. Respaldado
              por una garantía inmobiliaria depositada en fideicomiso.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
              <Highlight
                term="Monto"
                value={`Hasta ${formatMXN(PRODUCT_PYME.maxAmount)}`}
                hint={`Desde ${formatMXN(PRODUCT_PYME.minAmount)}`}
              />
              <Highlight
                term="Plazo"
                value={`${PRODUCT_PYME.minMonths}–${PRODUCT_PYME.maxMonths} meses`}
                hint="Sin comisión por prepago"
              />
              <Highlight
                term="Tasa promedio"
                value={`${RATES.pyme.nominalAnnualAvg}%`}
                hint="Anual fija"
              />
              <Highlight
                term="CAT promedio"
                value={`${RATES.pyme.catAvg}%`}
                hint="Sin IVA"
              />
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/solicitar/pyme">
                  Solicitar ahora
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/requisitos">Ver requisitos</Link>
              </Button>
            </div>
          </div>
          <div>
            <Simulator />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="Lo que vas a recibir"
          title="Una experiencia diseñada para empresarios reales"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-ink-200/60"
            >
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-accent-600" />
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Tabla de amortización"
          title="Total claridad sobre cada peso"
          description="Tu contrato incluye una tabla de amortización con monto, tasa, periodicidad, capital, intereses, comisiones y costo total del crédito."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            "Monto del crédito otorgado y saldo inicial.",
            "Tasa de interés ordinaria y, en su caso, moratoria.",
            "Plazos y periodicidad de pago, fechas y duración total.",
            "Detalle mensual: capital, intereses y saldo insoluto.",
            "Comisiones y cargos aplicables identificados desde el inicio.",
            "Información de la garantía y administración en fideicomiso.",
            "Costo total del crédito a lo largo de toda la vida del producto.",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-ink-50 p-4 text-sm text-ink-700"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function Highlight({
  term,
  value,
  hint,
}: {
  term: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl bg-ink-50 p-4">
      <dt className="text-xs uppercase tracking-wider text-ink-500">{term}</dt>
      <dd className="mt-1 font-display text-lg font-semibold text-ink-900">
        {value}
      </dd>
      {hint && <p className="mt-0.5 text-xs text-ink-500">{hint}</p>}
    </div>
  );
}
