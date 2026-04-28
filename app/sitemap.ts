import type { MetadataRoute } from "next";

const BASE = "https://wecome.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/nosotros",
    "/productos",
    "/credito-pyme",
    "/credito-nomina",
    "/simulador",
    "/requisitos",
    "/preguntas-frecuentes",
    "/contacto",
    "/aviso-de-privacidad",
    "/terminos-y-condiciones",
    "/une",
    "/legales",
    "/solicitar",
  ];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
