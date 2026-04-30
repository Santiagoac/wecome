import type { Metadata } from "next";
import { Simulator } from "@/components/simulator/simulator";
import { SimulatorDisclaimer } from "@/components/simulator/simulator-disclaimer";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Simulador",
  description:
    "Simula tu crédito Pyme con garantía inmobiliaria desde $1M hasta $3M MXN. Calcula mensualidad, intereses y tabla de amortización.",
};

type Props = {
  searchParams: Promise<{ monto?: string; plazo?: string }>;
};

export default async function SimuladorPage({ searchParams }: Props) {
  const sp = await searchParams;
  const monto = sp.monto ? Number(sp.monto) : undefined;
  const plazo = sp.plazo ? Number(sp.plazo) : undefined;

  return (
    <Section tone="muted" className="py-16 sm:py-20">
      <SectionHeader
        eyebrow="Simulador"
        title="Calcula tu crédito Pyme"
        description="Ajusta el monto y el plazo para ver tu pago mensual estimado, los intereses totales y la tabla de amortización completa."
        align="center"
        className="mx-auto"
      />
      <div className="mx-auto mt-12 max-w-2xl">
        <Simulator
          variant="full"
          defaultAmount={Number.isFinite(monto) ? monto : undefined}
          defaultMonths={Number.isFinite(plazo) ? plazo : undefined}
        />
      </div>
      <div className="mt-12 lg:mt-16">
        <SimulatorDisclaimer />
      </div>
    </Section>
  );
}
