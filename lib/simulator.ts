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
  openingFee: number;
  cat: number;
  schedule: AmortizationRow[];
};

/**
 * Amortización francesa (cuota fija):
 *   M = P · i / (1 − (1 + i)^−n)
 *
 * El CAT es constante para cualquier monto y plazo: la comisión anual
 * (annualCommissionPct) se convierte a mensual (÷12) y se suma a la tasa
 * mensual antes de capitalizar:
 *   CAT = (1 + simulatorMonthlyRatePct/100 + annualCommissionPct/100/12)^12 − 1
 */
export function simulate(input: SimulationInput): SimulationResult {
  const monthlyRate = RATES.pyme.simulatorMonthlyRatePct / 100;
  const annualRate = monthlyRate * 12 * 100;
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
    schedule.push({ period, payment: monthlyPayment, interest, principal, balance });
  }

  const openingFee = P * (RATES.pyme.openingFeePct / 100);
  const totalPayment = monthlyPayment * n + openingFee;
  const totalInterest = totalPayment - P;
  const effectiveMonthlyRate = monthlyRate + RATES.pyme.annualCommissionPct / 100 / 12;
  const cat = (Math.pow(1 + effectiveMonthlyRate, 12) - 1) * 100;

  return {
    amount: P,
    months: n,
    annualRate,
    monthlyRate,
    monthlyPayment,
    totalInterest,
    totalPayment,
    openingFee,
    cat,
    schedule,
  };
}

export function clampAmount(value: number) {
  return Math.min(PRODUCT_PYME.maxAmount, Math.max(PRODUCT_PYME.minAmount, value));
}

export function clampMonths(value: number) {
  return Math.min(PRODUCT_PYME.maxMonths, Math.max(PRODUCT_PYME.minMonths, value));
}
