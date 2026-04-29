import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ExternalRedirect } from "@/components/handoff/external-redirect";
import { dynamicoreNominaUrl } from "@/lib/handoffs";
import { FEATURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Crédito de Nómina — Empleado",
  description:
    "Inicia sesión en el portal de empleados para solicitar tu crédito de nómina.",
  robots: { index: false, follow: false },
};

export default function SolicitarNominaEmpleadoPage() {
  if (!FEATURES.nominaVisible) redirect("/");

  return (
    <ExternalRedirect
      url={dynamicoreNominaUrl()}
      title="Te llevamos a tu portal de empleado"
      description="Ingresa con tus credenciales para iniciar tu solicitud de crédito de nómina. El descuento se realiza directamente vía nómina, sin trámites adicionales."
    />
  );
}
