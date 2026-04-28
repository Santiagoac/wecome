import { Hero } from "@/components/home/hero";
import { ProductsSplit } from "@/components/home/products-split";
import { Features } from "@/components/home/features";
import { Process } from "@/components/home/process";
import { Regulation } from "@/components/home/regulation";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSplit />
      <Features />
      <Process />
      <Regulation />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
