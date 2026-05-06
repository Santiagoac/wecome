/**
 * Constantes regulatorias y de producto.
 * Las tasas y fechas son obligatorias por CONDUSEF/CNBV: cualquier cambio
 * debe revisarse contra contratos y actualizarse en TODOS los disclaimers.
 */

export const COMPANY = {
  legalName: "WECOME, S.A.P.I. de C.V., SOFOM, E.N.R.",
  shortName: "WECOME",
  address:
    "Calle Porfirio Díaz #7, esquina con Adolfo López Mateos, Col. Jardines de Atizapán, C.P. 52978, Atizapán de Zaragoza, Estado de México",
  phone: "56 5765 7825",
  phoneE164: "+525657657825",
  whatsappPhone: "56 2677 7949",
  whatsappPhoneE164: "+525626777949",
  whatsappE164: "525626777949",
  emails: {
    contact: "contacto@wecome.mx",
    privacy: "datospersonales@wecome.mx",
  },
  hours: "Lunes a Viernes | 9:00 AM – 6:00 PM",
  website: "https://wecome.mx",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61578303715498",
    instagram: "https://www.instagram.com/wecome.creditos",
    linkedin: "",
  },
  une: {
    phone: "55 2721 4907",
    phoneE164: "+525527214907",
    email: "une@wecome.mx",
  },
} as const;

/**
 * Tasas vigentes según el sitio actual de wecome.mx.
 * Fecha de cálculo oficial: 12 de diciembre de 2025.
 */
export const RATES = {
  asOf: "12 de diciembre de 2025",
  pyme: {
    nominalAnnualAvg: 43.2,
    catAvg: 62.0,
    productCatAvgInline: 62.0,
    simulatorMonthlyRatePct: 3.6,
    openingFeePct: 9,
    annualCommissionPct: 6,
    annualCommissionStartMonth: 12,
  },
} as const;

export const PRODUCT_PYME = {
  name: "WECOME Business Credit",
  minAmount: 1_000_000,
  maxAmount: 3_000_000,
  minMonths: 12,
  maxMonths: 60,
  description:
    "Crédito simple o revolvente para PyMEs y personas físicas con actividad empresarial, respaldado por garantía inmobiliaria en fideicomiso.",
} as const;

export const FEATURES = {
  nominaVisible: false,
} as const;

export const REGULATORY = {
  authorityShort: "CNBV",
  buroUrl: "https://www.buro.gob.mx",
  buroSourceUrl:
    "https://www.buro.gob.mx/general_gob.php?id_sector=69&id_periodo=41",
  condusefUrl: "https://www.condusef.gob.mx",
  condusefRecordUrl:
    "https://webapps.condusef.gob.mx/SIPRES_N/jsp/home_publico.jsp?idins=16975",
  condusefPhone: "(55) 5340 0999",
  circuloCreditoUrl: "https://www.circulodecredito.com.mx/home",
} as const;
