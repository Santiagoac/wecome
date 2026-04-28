import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="bg-brand-900 text-white">
      <div className="container-page py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="pill bg-white/10 text-white ring-white/15">
              Tu siguiente paso
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Tu negocio puede ir más lejos.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-brand-100">
              Wecome Business Credit te acompaña desde el análisis inicial hasta
              la firma del contrato, con atención humana y total transparencia.
              Hoy también puedes dar el siguiente paso.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Button asChild size="xl" variant="accent" className="w-full sm:w-auto">
              <Link href="/solicitar">
                Solicitar crédito
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="ghost" className="w-full bg-white/10 text-white hover:bg-white/20 sm:w-auto">
              <Link href="/simulador">Simular mi crédito</Link>
            </Button>
            <p className="text-sm text-brand-200">
              Crea tu usuario y comienza tu evaluación en minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
