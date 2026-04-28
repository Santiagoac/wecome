"use client";

import * as React from "react";
import Link from "next/link";
import { ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  url: string;
  title: string;
  description?: string;
  fallbackHref?: string;
  fallbackLabel?: string;
  /** Si es true, redirige automáticamente tras un delay corto. */
  autoRedirect?: boolean;
  delayMs?: number;
};

/**
 * Pantalla intermedia para handoffs a sistemas externos (Moffin / Dynamicore).
 * Si la URL no está configurada, muestra mensaje informativo en vez de fallar.
 */
export function ExternalRedirect({
  url,
  title,
  description,
  fallbackHref = "/contacto",
  fallbackLabel = "Contactar a un asesor",
  autoRedirect = true,
  delayMs = 1200,
}: Props) {
  const hasUrl = Boolean(url);

  React.useEffect(() => {
    if (!autoRedirect || !hasUrl) return;
    const t = setTimeout(() => {
      window.location.replace(url);
    }, delayMs);
    return () => clearTimeout(t);
  }, [autoRedirect, hasUrl, url, delayMs]);

  return (
    <div className="container-narrow py-20 sm:py-28">
      <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-ink-200/60 sm:p-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          {hasUrl ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <ExternalLink className="h-5 w-5" />
          )}
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink-900">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-3 max-w-xl text-pretty text-ink-600">
            {description}
          </p>
        )}

        {hasUrl ? (
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a href={url}>
                Continuar ahora
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <p className="text-xs text-ink-500">
              Si no eres redirigido automáticamente, usa el botón anterior.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800 ring-1 ring-amber-200">
              Estamos preparando esta integración. Mientras tanto, un asesor
              puede atender tu solicitud de inmediato.
            </p>
            <Button asChild size="lg">
              <Link href={fallbackHref}>{fallbackLabel}</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
