import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { COMPANY } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.122 1.532 5.852L.057 23.882a.5.5 0 0 0 .606.637l6.288-1.649A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.908a9.9 9.9 0 0 1-5.03-1.371l-.36-.214-3.733.979.995-3.636-.235-.374A9.86 9.86 0 0 1 2.093 12C2.093 6.58 6.58 2.093 12 2.093c5.42 0 9.907 4.487 9.907 9.907 0 5.42-4.487 9.908-9.907 9.908z"/>
    </svg>
  );
}

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
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: COMPANY.whatsappPhone,
    href: `https://wa.me/${COMPANY.whatsappE164}`,
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
