import type { Metadata } from "next";
import { TerminosYCondicionesContent } from "@/content/legales/terminos-y-condiciones";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y Condiciones Generales de Crédito y Servicios Financieros de WECOME.",
};

export default function TerminosYCondicionesPage() {
  return <TerminosYCondicionesContent />;
}
