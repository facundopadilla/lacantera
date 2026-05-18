# Logos de La Cantera

## Archivos disponibles

| Archivo | Dimensiones | Uso |
|---|---|---|
| `logo-original.png` | 191×82 px | Sobre fondos claros |
| `logo-blanco.png` | 900×502 px | Sobre fondos oscuros |

## Estado

- Fuente original: `http://lacanteraws.com` (HTTP — SSL del sitio actual vencido)
- **Solo existen en formato PNG** — NO hay SVG disponible
- La versión `logo-original.png` es la versión 3x (`logo-original3x`), razón de baja resolución relativa al nombre

## TODO

- [ ] **Solicitar al cliente el archivo fuente** (AI, EPS, SVG o el proyecto original del diseñador)
- [ ] Si no existe fuente vectorial: **presupuestar vectorización** (±1 día de diseñador)
- [ ] Una vez disponible el SVG: reemplazar en `apps/web/public/logo/` y actualizar `components/brand/logo.tsx`

## Notas de uso en producción

En `apps/web/src/components/brand/logo.tsx` se usa `next/image` con el PNG. Para pantallas retina y displays hi-DPI,
la falta de SVG es visible. Priorizar la vectorización antes del lanzamiento en producción.
