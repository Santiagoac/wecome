"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { uneSchema, type UneInput } from "@/lib/une-schema";

type Status = "idle" | "submitting" | "success" | "error";

const TIPO_LABELS: Record<string, string> = {
  aclaracion: "Aclaración",
  reclamacion: "Reclamación",
  queja: "Queja",
  consulta: "Consulta",
};

export function UneForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UneInput>({
    resolver: zodResolver(uneSchema),
    defaultValues: { website: "" },
  });

  async function onSubmit(values: UneInput) {
    setStatus("submitting");
    setServerError(null);
    try {
      const body = new URLSearchParams({
        "form-name": "une-reclamacion",
        empresa: values.empresa ?? "",
        nombre: values.nombre,
        telefono: values.telefono,
        horario: values.horario,
        email: values.email,
        tipo: TIPO_LABELS[values.tipo] ?? values.tipo,
        descripcion: values.descripcion,
        consent: values.consent ? "on" : "",
        website: values.website ?? "",
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("No pudimos enviar tu solicitud.");
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
          Solicitud recibida
        </h3>
        <p className="mt-2 text-ink-700">
          Hemos recibido tu solicitud. La UNE te dará respuesta en un plazo
          máximo de <strong>30 días hábiles</strong>.
        </p>
      </div>
    );
  }

  return (
    <form
      name="une-reclamacion"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-2xl bg-white p-6 ring-1 ring-ink-200/60 sm:p-8"
    >
      <input type="hidden" name="form-name" value="une-reclamacion" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Empresa (opcional)" error={errors.empresa?.message}>
          <Input
            type="text"
            placeholder="Nombre de tu empresa"
            {...register("empresa")}
          />
        </Field>
        <Field label="Nombre completo" error={errors.nombre?.message}>
          <Input
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            aria-invalid={!!errors.nombre}
            {...register("nombre")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Teléfono" error={errors.telefono?.message}>
          <Input
            type="tel"
            autoComplete="tel"
            placeholder="55 1234 5678"
            aria-invalid={!!errors.telefono}
            {...register("telefono")}
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

      <Field label="Horario de contacto preferido" error={errors.horario?.message}>
        <div className="flex flex-wrap gap-4 pt-1">
          {(["mañana", "tarde", "indiferente"] as const).map((opcion) => (
            <label key={opcion} className="flex items-center gap-2 cursor-pointer text-sm text-ink-800 capitalize">
              <input
                type="radio"
                value={opcion}
                className="h-4 w-4 border-ink-300 text-brand-700 focus:ring-brand-400"
                {...register("horario")}
              />
              {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Tipo de solicitud" error={errors.tipo?.message}>
        <select
          aria-invalid={!!errors.tipo}
          className="flex h-10 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-400 disabled:opacity-50"
          {...register("tipo")}
          defaultValue=""
        >
          <option value="" disabled>Selecciona una opción</option>
          <option value="aclaracion">Aclaración</option>
          <option value="reclamacion">Reclamación</option>
          <option value="queja">Queja</option>
          <option value="consulta">Consulta</option>
        </select>
      </Field>

      <Field label="Descripción de tu solicitud" error={errors.descripcion?.message}>
        <Textarea
          placeholder="Describe con detalle los hechos, fechas y tu petición."
          aria-invalid={!!errors.descripcion}
          {...register("descripcion")}
        />
      </Field>

      {/* Honeypot anti-spam */}
      <div className="hidden" aria-hidden>
        <Label htmlFor="une-website">No completes este campo</Label>
        <Input
          id="une-website"
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
          "Enviar solicitud a la UNE"
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
