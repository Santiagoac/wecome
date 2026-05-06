import { RATES } from "@/lib/constants";

export function SimulatorDisclaimer() {
  return (
    <p className="text-[11px] leading-snug text-ink-400">
      <span className="font-medium text-ink-500">WECOME Business Credit Simple.</span>{" "}
      <span className="text-[13px] font-medium text-ink-600">CAT promedio anual fijo de {RATES.pyme.productCatAvgInline}% sin IVA</span>,
      informativo, incorpora la totalidad de los gastos inherentes a los créditos.
      Fecha de cálculo {RATES.asOf}.{" "}
      <span className="text-[13px] font-medium text-ink-600">Tasa de interés Nominal promedio anual fija sin IVA de {RATES.pyme.nominalAnnualAvg}%</span>,
      dependiendo del nivel de calificación de riesgo de cada cliente.{" "}
      <span className="font-medium uppercase tracking-wider text-ink-500">Legales:</span>{" "}
      Ejercicio informativo, sujeto a condiciones particulares de cada cliente.{" "}
      <span className="font-medium text-ink-500">CAT:</span> El Costo Anual
      Total de financiamiento expresado en términos porcentuales anuales que,
      para fines informativos y de comparación, incorpora la totalidad de los
      costos y gastos inherentes a los créditos. Ejercicio informativo, sujeto
      a condiciones particulares de cada cliente.
    </p>
  );
}
