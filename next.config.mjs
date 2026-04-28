/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/aviso-de-privacidad-l-wecome", destination: "/aviso-de-privacidad", permanent: true },
      { source: "/terminos-y-condiciones-l-wecome-cloned", destination: "/terminos-y-condiciones", permanent: true },
      { source: "/unidad-especializada-de-atencion-une-wecome", destination: "/une", permanent: true },
      { source: "/productos-wecome", destination: "/credito-pyme", permanent: true },
      { source: "/preguntas-frecuentes-l-wecome", destination: "/preguntas-frecuentes", permanent: true },
      { source: "/requisitos-l-wecome", destination: "/requisitos", permanent: true },
      { source: "/contacto-l-wecome", destination: "/contacto", permanent: true },
      { source: "/incio-de-sesion-l-wecome", destination: "/mi-panel", permanent: true },
    ];
  },
};

export default nextConfig;
