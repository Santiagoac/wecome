import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { REQUIREMENTS, REQUIREMENTS_GENERAL } from "@/content/requisitos";

export const metadata: Metadata = {
  title: "Requisitos",
  description:
    "Documentación necesaria para solicitar Crédito Pyme: persona física con actividad empresarial y persona moral.",
};

export default function RequisitosPage() {
  return (
    <>
      <Section className="!pb-12">
        <span className="pill">Requisitos</span>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-5xl">
          Lo que necesitas para solicitar tu Crédito Pyme.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg text-ink-600">
          Te dejamos la lista completa de documentos según tu tipo de persona.
          Toda la información se trata conforme al Aviso de Privacidad.
        </p>
      </Section>

      <Section tone="muted" className="!py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {REQUIREMENTS.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl bg-white p-8 ring-1 ring-ink-200/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <FileText className="h-5 w-5" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                {group.title}
              </h2>
              <p className="mt-2 text-ink-600">{group.intro}</p>
              <ul className="mt-6 space-y-2">
                {group.documents.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-3 text-sm text-ink-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" />
                    {doc}
                  </li>
                ))}
              </ul>
              <hr className="my-6 border-ink-100" />
              <ul className="space-y-2 text-xs text-ink-500">
                {group.notes.map((n) => (
                  <li key={n}>• {n}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Consideraciones generales"
          title="Cómo funciona la garantía"
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {REQUIREMENTS_GENERAL.map((item) => (
            <li
              key={item}
              className="rounded-xl bg-ink-50 p-4 text-sm text-ink-700"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/solicitar/pyme">
              Iniciar solicitud
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
