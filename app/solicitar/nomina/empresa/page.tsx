import type { Metadata } from "next";
import { ExternalRedirect } from "@/components/handoff/external-redirect";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/handoffs";

export const metadata: Metadata = {
  title: "Crédito de Nómina — Empresa",
  description:
    "¿Quieres ofrecer crédito de nómina en tu empresa? Te conectamos con un agente Wecome por WhatsApp.",
  robots: { index: false, follow: false },
};

export default function SolicitarNominaEmpresaPage() {
  return (
    <ExternalRedirect
      url={whatsappUrl(WHATSAPP_MESSAGES.nominaEmpresa)}
      title="Hablemos por WhatsApp"
      description="Un agente Wecome te guiará en el alta de convenio, registro de empresa y carga de empleados (lista blanca) para que ofrezcas crédito de nómina a tu equipo."
      fallbackHref="/contacto"
      fallbackLabel="Ir a contacto"
    />
  );
}
