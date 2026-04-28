import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Por favor escribe tu nombre completo.")
    .max(120, "El nombre es demasiado largo."),
  email: z.string().email("Ingresa un correo electrónico válido."),
  phone: z
    .string()
    .min(10, "El teléfono debe tener al menos 10 dígitos.")
    .max(20)
    .regex(/^[\d+()\s.-]+$/, "El teléfono solo puede contener dígitos."),
  message: z
    .string()
    .min(10, "Cuéntanos un poco más sobre tu caso.")
    .max(2000),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Debes aceptar el Aviso de Privacidad para continuar.",
    }),
  }),
  // Honeypot — debe quedar vacío
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
