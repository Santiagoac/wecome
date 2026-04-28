import type { Metadata } from "next";
import { ExternalRedirect } from "@/components/handoff/external-redirect";
import { dynamicorePanelUrl } from "@/lib/handoffs";

export const metadata: Metadata = {
  title: "Mi panel",
  description:
    "Accede a tu panel de cliente Wecome para consultar tu crédito, pagos y documentación.",
  robots: { index: false, follow: false },
};

export default function MiPanelPage() {
  return (
    <ExternalRedirect
      url={dynamicorePanelUrl()}
      title="Te llevamos a tu panel"
      description="Inicia sesión para consultar el estado de tu crédito, tu tabla de amortización y subir documentación."
      fallbackHref="/contacto"
      fallbackLabel="Necesito ayuda para acceder"
    />
  );
}
