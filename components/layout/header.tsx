"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { COMPANY, FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV = [
  ...(FEATURES.nominaVisible
    ? [{ label: "Crédito Nómina", href: "/credito-nomina" }]
    : []),
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-white/80 backdrop-blur transition-all",
        scrolled && "border-ink-200/70 shadow-sm"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${COMPANY.phoneE164}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          <a
            href={`https://wa.me/${COMPANY.whatsappE164}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 transition-colors hover:text-green-600"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.122 1.532 5.852L.057 23.882a.5.5 0 0 0 .606.637l6.288-1.649A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.908a9.9 9.9 0 0 1-5.03-1.371l-.36-.214-3.733.979.995-3.636-.235-.374A9.86 9.86 0 0 1 2.093 12C2.093 6.58 6.58 2.093 12 2.093c5.42 0 9.907 4.487 9.907 9.907 0 5.42-4.487 9.908-9.907 9.908z"/></svg>
            {COMPANY.whatsappPhone}
          </a>
          <Button asChild variant="secondary" size="sm">
            <Link href="/mi-panel">Acceder</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/solicitar">Solicitar crédito</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-page border-t border-ink-200 py-4">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-medium text-ink-800 hover:bg-ink-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild variant="secondary" size="md" className="w-full">
                <Link href="/mi-panel" onClick={() => setOpen(false)}>
                  Acceder a mi panel
                </Link>
              </Button>
              <Button asChild size="md" className="w-full">
                <Link href="/solicitar" onClick={() => setOpen(false)}>
                  Solicitar crédito
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
