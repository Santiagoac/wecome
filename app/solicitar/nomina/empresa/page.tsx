import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ExternalRedirect } from "@/components/handoff/external-redirect";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/handoffs";
import { FEATURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Crédito de Nómina — Empresa",
  description:
    "¿Quieres ofrecer crédito de nómina en tu empresa? Te conectamos con un agente Wecome por WhatsApp.",
  robots: { index: false, follow: false },
};

export default function SolicitarNominaEmpresaPage() {
  if (!FEATURES.nominaVisible) redirect("/");

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
