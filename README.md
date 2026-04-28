# Wecome — Web + LOS handoff

Sitio institucional de [Wecome](https://wecome.mx) (SOFOM E.N.R.) con landing
pública y handoffs hacia Moffin (KYC/originación) y Dynamicore (LMS).

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Radix UI (Slider, Accordion, etc.)
- React Hook Form + Zod
- Resend (formulario de contacto)

## Empezar

```bash
npm install
cp .env.local.example .env.local
# Editar .env.local con las URLs reales de Moffin/Dynamicore y RESEND_API_KEY
npm run dev
```

Abrir <http://localhost:3000>.

## Estructura

```
app/                      # Rutas Next.js
  page.tsx                # Home
  (legal)/                # Aviso, T&C, UNE, Legales (texto regulatorio literal)
  solicitar/              # Hub + handoffs (Pyme → Moffin, Nómina → Dynamicore/WhatsApp)
  mi-panel/               # Cliente existente → Dynamicore
  api/contacto/           # POST formulario → Resend
components/               # UI, layout, simulador, formularios, handoffs
content/                  # Texto del sitio (FAQs, testimonios, requisitos, legales)
lib/                      # constants, simulator, handoffs, utils, contact-schema
```

## Flujos clave

| Producto | Origen | Destino |
|---|---|---|
| Crédito Pyme — solicitud | `/solicitar/pyme` | Moffin (precalificación) |
| Crédito Pyme — cliente actual | `/mi-panel` | Dynamicore (panel cliente) |
| Crédito Nómina — empleado | `/solicitar/nomina/empleado` | Dynamicore (login empleado) |
| Crédito Nómina — empresa | `/solicitar/nomina/empresa` | WhatsApp (agente Wecome) |

URLs configurables vía variables `NEXT_PUBLIC_*` en `.env.local`.

## Contenido regulatorio

Los archivos en `content/legales/` son texto regulatorio (LFPDPPP, CONDUSEF,
CNBV). **No editar sin revisión legal.** Cualquier cambio en tasas o CAT debe
actualizarse también en `lib/constants.ts → RATES` y revisarse en cada
disclaimer.

## Verificación

```bash
npm run build        # producción
npm run lint
npm run typecheck
```

## Pendientes

- URLs reales de Moffin Fast Track y Dynamicore
- PDFs originales de aviso de privacidad y T&C en `public/docs/`
- Brand kit oficial (logo SVG, paleta exacta)
- Copy oficial de Crédito Nómina (tasas, CAT, FAQs)
