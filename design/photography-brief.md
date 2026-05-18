# Brief de Fotografía — La Cantera

> Compartir este documento con el fotógrafo antes de la sesión.

## Por qué necesitamos fotos nuevas

El sitio actual tiene fotografías de baja resolución (JPG estándar, no aptas para pantallas retina ni secciones de galería full-bleed). Para la nueva plataforma necesitamos fotos que transmitan el espíritu mineral-cálido de la marca.

---

## Shots obligatorios por sede

### Sede Deán Funes 1380 — La Cantera Workspace

| # | Shot | Descripción |
|---|---|---|
| 1 | **Plano general — open space** | 330m² desde ángulo elevado o desde una esquina. Mostrar la escala. |
| 2 | **Estación de trabajo** | Una persona trabajando con laptop, natural, sin posar. Luz cálida. |
| 3 | **Sala de reuniones** | Mesa para 8, configurada para reunión activa o vacía y limpia. |
| 4 | **Phone booth** | Cabina aislada, persona en llamada (o vacía con foco en el diseño del booth). |
| 5 | **Salón de eventos** | (~40 personas) Vacío con sillas configuradas, o con evento en curso. |
| 6 | **Bar / cocina** | Zona de café/mate, mostrar el detalle de la "cerveza libre". |
| 7 | **Amenity: lockers** | Fila de lockers, detalle del diseño. |
| 8 | **Detalle de textura** | Pared, piso, material del espacio que transmita el concepto "cantera". |
| 9 | **Entrada / fachada** | La puerta o frente del espacio en Deán Funes 1380. |

### Sede Balcarce 735 — La Cantera Office

| # | Shot | Descripción |
|---|---|---|
| 1 | **Plano general — corredor de oficinas** | El sistema de letras/colores de las 20 oficinas visible. |
| 2 | **Oficina privada** | Interior de una oficina, 2-3 personas trabajando. |
| 3 | **Anfiteatro para 45** | El shot "hero" de Balcarce — diferenciador único. Vacío o con evento. |
| 4 | **Sala de reuniones para 10** | Configurada para reunión. |
| 5 | **Patio exterior** | El valor diferencial de Balcarce. Personas en pausa o trabajando al aire libre. |
| 6 | **Cocina equipada** | Zona de descanso, foco en la calidez del espacio. |
| 7 | **Letrero de oficina** | Detalle de una de las letras/colores de identificación de oficina. |
| 8 | **Fachada / entrada** | Balcarce 735 desde la vereda. |

---

## Shots transversales (valen para ambas sedes)

| # | Shot | Descripción |
|---|---|---|
| A | **Comunidad** | Grupo de 3-5 personas interactuando de forma natural (coffee break, pasillo, espacio común). |
| B | **Networking** | Dos personas en conversación espontánea. |
| C | **Concentración** | Persona con headphones, trabajando. Transmite "entrás en flow acá". |
| D | **Detalle de manos** | Teclado + café. Simple. |
| E | **Skyline Salta** | Si hay ventana o terraza con vista a la ciudad — usable como hero o background. |

---

## Directrices técnicas

- **Formato**: RAW + JPG alta resolución. Entregar al menos en 3000px por el lado largo.
- **Luz**: preferiblemente natural, cálida (mañana o tarde). Evitar flash frontal.
- **Hora**: 9-11hs o 15-17hs para aprovechar la luz.
- **No manipulación excesiva**: no HDR agresivo, no desaturados dramáticos. El espacio debe verse como es.
- **Entrega**: carpeta compartida con estructura `dean-funes/` y `balcarce/`.

---

## Mientras no tengamos fotos reales

Usar en desarrollo estos placeholders:
- Unsplash queries: "coworking", "workspace interior warm", "open office natural light"
- Aspecto ratio: `16/9` para planos generales, `4/3` para interiores, `1/1` para detalles
- En código: `bg-neutral-200 animate-pulse` en `<div>` del tamaño del aspecto ratio
