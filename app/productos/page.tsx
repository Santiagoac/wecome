import type { Metadata } from "next";
import { ProductsSplit } from "@/components/home/products-split";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Conoce los dos productos de Wecome: Crédito Pyme con garantía inmobiliaria y Crédito Nómina para empleados.",
};

export default function ProductosPage() {
  return (
    <>
      <Section tone="muted" className="!pb-0">
        <SectionHeader
          eyebrow="Productos"
          title="Soluciones financieras hechas a la medida"
          description="Dos productos diseñados para distintos momentos: el crecimiento de tu empresa y el bienestar financiero de tu equipo."
          align="center"
          className="mx-auto"
        />
      </Section>
      <ProductsSplit />
    </>
  );
}
