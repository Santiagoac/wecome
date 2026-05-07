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
  commission: number;
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

  // Comisión fija mensual sobre el monto original del crédito
  const monthlyCommission = P * (RATES.pyme.annualCommission2Pct / 100 / 12) * 1.16;
  const totalMonthlyPayment = monthlyPayment + monthlyCommission;

  const schedule: AmortizationRow[] = [];
  let balance = P;
  for (let period = 1; period <= n; period++) {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    balance = Math.max(0, balance - principal);
    schedule.push({ period, payment: totalMonthlyPayment, interest, principal, commission: monthlyCommission, balance });
  }

  const openingFee = P * (RATES.pyme.openingFeePct / 100);
  const totalPayment = totalMonthlyPayment * n + openingFee;
  const totalInterest = totalPayment - P;

  // CAT vía IRR: el prestatario recibe P menos costos iniciales (apertura + fideicomiso/notarial)
  const upfrontCostRate = (RATES.pyme.openingFeePct + RATES.pyme.fideicomisoCostPct) / 100;
  const netDisbursement = P * (1 - upfrontCostRate);
  let irr = 0.04;
  for (let k = 0; k < 60; k++) {
    const pv = totalMonthlyPayment * (1 - Math.pow(1 + irr, -n)) / irr;
    const dpv = totalMonthlyPayment * (
      (1 - Math.pow(1 + irr, -n)) / (irr * irr) -
      n * Math.pow(1 + irr, -(n + 1)) / irr
    );
    const delta = (pv - netDisbursement) / dpv;
    irr -= delta;
    if (Math.abs(delta) < 1e-10) break;
  }
  const cat = (Math.pow(1 + irr, 12) - 1) * 100;

  return {
    amount: P,
    months: n,
    annualRate,
    monthlyRate,
    monthlyPayment: totalMonthlyPayment,
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
