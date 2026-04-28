import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Simulator } from "@/components/simulator/simulator";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--color-brand-100),transparent_60%)]"
      />
      <div className="container-page py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="pill">
              <Sparkles className="h-3.5 w-3.5" />
              SOFOM E.N.R. — supervisada por la CNBV
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.5rem]">
              Tu negocio puede ir{" "}
              <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                más lejos
              </span>{" "}
              con Wecome.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-600">
              Crédito Pyme con garantía inmobiliaria desde $1M hasta $3M MXN, y
              crédito de nómina para empleados de empresas con convenio.
              Atención humana, proceso transparente, decisiones rápidas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl">
                <Link href="/solicitar">
                  Solicitar crédito
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="xl">
                <Link href="/simulador">Simular mi crédito</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-ink-600">
              <ShieldCheck className="h-5 w-5 text-accent-600" />
              <span>
                Datos personales protegidos conforme a la LFPDPPP. Inscritos en
                el Buró de Entidades Financieras.
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/40 to-accent-200/40 blur-2xl"
            />
            <Simulator />
          </div>
        </div>
      </div>
    </section>
  );
}
