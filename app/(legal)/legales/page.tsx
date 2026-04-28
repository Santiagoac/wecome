import type { Metadata } from "next";
import { LegalesContent } from "@/content/legales/legales";

export const metadata: Metadata = {
  title: "Información regulatoria",
  description:
    "Información sobre la regulación, CAT, tasas y supervisión de WECOME, S.A.P.I. de C.V., SOFOM, E.N.R.",
};

export default function LegalesPage() {
  return <LegalesContent />;
}
