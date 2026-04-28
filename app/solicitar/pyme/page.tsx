import type { Metadata } from "next";
import { ExternalRedirect } from "@/components/handoff/external-redirect";
import { moffinPymeUrl } from "@/lib/handoffs";

export const metadata: Metadata = {
  title: "Solicitar Crédito Pyme",
  description:
    "Iniciamos tu precalificación para Crédito Pyme. Te conectamos con la plataforma segura de Moffin para continuar el proceso.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ monto?: string; plazo?: string }>;
};

export default async function SolicitarPymePage({ searchParams }: Props) {
  const sp = await searchParams;
  const monto = sp.monto ? Number(sp.monto) : undefined;
  const plazo = sp.plazo ? Number(sp.plazo) : undefined;

  const url = moffinPymeUrl({
    monto: Number.isFinite(monto) ? monto : undefined,
    plazo: Number.isFinite(plazo) ? plazo : undefined,
  });

  return (
    <ExternalRedirect
      url={url}
      title="Te llevamos a la precalificación"
      description="Estamos abriendo la plataforma segura donde completarás tu solicitud, cargarás documentación y validarás tu identidad. El proceso es rápido y guiado."
    />
  );
}
