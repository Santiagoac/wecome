"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import type { FAQ } from "@/content/faqs-pyme";
import { Search } from "lucide-react";

type Props = {
  faqs: FAQ[];
};

export function FaqList({ faqs }: Props) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query, faqs]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <Input
          type="search"
          placeholder="Buscar pregunta…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      {filtered.length === 0 ? (
        <p className="mt-8 rounded-xl bg-ink-50 p-6 text-center text-sm text-ink-600">
          No encontramos preguntas que coincidan con tu búsqueda. Si tienes una
          duda específica,{" "}
          <a href="/contacto" className="font-medium text-brand-700 underline">
            escríbenos
          </a>
          .
        </p>
      ) : (
        <Accordion type="single" collapsible className="mt-6">
          {filtered.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
