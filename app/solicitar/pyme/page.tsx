import type { Metadata } from "next";
import { Suspense } from "react";
import { PersonaPymeSelector } from "@/components/handoff/persona-pyme-selector";

export const metadata: Metadata = {
  title: "Solicitar Crédito Pyme",
  description:
    "Elige el tipo de persona (PFAE o Persona Moral) para iniciar tu precalificación de Crédito Pyme con Wecome.",
  robots: { index: false, follow: false },
};

export default function SolicitarPymePage() {
  return (
    <Suspense fallback={null}>
      <PersonaPymeSelector />
    </Suspense>
  );
}
