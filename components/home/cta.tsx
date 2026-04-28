import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="bg-ink-900 text-white">
      <div className="container-page py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="pill bg-brand-500/15 text-brand-400 ring-brand-500/20">
              Tu siguiente paso
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tu negocio puede ir más lejos.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-ink-400">
              Wecome Business Credit te acompaña desde el análisis inicial hasta
              la firma del contrato, con atención humana y total transparencia.
              Hoy también puedes dar el siguiente paso.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <Link href="/solicitar">
                Solicitar crédito
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="ghost"
              className="w-full bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto"
            >
              <Link href="/simulador">Simular mi crédito</Link>
            </Button>
            <p className="text-sm text-ink-500">
              Crea tu usuario y comienza tu evaluación en minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
