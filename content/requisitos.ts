export type RequirementGroup = {
  title: string;
  intro: string;
  documents: string[];
  notes: string[];
};

export const REQUIREMENTS: RequirementGroup[] = [
  {
    title: "Persona física con actividad empresarial",
    intro:
      "Documentación básica para evaluar tu perfil y la garantía del crédito Pyme.",
    documents: [
      "Identificación oficial vigente",
      "Comprobante de domicilio",
      "Constancia de Situación Fiscal ante el SAT",
      "Solicitud-Contrato de Crédito debidamente requisitada y firmada",
      "Autorización para consulta en Sociedades de Información Crediticia",
      "Últimos 3 estados de cuenta bancarios",
      "Garantía inmobiliaria libre de gravamen",
      "Aval (si aplica)",
    ],
    notes: [
      "No es obligatorio contar con historial crediticio perfecto.",
      "Se evalúa el flujo de efectivo real del solicitante.",
      "El otorgamiento del crédito está sujeto a un estudio de riesgo.",
    ],
  },
  {
    title: "Persona moral (empresa)",
    intro: "Documentación para empresas legalmente constituidas en México.",
    documents: [
      "Acta constitutiva",
      "Constancia de Situación Fiscal ante el SAT",
      "Solicitud-Contrato de Crédito debidamente requisitada y firmada",
      "Autorización para consulta en Sociedades de Información Crediticia",
      "Últimas 3 declaraciones de impuestos",
      "Comprobante de domicilio fiscal y operativo (no mayor a 3 meses)",
      "Últimos 3 estados de cuenta bancarios completos (digitalizados)",
      "Garantía inmobiliaria libre de gravamen",
      "Aval (si aplica)",
    ],
    notes: [
      "La empresa debe contar con al menos 6 meses de operación.",
      "Se realiza un análisis financiero de flujo de efectivo.",
      "La aprobación está sujeta a condiciones particulares de cada caso.",
    ],
  },
];

export const REQUIREMENTS_GENERAL = [
  "El crédito se respalda con una garantía inmobiliaria.",
  "La garantía se inscribe en un fideicomiso de garantía protocolizado ante notario público.",
  "El cliente conserva la propiedad del inmueble mientras cumpla con sus pagos.",
  "Toda la información se trata conforme al Aviso de Privacidad.",
];
