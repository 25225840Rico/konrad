# Konrad — Sitio web de agencia de desarrollo web

Prototipo funcional de una landing page de una página (one-page, scroll) para la agencia
**Konrad**, que vende dos líneas de servicio: **creación de sitios nuevos** y **mejora de
sitios existentes**, atendiendo 9 segmentos de mercado (corporativo, e-commerce, blog, SaaS,
portafolio, noticias, directorio, comunidad e institucional).

Construido con **SvelteKit + Svelte 5 (runes)**, **TypeScript** y **Tailwind CSS v3**.
Sin base de datos, sin dependencias JS externas: solo Svelte + Tailwind. Exporta a HTML
estático para deploy en hosting compartido (Ferozo, vía FTP).

---

## Stack

- **SvelteKit** (Svelte 5, sintaxis runes: `$state`, `$props`, `$derived`, `$effect`)
- **TypeScript**
- **Tailwind CSS v3** (paleta custom configurada en `tailwind.config.js`)
- **@sveltejs/adapter-static** (genera HTML/CSS/JS puro)
- Fuente **Inter** desde Google Fonts (cargada en `src/app.html`)
- Íconos: SVG inline propios (`src/lib/Icon.svelte`), sin librerías

## Paleta

| Rol | Token Tailwind | Hex |
|-----|----------------|-----|
| Primario (navy) | `primary` | `#0F172A` |
| Acento (ámbar) | `accent` | `#F59E0B` |
| Superficie | `surface` | `#F8FAFC` |
| Texto principal | `ink` | `#1E293B` |
| Texto secundario | `muted` | `#64748B` |

Uso: `bg-primary`, `text-accent`, `bg-surface`, `text-ink`, `text-muted`, etc.

---

## Instalación y desarrollo

```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # genera el sitio estático en build/
npm run preview    # previsualiza el build de producción
npm run check      # verificación de tipos (svelte-check)
```

Requisitos: Node 18+ (probado con Node 24).

---

## Estructura

```
src/
├── app.html                  ← shell HTML, carga de fuente Inter y favicon
├── app.css                   ← Tailwind + utilidades (reveal, dot-pattern, no-scrollbar)
├── lib/
│   ├── data.ts               ← TODO el contenido (segmentos, precios, casos, FAQ, etc.)
│   ├── Icon.svelte           ← íconos SVG inline (<Icon name="cart" />)
│   ├── reveal.ts             ← acción fade-in con IntersectionObserver
│   └── components/
│       ├── Navbar.svelte     ← nav fija, transparente→sólida al scroll, menú mobile
│       ├── Hero.svelte       ← titular, CTAs, indicadores, pills de segmentos
│       ├── Segments.svelte   ← grid de 9 tarjetas de tipos de sitio
│       ├── Services.svelte   ← dos líneas: Web nueva / Mejora de sitio
│       ├── Process.svelte    ← 5 pasos del proceso de trabajo
│       ├── Portfolio.svelte  ← 6 casos de uso con placeholders e imágenes
│       ├── Diagnostic.svelte ← sección gancho con métricas count-up animadas
│       ├── Pricing.svelte    ← 3 planes (Básico / Profesional / Premium)
│       ├── Testimonials.svelte
│       ├── FAQ.svelte        ← acordeón animado (6 preguntas)
│       ├── Contact.svelte    ← formulario validado (simulado) + datos de contacto
│       └── Footer.svelte
└── routes/
    ├── +layout.ts            ← prerender = true (sitio 100% estático)
    ├── +layout.svelte        ← importa app.css
    └── +page.svelte          ← ensambla todos los componentes
```

### Interacciones implementadas (todo Svelte + Tailwind, sin librerías)

- Scroll suave entre secciones (anclas `#segmentos`, `#servicios`, etc.)
- Navbar transparente sobre el hero → sólida con sombra al hacer scroll
- Fade-in al entrar al viewport (`IntersectionObserver` via `use:reveal`)
- Count-up animado en las métricas de diagnóstico (`requestAnimationFrame`)
- Acordeón de FAQ con animación de altura (`transition:slide`)
- Formulario con validación en cliente, estado de carga y mensaje de éxito (sin backend)
- Pills del hero con scroll horizontal sin barra visible en mobile
- Hover en tarjetas (elevación, overlay, links revelados)

---

## Cómo adaptar el contenido

**Casi todo el texto vive en `src/lib/data.ts`** — edita ahí sin tocar el markup:

- `segments` — los 9 tipos de sitio (nombre, descripción, a quién sirve, precio orientativo).
- `processSteps` — los 5 pasos del proceso.
- `portfolio` — los 6 casos (empresa, segmento, resultado, tag, color del placeholder).
- `plans` — los 3 planes de precios.
- `testimonials` — los 3 testimonios.
- `faqs` — las 6 preguntas frecuentes.
- `contact` — WhatsApp, email, ciudad, horario.
- `projectTypes` — opciones del select del formulario.

Para cambiar **colores**: edita `tailwind.config.js` (`theme.extend.colors`).
Para cambiar **íconos**: agrega entradas en el mapa `paths` de `src/lib/Icon.svelte`.
Las imágenes de portafolio usan `placehold.co`; reemplázalas por imágenes reales en
`static/` y ajusta los `src` en `Portfolio.svelte` cuando las tengas.

---

## Build y deploy en Ferozo (FTP)

1. Genera el sitio estático:

   ```bash
   npm run build
   ```

   El resultado queda en la carpeta **`build/`** (HTML, CSS y JS listos para servir).

2. Sube **el contenido de `build/`** (no la carpeta en sí) por FTP a la carpeta pública de
   tu hosting Ferozo, típicamente `public_html/` (o un subdirectorio como
   `public_html/konrad/` si va en una ruta).

   - Incluye `index.html`, `404.html`, `favicon.svg` y la carpeta `_app/`.
   - Si lo subes a un **subdirectorio** en vez de la raíz del dominio, configura la base
     path en `svelte.config.js` con `kit.paths.base` (por ejemplo `base: '/konrad'`) y
     vuelve a hacer `npm run build`.

3. No requiere Node ni base de datos en el servidor: es 100% estático.

> El formulario de contacto **simula** el envío en el cliente (no hay backend). Para que
> envíe de verdad, conéctalo a un endpoint (por ejemplo un script PHP en Ferozo, Formspree,
> o un webhook) desde `Contact.svelte`.

---

## Licencia

Prototipo de demostración. Contenido y casos de uso son ficticios pero verosímiles.

© 2026 Konrad · Antofagasta, Chile
