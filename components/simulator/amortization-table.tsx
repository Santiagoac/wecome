import type { AmortizationRow } from "@/lib/simulator";
import { formatMXN } from "@/lib/utils";

export function AmortizationTable({ schedule }: { schedule: AmortizationRow[] }) {
  return (
    <div className="max-h-[480px] overflow-auto rounded-xl ring-1 ring-ink-200">
      <table className="min-w-full divide-y divide-ink-200 text-sm">
        <thead className="sticky top-0 bg-ink-50 text-left">
          <tr>
            <Th>Mes</Th>
            <Th className="text-right">Pago</Th>
            <Th className="text-right">Capital</Th>
            <Th className="text-right">Interés</Th>
            <Th className="text-right">Comisión c/IVA</Th>
            <Th className="text-right">Saldo</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-100">
          {schedule.map((row) => (
            <tr key={row.period} className="hover:bg-ink-50">
              <Td>{row.period}</Td>
              <Td align="right">
                {formatMXN(row.payment, { fractionDigits: 0 })}
              </Td>
              <Td align="right">
                {formatMXN(row.principal, { fractionDigits: 0 })}
              </Td>
              <Td align="right">
                {formatMXN(row.interest, { fractionDigits: 0 })}
              </Td>
              <Td align="right">
                {row.commission > 0 ? formatMXN(row.commission, { fractionDigits: 0 }) : "—"}
              </Td>
              <Td align="right">
                {formatMXN(row.balance, { fractionDigits: 0 })}
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      scope="col"
      className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ink-600 ${className ?? ""}`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  align,
}: {
  children: React.ReactNode;
  align?: "right";
}) {
  return (
    <td
      className={`px-4 py-2.5 text-ink-800 ${align === "right" ? "text-right tabular-nums" : ""}`}
    >
      {children}
    </td>
  );
}
