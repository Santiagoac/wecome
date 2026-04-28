"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: "" },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? "No pudimos enviar tu mensaje.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Error desconocido.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-accent-50 p-8 text-center ring-1 ring-accent-200">
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent-600" />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
          Gracias por contactarnos
        </h3>
        <p className="mt-2 text-ink-700">
          Recibimos tu mensaje correctamente. Un asesor te responderá en horario
          hábil.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-2xl bg-white p-6 ring-1 ring-ink-200/60 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre completo" error={errors.name?.message}>
          <Input
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label="Correo electrónico" error={errors.email?.message}>
          <Input
            type="email"
            autoComplete="email"
            placeholder="tucorreo@dominio.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>
      <Field label="Teléfono" error={errors.phone?.message}>
        <Input
          type="tel"
          autoComplete="tel"
          placeholder="55 1234 5678"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
      </Field>
      <Field label="Mensaje" error={errors.message?.message}>
        <Textarea
          placeholder="Cuéntanos sobre tu negocio o tu solicitud."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      {/* Honeypot anti-spam */}
      <div className="hidden" aria-hidden>
        <Label htmlFor="website">No completes este campo</Label>
        <Input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-700">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-ink-300 text-brand-700 focus:ring-brand-400"
          {...register("consent")}
        />
        <span>
          He leído y acepto el{" "}
          <Link
            href="/aviso-de-privacidad"
            className="font-medium text-brand-700 underline"
          >
            Aviso de Privacidad
          </Link>{" "}
          de Wecome para el tratamiento de mis datos personales.
        </span>
      </label>
      {errors.consent && (
        <p className="-mt-2 text-xs text-red-600">{errors.consent.message}</p>
      )}

      {status === "error" && serverError && (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-800 ring-1 ring-red-200">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando…
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
