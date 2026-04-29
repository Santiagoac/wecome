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
