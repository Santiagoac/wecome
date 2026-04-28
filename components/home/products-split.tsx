import Link from "next/link";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import { PRODUCT_PYME } from "@/lib/constants";
import { formatMXN } from "@/lib/utils";

const products = [
  {
    href: "/credito-pyme",
    icon: Briefcase,
    color: "brand",
    eyebrow: "Para tu empresa",
    title: "Crédito Pyme",
    description:
      "Crédito empresarial respaldado por garantía inmobiliaria para capital de trabajo, expansión, equipo o remodelación.",
    bullets: [
      `Desde ${formatMXN(PRODUCT_PYME.minAmount)} hasta ${formatMXN(PRODUCT_PYME.maxAmount)} MXN`,
      `Plazos de ${PRODUCT_PYME.minMonths} a ${PRODUCT_PYME.maxMonths} meses`,
      "Sin comisión por pago anticipado",
    ],
    cta: "Conocer Crédito Pyme",
  },
  {
    href: "/credito-nomina",
    icon: Users,
    color: "accent",
    eyebrow: "Para tus colaboradores",
    title: "Crédito Nómina",
    description:
      "Crédito personal para empleados de empresas con convenio Wecome. Descuento directo vía nómina y solicitud 100% en línea.",
    bullets: [
      "Empleados activos con convenio vigente",
      "Aprobación ágil y digital",
      "Empresas: súmate al programa",
    ],
    cta: "Conocer Crédito Nómina",
  },
];

export function ProductsSplit() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="text-center">
        <span className="pill">Productos</span>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Dos formas de impulsar el crecimiento
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-lg text-ink-600">
          Sin importar si necesitas capital para tu negocio o si quieres ofrecer
          un beneficio financiero a tu equipo, tenemos un producto pensado para
          ti.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {products.map((p) => {
          const Icon = p.icon;
          const isBrand = p.color === "brand";
          return (
            <Link
              key={p.href}
              href={p.href}
              className={`group relative overflow-hidden rounded-3xl p-8 ring-1 transition hover:shadow-xl ${
                isBrand
                  ? "bg-gradient-to-br from-brand-700 to-brand-900 text-white ring-brand-800"
                  : "bg-white text-ink-900 ring-ink-200"
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  isBrand ? "bg-white/15" : "bg-accent-500"
                } text-white`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <p
                className={`mt-6 text-xs uppercase tracking-wider ${
                  isBrand ? "text-brand-200" : "text-accent-700"
                }`}
              >
                {p.eyebrow}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                {p.title}
              </h3>
              <p
                className={`mt-3 ${
                  isBrand ? "text-brand-100" : "text-ink-600"
                }`}
              >
                {p.description}
              </p>
              <ul
                className={`mt-6 space-y-2 text-sm ${
                  isBrand ? "text-brand-100" : "text-ink-700"
                }`}
              >
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <span
                className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${
                  isBrand ? "text-white" : "text-brand-700"
                }`}
              >
                {p.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
