import { RATES, PRODUCT_PYME } from "./constants";

export type SimulationInput = {
  amount: number;
  months: number;
  annualRate?: number;
};

export type AmortizationRow = {
  period: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
};

export type SimulationResult = {
  amount: number;
  months: number;
  annualRate: number;
  monthlyRate: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  schedule: AmortizationRow[];
};

/**
 * Amortización francesa (cuota fija):
 *   M = P · i / (1 − (1 + i)^−n)
 *
 * Tasa por defecto: tasa promedio fija anual de Pyme (RATES.pyme.nominalAnnualAvg).
 * En el resultado siempre se muestra el disclaimer regulatorio con CAT y fecha.
 */
export function simulate(input: SimulationInput): SimulationResult {
  const annualRate = input.annualRate ?? RATES.pyme.nominalAnnualAvg;
  const monthlyRate = annualRate / 100 / 12;
  const n = input.months;
  const P = input.amount;

  const monthlyPayment =
    monthlyRate === 0 ? P / n : (P * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

  const schedule: AmortizationRow[] = [];
  let balance = P;
  for (let period = 1; period <= n; period++) {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    balance = Math.max(0, balance - principal);
    schedule.push({
      period,
      payment: monthlyPayment,
      interest,
      principal,
      balance,
    });
  }

  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - P;

  return {
    amount: P,
    months: n,
    annualRate,
    monthlyRate,
    monthlyPayment,
    totalInterest,
    totalPayment,
    schedule,
  };
}

export function clampAmount(value: number) {
  return Math.min(PRODUCT_PYME.maxAmount, Math.max(PRODUCT_PYME.minAmount, value));
}

export function clampMonths(value: number) {
  return Math.min(PRODUCT_PYME.maxMonths, Math.max(PRODUCT_PYME.minMonths, value));
}
