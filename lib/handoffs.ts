import { COMPANY } from "./constants";

const moffinPyme = process.env.NEXT_PUBLIC_MOFFIN_PYME_URL ?? "";
const dynamicorePanel = process.env.NEXT_PUBLIC_DYNAMICORE_PANEL_URL ?? "";
const dynamicoreNomina = process.env.NEXT_PUBLIC_DYNAMICORE_NOMINA_URL ?? "";
const whatsappTel = process.env.NEXT_PUBLIC_WECOME_WHATSAPP ?? COMPANY.whatsappE164;

export type PymeHandoffParams = {
  monto?: number;
  plazo?: number;
};

export function moffinPymeUrl(params: PymeHandoffParams = {}): string {
  if (!moffinPyme) return "";
  const url = new URL(moffinPyme);
  if (params.monto) url.searchParams.set("monto", String(params.monto));
  if (params.plazo) url.searchParams.set("plazo", String(params.plazo));
  url.searchParams.set("source", "wecome.mx");
  return url.toString();
}

export function dynamicorePanelUrl(): string {
  return dynamicorePanel;
}

export function dynamicoreNominaUrl(): string {
  return dynamicoreNomina;
}

export function whatsappUrl(message: string): string {
  const tel = whatsappTel.replace(/\D/g, "");
  return `https://wa.me/${tel}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  nominaEmpresa:
    "Hola, soy de una empresa interesada en ofrecer crédito de nómina Wecome a mis colaboradores. ¿Me ayudan con el proceso de convenio?",
  general: "Hola, me gustaría recibir información sobre los productos de Wecome.",
} as const;
