import type { Metadata } from "next";
import { AvisoDePrivacidadContent } from "@/content/legales/aviso-de-privacidad";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de Privacidad Integral de WECOME, S.A.P.I. de C.V., SOFOM, E.N.R.",
};

export default function AvisoDePrivacidadPage() {
  return <AvisoDePrivacidadContent />;
}
