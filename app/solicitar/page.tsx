import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FEATURES, PRODUCT_PYME } from "@/lib/constants";
import { formatMXN } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solicitar crédito",
  description:
    "Elige el producto que necesitas: Crédito Pyme con garantía inmobiliaria o Crédito de Nómina para empleados de empresas con convenio.",
};

export default function SolicitarPage() {
  if (!FEATURES.nominaVisible) redirect("/solicitar/pyme");

  return (
    <Section tone="muted">
      <SectionHeader
        eyebrow="Solicitar crédito"
        title="¿Qué tipo de crédito buscas?"
        description="Tenemos dos productos diseñados para distintas necesidades. Elige la opción que mejor te describa para iniciar tu solicitud."
        align="center"
        className="mx-auto"
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
        <Link
          href="/solicitar/pyme"
          className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink-200/60 transition hover:shadow-lg hover:ring-brand-200"
        >
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-50 transition group-hover:bg-brand-100" />
          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <Briefcase className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
              Crédito Pyme
            </h3>
            <p className="mt-2 text-ink-600">
              Crédito empresarial respaldado por garantía inmobiliaria, ideal
              para capital de trabajo, expansión, equipo o remodelación.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink-700">
              <li>• Desde {formatMXN(PRODUCT_PYME.minAmount)} hasta {formatMXN(PRODUCT_PYME.maxAmount)}</li>
              <li>• Plazos de {PRODUCT_PYME.minMonths} a {PRODUCT_PYME.maxMonths} meses</li>
              <li>• Sin comisión por pago anticipado</li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
              Iniciar solicitud
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <Link
          href="/credito-nomina"
          className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink-200/60 transition hover:shadow-lg hover:ring-accent-300"
        >
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent-50 transition group-hover:bg-accent-100" />
          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-white">
              <Users className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
              Crédito Nómina
            </h3>
            <p className="mt-2 text-ink-600">
              Crédito personal para empleados de empresas con convenio Wecome.
              Descuento directo vía nómina.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink-700">
              <li>• Para empleados activos con convenio vigente</li>
              <li>• Solicitud 100% en línea</li>
              <li>• Empresas: invitamos a sumarse al programa</li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-700">
              Ver opciones
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </Section>
  );
}
