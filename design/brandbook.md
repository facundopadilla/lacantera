# La Cantera — Brandbook

> Documento maestro de identidad de marca.
> Versión: 1.0 · Estado: BORRADOR (validar paleta con logo físico antes de cerrar)

---

## 1. Esencia de marca

**La Cantera** toma su nombre de la metáfora minera: una cantera es el lugar donde la piedra en bruto se extrae, se talla y se transforma en algo con valor. Eso es lo que hace el coworking — toma a personas con potencial y les da el espacio, las herramientas y la comunidad para tallarse.

No somos un espacio de trabajo. Somos el lugar donde se forman los que hacen.

**En tres palabras**: Transformación · Comunidad · Potencia

---

## 2. Tagline system

| Rol | Texto |
|---|---|
| Tagline principal | **Un lugar lleno de posibilidades** |
| Tagline campaña | **#modocoworker** |
| Copy de impacto | **330M2 en potencia** |
| Llamada a acción | **¡Hay un plan para vos!** |
| Propósito corto | **Un espacio para trabajar, crear y conectar** |

---

## 3. Voz y tono

### Cómo hablamos
- **Cercanos pero profesionales**: no somos "empresa", somos un espacio de gente real.
- **Salteños, no genéricos**: usamos "vos", no "tú". Usamos el acento local, no el "tech bro" de CABA.
- **Directos**: menos adjetivos, más acciones. "Reservá tu espacio" > "Descubrí la experiencia única de La Cantera".
- **Con orgullo de ciudad**: Salta tiene identidad propia. No soñamos con ser WeWork.

### Do / Don't

| ✅ Hacemos esto | ❌ No hacemos esto |
|---|---|
| "Reservá tu espacio" | "Agenda tu experiencia" |
| "¡Hay un plan para vos!" | "Tenemos soluciones para cada necesidad" |
| "330M2 en potencia" | "Amplio espacio de trabajo colaborativo" |
| "#modocoworker" | "Activa tu productividad" |
| "Dos espacios, un solo espíritu" | "Dos locaciones estratégicamente ubicadas" |

---

## 4. Logo

### Variantes
- **Color** (`logo-original.png`): sobre fondos claros (#F4EFE6, blanco, neutros).
- **Blanco** (`logo-blanco.png`): sobre fondos oscuros (#2A2520, copper, acentos).

### Zona de protección
Mínimo el equivalente a la altura de la "C" del logotipo en todos los lados.

### Tamaños mínimos
- Digital: 120px de ancho mínimo
- Impresión: 3cm de ancho mínimo

### Qué NO hacer
- ❌ Estirar o deformar
- ❌ Rotar
- ❌ Recolorear con colores fuera de la paleta
- ❌ Sobre fondos que no tienen suficiente contraste
- ❌ Usar el PNG de 191px en pantallas retina sin el SVG vectorial

### TODO: Vectorización
El logo actualmente solo existe en PNG. Solicitar SVG al cliente o presupuestar vectorización.

---

## 5. Paleta de colores

> ⚠️ BORRADOR: Validar estos valores contra el logo real. Los colores del logo mandan.

### Primarios

| Token | HEX | Nombre conceptual | Uso |
|---|---|---|---|
| `--color-stone-deep` | #2A2520 | Basalto | Fondos oscuros, texto principal |
| `--color-stone-cream` | #F4EFE6 | Caliza | Fondo claro principal |

### Secundario

| Token | HEX | Nombre conceptual | Uso |
|---|---|---|---|
| `--color-copper` | #B8703A | Veta de cobre | CTAs, hover, acentos |

### Acentos de sede

| Token | HEX | Sede | Uso |
|---|---|---|---|
| `--color-accent-dean` | #7A8C5C | Deán Funes | Secciones, badges, highlights |
| `--color-accent-balcarce` | #9B4A3F | Balcarce | Secciones, badges, highlights |

### Neutrales minerales
Tienen un undertone cálido sutil — no son grises planos.

| Token | HEX |
|---|---|
| `--color-neutral-50` | #FAF7F2 |
| `--color-neutral-100` | #EDE7DD |
| `--color-neutral-200` | #D6CDBE |
| `--color-neutral-400` | #9C9081 |
| `--color-neutral-600` | #5C5448 |
| `--color-neutral-800` | #36302A |
| `--color-neutral-950` | #1A1612 |

### Semánticos

| Token | HEX | Uso |
|---|---|---|
| `--color-success` | #5E7A4D | Confirmaciones, estados OK |
| `--color-warning` | #C99852 | Alertas, estados pendientes |
| `--color-danger` | #A8453A | Errores, acciones destructivas |
| `--color-info` | #4A6A78 | Información, tooltips |

### Sistema letras/colores Balcarce
Las 20 oficinas de La Cantera Office están identificadas con letras y colores. Reutilizamos esta identidad como microacentos en cards, badges y elementos de marca.

6 colores base que rotan: `#B8703A` · `#7A8C5C` · `#9B4A3F` · `#C99852` · `#4A6A78` · `#7C5E8A`

---

## 6. Tipografía

### Display: Fraunces
Serif moderno con variable font (softness + opsz). Da sensación de piedra trabajada, tallada con intención. Personalidad sin caer en rústico.

- **Usos**: H1–H3, taglines, números grandes, pull quotes
- **Pesos**: 400 (regular), 600 (semibold), 900 (black)
- **Fuente**: Google Fonts, variable font
- **CSS var**: `var(--font-display)`

### Texto: Manrope
Sans humanista y geométrica. Moderna pero cálida. Excelente legibilidad en móvil. Sin el "sabor default" de Inter o Roboto.

- **Usos**: body, UI, navegación, formularios, labels
- **Pesos**: 400, 500, 600, 700
- **Fuente**: Google Fonts
- **CSS var**: `var(--font-sans)`

### Escala modular

| Token | Tamaño | Uso típico |
|---|---|---|
| `text-xs` | 12px | Labels, meta info |
| `text-sm` | 14px | Body secundario, captions |
| `text-md` | 16px | Body principal |
| `text-lg` | 18px | Body destacado |
| `text-xl` | 20px | Subtítulos pequeños |
| `text-2xl` | 24px | H4, H3 pequeño |
| `text-3xl` | 30px | H3 |
| `text-4xl` | 36px | H2 |
| `text-5xl` | 48px | H1 en mobile |
| `text-6xl` | 60px | H1 en desktop |
| `text-7xl` | 72px | Hero display |

---

## 7. Iconografía

- **Librería**: Lucide Icons
- **Stroke width**: 1.5 (único, no mezclar)
- **Tamaños estándar**: 16px (inline), 20px (UI), 24px (acciones principales), 32px (destacados)
- **Color**: hereda del texto o usa tokens de color explícitos
- **Restricción**: usar solo iconos del set Lucide, no mezclar con otras librerías

---

## 8. Texturas y fotografía

### Dirección de arte
- **Luz**: cálida, natural, hora dorada preferida. No flash directo, no luz fría.
- **Materiales**: piedra, madera, texturas nobles. Nada de renders o CGI.
- **Personas**: gente real trabajando, no stock photos de sonrisas forzadas.
- **Espacios**: mostrar el espacio real, con vida, no vacío y estéril.
- **Paleta fotográfica**: tonos cálidos que complementen el stone-cream y el copper.

### Usos de placeholder en desarrollo
Usar imágenes de `/design/photography-brief.md` como referencia. En código, usar `aspect-video` y `aspect-square` de Tailwind con `bg-neutral-200` como placeholder hasta tener fotos reales.

---

## 9. Layout & espaciado

- **Grid**: 12 columnas, `max-w-7xl` (1280px), padding horizontal `px-4 sm:px-6 lg:px-8`
- **Espaciado base**: 4px (1 unit = 0.25rem)
- **Secciones**: padding vertical mínimo `py-16` desktop, `py-12` mobile
- **Breakpoints**: sm=640px · md=768px · lg=1024px · xl=1280px · 2xl=1536px

---

## 10. Sistema letras/colores Balcarce

La Cantera Office en Balcarce tiene 20 oficinas identificadas por letras (A–T) y colores. Este sistema es una identidad visual única que capitalizamos en el diseño del brandbook y la UI.

### Aplicaciones
- Cards de planes en `/planes`: cada plan tiene su letra y color propio
- `<LetterTile>` component: pieza reutilizable con letra + color de fondo
- Badges de "sede Balcarce"
- Ilustraciones o decoraciones minimalistas en secciones de Balcarce

### Asignación de colores (rotación de 6 sobre 20 oficinas)

```
A,G,M,S → #B8703A (copper)
B,H,N,T → #7A8C5C (verde mineral)
C,I,O   → #9B4A3F (terracota)
D,J,P   → #C99852 (ámbar)
E,K,Q   → #4A6A78 (azul mineral)
F,L,R   → #7C5E8A (mora mineral)
```

---

## Checklist de validación con cliente

- [ ] Paleta de colores aprobada (comparada contra logo PNG descargado)
- [ ] Tipografía Fraunces + Manrope aprobada (presentar alternativas si se pide)
- [ ] Tagline principal confirmado
- [ ] Logo SVG / fuente vectorial solicitada
- [ ] Fotos en alta resolución solicitadas (ver `photography-brief.md`)
- [ ] Plan que reemplaza a "Diamante" definido
