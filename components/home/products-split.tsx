import Link from "next/link";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import { FEATURES, PRODUCT_PYME } from "@/lib/constants";
import { formatMXN } from "@/lib/utils";
import { PymeIllustration } from "@/components/home/pyme-illustration";

export function ProductsSplit() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="text-center">
        <span className="pill">Productos</span>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink-800 sm:text-4xl">
          Dos formas de impulsar el crecimiento
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-lg text-ink-500">
          Sin importar si necesitas capital para tu negocio o si quieres ofrecer
          un beneficio financiero a tu equipo, tenemos un producto pensado para
          ti.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Crédito Pyme — amber gradient, decorative depth, contrasting CTA */}
        <Link
          href="/credito-pyme"
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 p-8 shadow-[0_4px_24px_rgba(232,154,29,0.25)] ring-1 ring-brand-600/30 transition hover:shadow-[0_16px_48px_rgba(232,154,29,0.45)]"
        >
          {/* Decorative circles */}
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/15" />
          <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-6 h-56 w-56 rounded-full bg-ink-900/10" />

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-ink-900/15 text-ink-900">
                <Briefcase className="h-6 w-6" />
              </span>
              <span className="rounded-full bg-ink-900/15 px-3 py-1 text-xs font-semibold tracking-wide text-ink-900">
                Producto principal
              </span>
            </div>

            <p className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-800">
              Para tu empresa
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold text-ink-900">
              Crédito Pyme
            </h3>
            <p className="mt-3 text-ink-800">
              Crédito empresarial respaldado por garantía inmobiliaria para
              capital de trabajo, expansión, equipo o remodelación.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-ink-900">
              {[
                `Desde ${formatMXN(PRODUCT_PYME.minAmount)} hasta ${formatMXN(PRODUCT_PYME.maxAmount)} MXN`,
                `Plazos de ${PRODUCT_PYME.minMonths} a ${PRODUCT_PYME.maxMonths} meses`,
                "Sin comisión por pago anticipado",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-900/50" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Dark CTA strip */}
            <div className="mt-8 flex items-center justify-between rounded-2xl bg-ink-900 px-5 py-4 transition group-hover:bg-ink-800">
              <span className="text-sm font-semibold text-white">Conocer Crédito Pyme</span>
              <ArrowRight className="h-4 w-4 text-brand-400 transition group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {!FEATURES.nominaVisible && <PymeIllustration />}

        {/* Crédito Nómina — light card with amber accents */}
        {FEATURES.nominaVisible && (
          <Link
            href="/credito-nomina"
            className="group relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-ink-100 transition hover:shadow-lg hover:ring-brand-200"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <Users className="h-6 w-6" />
            </span>
            <p className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-brand-600">
              Para tus colaboradores
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-ink-800">
              Crédito Nómina
            </h3>
            <p className="mt-3 text-ink-500">
              Crédito personal para empleados de empresas con convenio Wecome.
              Descuento directo vía nómina y solicitud 100% en línea.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink-500">
              <li>• Empleados activos con convenio vigente</li>
              <li>• Aprobación ágil y digital</li>
              <li>• Empresas: súmate al programa</li>
            </ul>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition group-hover:text-brand-500">
              Conocer Crédito Nómina
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
