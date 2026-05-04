"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Building2, UserRound, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { moffinPymeUrl, type PymePersonaType } from "@/lib/handoffs";

const OPTIONS: {
  type: PymePersonaType;
  title: string;
  shortLabel: string;
  description: string;
  hint: string;
  Icon: typeof UserRound;
}[] = [
  {
    type: "pfae",
    title: "Persona Física con Actividad Empresarial",
    shortLabel: "PFAE",
    description:
      "Eres una persona dada de alta ante el SAT con actividad empresarial: profesional independiente, comerciante o emprendedor que opera con su RFC personal.",
    hint: "Tu RFC tiene 13 caracteres y opera a tu nombre.",
    Icon: UserRound,
  },
  {
    type: "pm",
    title: "Persona Moral",
    shortLabel: "PM",
    description:
      "Tu negocio está constituido como empresa ante notario: S.A. de C.V., S. de R.L. de C.V., S.A.P.I. de C.V., etc., con su propio RFC.",
    hint: "Tu RFC tiene 12 caracteres y representa a la empresa.",
    Icon: Building2,
  },
];

export function PersonaPymeSelector() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = React.useState<PymePersonaType | null>(null);

  const monto = (() => {
    const v = Number(searchParams.get("monto"));
    return Number.isFinite(v) && v > 0 ? v : undefined;
  })();
  const plazo = (() => {
    const v = Number(searchParams.get("plazo"));
    return Number.isFinite(v) && v > 0 ? v : undefined;
  })();

  function handleSelect(persona: PymePersonaType) {
    const url = moffinPymeUrl({ monto, plazo, persona });
    if (!url) return;
    setLoading(persona);
    window.location.href = url;
  }

  return (
    <section className="container-narrow py-16 sm:py-20">
      <div className="text-center">
        <span className="pill">Solicitud de Crédito Pyme</span>
        <h1 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          ¿Cómo está constituido tu negocio?
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-ink-600">
          Tenemos un formulario de precalificación para cada tipo de persona.
          Elige la opción que aplique a tu negocio para continuar.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {OPTIONS.map(({ type, title, shortLabel, description, hint, Icon }) => {
          const isLoading = loading === type;
          const isDisabled = loading !== null;
          return (
            <button
              key={type}
              type="button"
              onClick={() => handleSelect(type)}
              disabled={isDisabled}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 text-left ring-1 ring-ink-200/60 transition hover:shadow-lg hover:ring-brand-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="flex min-h-[3.25rem] flex-1 flex-col justify-center">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-brand-600">
                    {shortLabel}
                  </p>
                  <h2 className="mt-0.5 text-balance font-display text-lg font-semibold leading-tight text-ink-900">
                    {title}
                  </h2>
                </div>
              </div>

              <div className="mt-4 flex-1 space-y-2">
                <p className="text-sm leading-relaxed text-ink-600">
                  {description}
                </p>
                <p className="text-xs text-ink-500">{hint}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-4">
                <span className="text-sm font-semibold text-brand-700">
                  {isLoading ? "Abriendo formulario…" : "Continuar"}
                </span>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin text-brand-700" />
                ) : (
                  <ArrowRight className="h-4 w-4 text-brand-700 transition group-hover:translate-x-1" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl bg-ink-50 p-5 text-center text-sm text-ink-600">
        ¿No estás seguro qué tipo de persona aplica a tu negocio?{" "}
        <Link href="/contacto" className="font-medium text-brand-700 underline">
          Contacta a un asesor
        </Link>{" "}
        y te ayudamos a identificarlo.
      </div>
    </section>
  );
}
