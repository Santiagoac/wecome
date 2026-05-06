import { z } from "zod";

export const uneSchema = z.object({
  empresa: z.string().max(120).optional(),
  nombre: z
    .string()
    .min(2, "Por favor escribe tu nombre completo.")
    .max(120),
  telefono: z
    .string()
    .min(10, "El teléfono debe tener al menos 10 dígitos.")
    .max(20)
    .regex(/^[\d+()\s.-]+$/, "El teléfono solo puede contener dígitos."),
  horario: z.enum(["mañana", "tarde", "indiferente"], {
    errorMap: () => ({ message: "Selecciona un horario de contacto." }),
  }),
  email: z.string().email("Ingresa un correo electrónico válido."),
  tipo: z.enum(["aclaracion", "reclamacion", "queja", "consulta"], {
    errorMap: () => ({ message: "Selecciona el tipo de solicitud." }),
  }),
  descripcion: z
    .string()
    .min(20, "Por favor describe tu caso con más detalle (mínimo 20 caracteres).")
    .max(3000),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Debes aceptar el Aviso de Privacidad para continuar.",
    }),
  }),
  website: z.string().max(0).optional(),
});

export type UneInput = z.infer<typeof uneSchema>;
