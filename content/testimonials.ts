export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Huerta",
    role: "Dueño de Ferreterías",
    quote:
      "Encontré una salida. Decidí confiar en mi propio esfuerzo y puse mis locales en garantía para obtener el financiamiento que necesitaba. No fue una decisión fácil, pero fue la correcta. Hoy, mis ferreterías siguen abiertas, mi personal conserva su empleo y seguimos atendiendo a nuestros clientes de siempre. Mi negocio no solo se salvó, se fortaleció.",
  },
  {
    name: "Helena Gutiérrez",
    role: "Dueña de Pastelería",
    quote:
      "Gracias a Wecome, pude obtener un préstamo de $3,000,000 de pesos dejando mi casa como garantía. Aunque al principio da nervios tomar una decisión así, el proceso fue transparente y profesional, lo que me dio la seguridad que necesitaba.",
  },
  {
    name: "Armando Herrera",
    role: "Agencia de Autos Seminuevos",
    quote:
      "Gracias a Wecome, utilicé mi propiedad como garantía y obtuve el financiamiento necesario para transformar mi lote en una sala de exhibición de primer nivel. Hoy no solo tengo más espacio, tengo mejores autos y una imagen que le da total confianza a mis compradores. Cuando crees en tu negocio, el siguiente nivel está a solo una decisión de distancia.",
  },
];
