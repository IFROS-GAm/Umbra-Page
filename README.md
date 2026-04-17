# Umbra-Page

Landing page oficial de Umbra, construida con React, Vite, Tailwind CSS y GSAP.

## Stack

- React 18
- Vite 6
- Tailwind CSS
- GSAP

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

## Deploy en Render

El proyecto ya incluye configuracion lista para Render:

- `render.yaml` con `buildCommand`, `staticPublishPath` y rewrite SPA
- `public/_redirects` para asegurar que las rutas internas carguen `index.html`
- `package.json` con `engines.node` fijado a `20.x`

Configuracion esperada en Render:

- Tipo: `Static Site`
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`

## Rutas principales

- `/`
- `/funciones`
- `/interfaz`
- `/descargas`
- `/terminos-de-uso`
- `/privacy-policy`

## Notas

- El cambio de idioma se aplica en toda la web.
- La navegacion funciona como SPA y requiere rewrite a `index.html` en produccion.
