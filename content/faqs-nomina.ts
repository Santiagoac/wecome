import type { FAQ } from "./faqs-pyme";

/**
 * FAQs preliminares de Crédito Nómina.
 * Pendiente: revisar copy con el equipo de Wecome y agregar tasas/CAT oficiales.
 */
export const FAQS_NOMINA: FAQ[] = [
  {
    category: "producto",
    q: "¿Qué es el Crédito Nómina de Wecome?",
    a: "Es un crédito personal dirigido a empleados de empresas que mantienen un convenio activo con Wecome. El descuento se realiza vía nómina para que el cliente no tenga que preocuparse por la mensualidad.",
  },
  {
    category: "producto",
    q: "¿Quién puede solicitarlo?",
    a: "Empleados activos de empresas con convenio Wecome. Si tu empresa aún no tiene convenio, puedes invitarla a unirse desde la página del producto.",
  },
  {
    category: "proceso",
    q: "¿Cómo solicito mi crédito de nómina?",
    a: "Ingresa con tus datos al portal del empleado, completa la solicitud en línea y firma digitalmente. La aprobación es ágil porque el descuento se realiza vía nómina.",
  },
  {
    category: "proceso",
    q: "¿Cuánto tarda en depositarse?",
    a: "Una vez aprobado, el desembolso se realiza directamente a tu cuenta bancaria. El tiempo exacto depende del banco receptor.",
  },
  {
    category: "regulacion",
    q: "Soy empresa, ¿cómo doy de alta el convenio?",
    a: "Contáctanos por WhatsApp con un agente Wecome. Te guiamos en el alta de la empresa, firma del convenio y registro de empleados (lista blanca).",
  },
];
