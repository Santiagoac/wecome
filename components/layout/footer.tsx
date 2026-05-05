import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { COMPANY, FEATURES, RATES, REGULATORY } from "@/lib/constants";

const links = {
  productos: [
    { label: "Crédito Pyme", href: "/credito-pyme" },
    ...(FEATURES.nominaVisible
      ? [{ label: "Crédito Nómina", href: "/credito-nomina" }]
      : []),
    { label: "Simulador", href: "/simulador" },
    { label: "Requisitos", href: "/requisitos" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Aviso de Privacidad", href: "/aviso-de-privacidad" },
    { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
    { label: "Unidad Especializada (UNE)", href: "/une" },
    { label: "Información regulatoria", href: "/legales" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
              Crédito empresarial con garantía inmobiliaria para PyMEs y crédito de
              nómina para empleados de empresas con convenio.
            </p>
            <div className="mt-6 space-y-3 text-sm text-ink-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                <a
                  href={`tel:${COMPANY.phoneE164}`}
                  className="hover:text-white"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                <a
                  href={`mailto:${COMPANY.emails.contact}`}
                  className="hover:text-white"
                >
                  {COMPANY.emails.contact}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                <span>{COMPANY.hours}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              {COMPANY.social.linkedin && (
                <a
                  href={COMPANY.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <FooterColumn title="Productos" items={links.productos} />
          <FooterColumn title="Empresa" items={links.empresa} />
          <FooterColumn title="Legal" items={links.legal} />
        </div>

        <hr className="my-12 border-white/10" />

        <div className="space-y-3 text-[11px] leading-snug text-ink-400">
          <p>
            Al proporcionar tus datos personales, reconoces haber leído y aceptado
            los términos establecidos en nuestro{" "}
            <Link href="/aviso-de-privacidad" className="text-white underline">
              Aviso de Privacidad
            </Link>
            , donde explicamos cómo recopilamos, usamos, protegemos y compartimos
            tu información conforme a la Ley Federal de Protección de Datos
            Personales en Posesión de los Particulares.
          </p>
          <p>
            Constituida y operada como Sociedad Financiera de Objeto Múltiple,
            Entidad No Regulada, no requiere autorización de la Secretaría de
            Hacienda y Crédito Público, estando sujeta únicamente a la supervisión
            de la CNBV en materia de prevención de lavado de dinero y
            financiamiento al terrorismo.{" "}
            <span className="text-[13px] font-medium text-ink-200">
              CAT promedio anual fijo de {RATES.pyme.productCatAvgInline}% sin IVA
            </span>
            , informativo, incorpora la totalidad de los gastos inherentes a los
            créditos. Fecha de cálculo {RATES.asOf}.{" "}
            <span className="text-[13px] font-medium text-ink-200">
              Tasa de interés Nominal promedio anual fija sin IVA de {RATES.pyme.nominalAnnualAvg}%
            </span>
            , dependiendo del nivel de calificación de riesgo de cada cliente.
          </p>
          <p>
            Se informa que {COMPANY.legalName} es una Sociedad Financiera de
            Objeto Múltiple, Entidad No Regulada, que realiza operaciones conforme
            a la Ley General de Organizaciones y Actividades Auxiliares del
            Crédito que para su constitución y operación con carácter de sociedad
            financiera de objeto múltiple, entidad no regulada, no requiere
            autorización de la Secretaría de Hacienda y Crédito Público y
            únicamente está sujeta a la supervisión de la Comisión Nacional
            Bancaria y de Valores (CNBV) para prevenir y detectar los actos,
            omisiones u operaciones que pudieran favorecer, prestar ayuda, auxilio
            o cooperación de cualquier especie para la comisión del delito
            previsto en el artículo 139 Quáter del Código Penal Federal o que
            pudiesen ubicarse en los supuestos del artículo 400 Bis del mismo
            Código.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={REGULATORY.buroUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-xl bg-white/10 px-4 py-2.5 transition hover:bg-white/20"
              aria-label="Buró de Entidades Financieras"
            >
              <Image
                src="/logos/buro.png"
                alt="Buró de Entidades Financieras"
                width={80}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </a>
            <a
              href={REGULATORY.condusefRecordUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-xl bg-white/10 px-4 py-2.5 transition hover:bg-white/20"
              aria-label="CONDUSEF"
            >
              <Image
                src="/logos/condusef.svg"
                alt="CONDUSEF"
                width={100}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </a>
            <a
              href={REGULATORY.circuloCreditoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-xl bg-white/10 px-4 py-2.5 transition hover:bg-white/20"
              aria-label="Círculo de Crédito"
            >
              <Image
                src="/logos/circulo.svg"
                alt="Círculo de Crédito"
                width={100}
                height={40}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>© 2025 - {new Date().getFullYear()} {COMPANY.legalName}. Todos los derechos reservados.</p>
          <p>
            Hecho con cuidado en México.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-ink-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
