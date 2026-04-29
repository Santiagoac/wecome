import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Building2, BadgeCheck, Sparkles, MessageCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Crédito Nómina",
  description:
    "Crédito personal para empleados de empresas con convenio Wecome. Solicitud en línea y descuento directo vía nómina.",
};

const employeeBenefits = [
  {
    icon: Sparkles,
    title: "Solicitud 100% en línea",
    description:
      "Inicia sesión, captura tu información y firma digitalmente. Sin papeleo innecesario.",
  },
  {
    icon: BadgeCheck,
    title: "Aprobación ágil",
    description:
      "Validamos rápido porque el descuento ocurre vía nómina, lo que reduce el riesgo del crédito.",
  },
  {
    icon: Building2,
    title: "Privacidad y respeto",
    description:
      "Tu solicitud se gestiona con total confidencialidad y conforme al Aviso de Privacidad.",
  },
];

export default function CreditoNominaPage() {
  if (!FEATURES.nominaVisible) redirect("/");

  return (
    <>
      <Section tone="muted" className="!pb-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="pill">Crédito Nómina</span>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Crédito personal con descuento directo vía nómina.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-ink-600">
              Si trabajas en una empresa con convenio Wecome, puedes solicitar
              tu crédito en minutos. Si eres empresa, súmate al programa y
              ofrécelo como beneficio a tu equipo.
            </p>
          </div>
          <div className="grid gap-4">
            <Link
              href="/solicitar/nomina/empleado"
              className="group flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-ink-200/60 transition hover:shadow-md hover:ring-brand-200"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-ink-900">
                  Soy empleado con convenio
                </h3>
                <p className="mt-1 text-sm text-ink-600">
                  Ingresa al portal del empleado para iniciar tu solicitud.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  Ir al portal
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <Link
              href="/solicitar/nomina/empresa"
              className="group flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-ink-200/60 transition hover:shadow-md hover:ring-accent-300"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-ink-900">
                  Quiero ofrecerlo en mi empresa
                </h3>
                <p className="mt-1 text-sm text-ink-600">
                  Te conectamos con un agente Wecome por WhatsApp.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-700">
                  Hablar con un agente
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Para empleados"
          title="Beneficios pensados para tu día a día"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {employeeBenefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-2xl bg-white p-6 ring-1 ring-ink-200/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="pill bg-white/10 text-white ring-white/15">
              Para empresas
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ofrece un beneficio financiero a tu equipo, sin complicaciones.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-brand-100">
              Trabajamos contigo en el alta de empresa, firma de convenio y
              registro de empleados. Un agente Wecome te guía paso a paso por
              WhatsApp para que el proceso sea rápido y claro.
            </p>
            <Button asChild size="lg" variant="accent" className="mt-8">
              <Link href="/solicitar/nomina/empresa">
                Hablar con un agente
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ol className="grid gap-3 text-sm text-brand-100">
            {[
              "Firma del convenio de descuento por nómina",
              "Alta de empresa en la plataforma",
              "Registro de empleados (lista blanca)",
              "Activación: tus colaboradores pueden solicitar",
            ].map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                <span className="font-display text-lg font-semibold text-accent-300">
                  0{i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
