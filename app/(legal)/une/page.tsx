import type { Metadata } from "next";
import { UneContent } from "@/content/legales/une";

export const metadata: Metadata = {
  title: "Unidad Especializada de Atención (UNE)",
  description:
    "Datos de contacto de la Unidad Especializada de Atención de WECOME y de la CONDUSEF.",
};

export default function UnePage() {
  return <UneContent />;
}
