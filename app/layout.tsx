import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wecome.mx"),
  title: {
    default: "Wecome | Crédito empresarial con garantía inmobiliaria",
    template: "%s | Wecome",
  },
  description:
    "Crédito Pyme con garantía inmobiliaria desde $1M hasta $3M MXN y crédito de nómina para empleados de empresas con convenio. Proceso transparente, atención humana.",
  openGraph: {
    title: "Wecome | Crédito empresarial con garantía inmobiliaria",
    description:
      "Crédito Pyme y crédito de nómina con la transparencia y respaldo regulatorio que tu negocio necesita.",
    url: "https://wecome.mx",
    siteName: COMPANY.shortName,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wecome | Crédito empresarial con garantía inmobiliaria",
    description:
      "Crédito Pyme y crédito de nómina con respaldo regulatorio y atención personalizada.",
  },
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
