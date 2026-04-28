import { ShieldCheck, Lock, Building2, ScrollText } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { REGULATORY } from "@/lib/constants";

const items = [
  {
    icon: Building2,
    title: "Buró de Entidades Financieras",
    description: "Consulta nuestro desempeño y comparativos con otras entidades.",
    href: REGULATORY.buroUrl,
  },
  {
    icon: ScrollText,
    title: "Registro CONDUSEF",
    description: "Inscritos en el SIPRES con número de identificación oficial.",
    href: REGULATORY.condusefRecordUrl,
  },
  {
    icon: ShieldCheck,
    title: "Supervisión CNBV",
    description:
      "Sujetos a la supervisión de la CNBV en prevención de lavado de dinero.",
    href: "/legales",
  },
  {
    icon: Lock,
    title: "Datos protegidos",
    description:
      "Tratamos tu información conforme a la LFPDPPP, con cifrado y controles avanzados.",
    href: "/aviso-de-privacidad",
  },
];

export function Regulation() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Regulación y seguridad"
        title="Transparencia que puedes verificar"
        description="Operamos como SOFOM E.N.R. dentro del marco regulatorio mexicano. Toda la información de la entidad está pública y disponible para tu consulta."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => {
          const Icon = it.icon;
          const external = it.href.startsWith("http");
          return (
            <a
              key={it.title}
              href={it.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group rounded-2xl bg-white p-6 ring-1 ring-ink-200/60 transition hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700 ring-1 ring-accent-100">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-ink-900 group-hover:text-brand-700">
                {it.title}
              </h3>
              <p className="mt-1 text-sm text-ink-600">{it.description}</p>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
