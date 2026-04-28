import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con un asesor Wecome. Estamos en Atizapán de Zaragoza, atendemos de lunes a viernes de 9:00 a 18:00.",
};

const contactItems = [
  {
    icon: MapPin,
    label: "Dirección",
    value: COMPANY.address,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phoneE164}`,
  },
  {
    icon: Mail,
    label: "Correo",
    value: COMPANY.emails.contact,
    href: `mailto:${COMPANY.emails.contact}`,
  },
  {
    icon: Clock,
    label: "Horario",
    value: COMPANY.hours,
  },
];

export default function ContactoPage() {
  return (
    <Section tone="muted">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="pill">Contacto</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Conversemos sobre tu siguiente paso.
          </h1>
          <p className="mt-5 text-pretty text-lg text-ink-600">
            Comparte tus datos y un asesor Wecome se pondrá en contacto. Para
            consultas urgentes puedes llamarnos directamente.
          </p>

          <ul className="mt-10 space-y-5">
            {contactItems.map((it) => {
              const Icon = it.icon;
              return (
                <li key={it.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-ink-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      {it.label}
                    </p>
                    {it.href ? (
                      <a
                        href={it.href}
                        className="mt-1 block text-ink-800 hover:text-brand-700"
                      >
                        {it.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-ink-800">{it.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
