"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { simulate, clampAmount, clampMonths } from "@/lib/simulator";
import { PRODUCT_PYME } from "@/lib/constants";
import { formatMXN } from "@/lib/utils";
import { AmortizationTable } from "./amortization-table";

type Props = {
  defaultAmount?: number;
  defaultMonths?: number;
  variant?: "compact" | "full";
};

export function Simulator({
  defaultAmount = 1_500_000,
  defaultMonths = 36,
  variant = "compact",
}: Props) {
  const [amount, setAmount] = React.useState(clampAmount(defaultAmount));
  const [months, setMonths] = React.useState(clampMonths(defaultMonths));

  const result = React.useMemo(
    () => simulate({ amount, months }),
    [amount, months]
  );

  const ctaHref = `/solicitar/pyme?monto=${amount}&plazo=${months}`;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-ink-200/60 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink-900">
            Simula tu crédito Pyme
          </h3>
          <p className="text-sm text-ink-500">
            Cifra estimada. Sujeto a condiciones de cada cliente.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <Field
          label="Monto del préstamo"
          value={formatMXN(amount)}
          hint={`${formatMXN(PRODUCT_PYME.minAmount)} – ${formatMXN(PRODUCT_PYME.maxAmount)}`}
        >
          <Slider
            min={PRODUCT_PYME.minAmount}
            max={PRODUCT_PYME.maxAmount}
            step={50_000}
            value={[amount]}
            onValueChange={([v]) => setAmount(v)}
          />
        </Field>

        <Field
          label="Plazo"
          value={`${months} meses`}
          hint={`${PRODUCT_PYME.minMonths} – ${PRODUCT_PYME.maxMonths} meses`}
        >
          <Slider
            min={PRODUCT_PYME.minMonths}
            max={PRODUCT_PYME.maxMonths}
            step={6}
            value={[months]}
            onValueChange={([v]) => setMonths(v)}
          />
        </Field>
      </div>

      <div className="mt-8 rounded-2xl bg-accent-800 p-6 text-white">
        <p className="text-xs font-mono uppercase tracking-[0.08em] text-accent-300">
          Pago mensual estimado
        </p>
        <p className="mt-1 font-display text-4xl font-semibold sm:text-5xl">
          {formatMXN(result.monthlyPayment, { fractionDigits: 0 })}
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-sm">
          <Stat
            label="Monto total a pagar"
            value={formatMXN(result.totalPayment)}
          />
          <Stat
            label="CAT promedio anual fijo"
            value={`${result.cat.toFixed(1)}%`}
          />
        </dl>
      </div>

      <Button asChild size="lg" className="mt-6 w-full">
        <Link href={ctaHref}>
          Solicitar crédito
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>

      {variant === "full" && (
        <div className="mt-10">
          <h4 className="font-display text-lg font-semibold text-ink-900">
            Tabla de amortización
          </h4>
          <p className="mt-1 text-sm text-ink-600">
            Vista mes a mes: capital, intereses y saldo restante.
          </p>
          <div className="mt-4">
            <AmortizationTable schedule={result.schedule} />
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  hint,
  children,
}: {
  label: string;
  value: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-ink-800">{label}</span>
        <span className="font-display text-lg font-semibold text-brand-800">
          {value}
        </span>
      </div>
      <div className="mt-3">{children}</div>
      {hint && <p className="mt-2 text-xs text-ink-500">{hint}</p>}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-mono uppercase tracking-[0.08em] text-accent-300">
        {label}
      </dt>
      <dd className="mt-1 font-display text-lg font-semibold">{value}</dd>
    </div>
  );
}
