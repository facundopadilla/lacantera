# Log de Decisiones Técnicas — La Cantera

## [2026-05-17] Stack Frontend: Next.js 15 sobre React + Vite

**Decisión**: Next.js 15 con App Router.
**Razón**: La landing pública (planes, galería, sedes, eventos) necesita SEO real. Next.js da SSR/SSG nativamente sin configuración. Tailwind y Lucide funcionan idénticos.
**Trade-off**: Más opinionado que Vite. Si algún día solo fuera una app interna (detrás de login), Vite sería más liviano.

---

## [2026-05-17] Pagos: Transferencia bancaria + upload de comprobante

**Decisión**: El usuario transfiere por CBU/alias, sube comprobante (imagen/PDF). El admin aprueba.
**Razón**: Es el flujo real del negocio. MercadoPago automático agrega complejidad y comisión (~6%) para un volumen pequeño.
**Trade-off**: Proceso manual de aprobación. En F4 se puede automatizar con OCR o con un webhook de MP si el negocio crece.

---

## [2026-05-17] Validación de residencia: manual por admin

**Decisión**: El admin activa el flag "residente del edificio" manualmente en el panel del usuario.
**Razón**: El coworking es pequeño — el admin conoce a sus vecinos. Upload de docs agrega superficie de ataque con PII sensible.
**Trade-off**: No escalable si el negocio crece mucho. En F4 se puede agregar upload + revisión si se necesita.

---

## [2026-05-17] Base de datos: PostgreSQL desde día 1

**Decisión**: PostgreSQL (Supabase/Neon free tier o Railway).
**Razón**: SQLite no maneja bien concurrencia de reservas simultáneas. Postgres tiene timezone nativo (crítico para reservas en hora argentina), y los free tiers de Supabase/Neon no cuestan nada al inicio.
**Trade-off**: Más setup inicial que SQLite. Lo vale.

---

## [2026-05-17] ORM: SQLModel (para F2+)

**Decisión**: SQLModel sobre SQLAlchemy puro.
**Razón**: Mismo autor que FastAPI (Sebastián Ramírez). Los modelos sirven como modelos de DB y como schemas de Pydantic al mismo tiempo, reduciendo boilerplate.
**Trade-off**: SQLModel está menos maduro que SQLAlchemy. Si hay una feature muy específica de SQLAlchemy que necesitemos, está disponible porque SQLModel la wrappea.

---

## [2026-05-17] Captcha: Cloudflare Turnstile

**Decisión**: Cloudflare Turnstile.
**Razón**: Gratis, sin "encontrá el semáforo" UX horrible, sin tracking de Google. Se integra como un script + server-side validation.
**Trade-off**: Requiere cuenta de Cloudflare. hCaptcha es la alternativa si Cloudflare no es opción.

---

## [2026-05-17] Timezone: UTC en DB, America/Argentina/Buenos_Aires en UI

**Decisión**: Todos los timestamps se guardan como `TIMESTAMPTZ` en UTC. La conversión a hora argentina se hace en el frontend con `Intl.DateTimeFormat` o `date-fns-tz`.
**Razón**: Guardar en hora local causa bugs cuando se hacen queries de rango o se despliega en servidores con TZ diferente.
**Trade-off**: Requiere disciplina — nunca usar `datetime.now()` sin `.utcnow()` en Python.

---

## [2026-05-17] Multi-sede: location_id desde día 1

**Decisión**: `lib/content/sedes.ts` usa `id: 'dean-funes' | 'balcarce'` desde F1. En F2+ cada recurso de DB (sala, plan, evento) tiene `location_id` FK.
**Razón**: Migrar después cuando ya hay datos es costoso y propenso a bugs.
**Trade-off**: Un poco más de complejidad en F1, pero el modelo es correcto desde el inicio.

---

## [2026-05-17] Skills de diseño: orden definido

**Decisión**: El flujo de uso de skills es siempre: `frontend-design` → `taste-skill` → `impeccable /audit`.
1. `frontend-design`: generar componentes con dirección estética fuerte
2. `taste-skill`: refinar layout, motion y spacing post-generación
3. `impeccable /audit` + `/critique` + `/polish`: auditar y corregir fallas de diseño
**Razón**: Las tres skills se superponen parcialmente en scope. Definir el orden evita conflictos y redundancias.

---

## [2026-05-17] Shadcn/ui: NO en F1, sí parcialmente en F2

**Decisión**: Los ~10 primitivos de F1 se hacen a mano respetando los tokens del brandbook. En F2 entra shadcn selectivamente (Dialog, Popover, Select, Form) y se reestila.
**Razón**: shadcn instala componentes con opiniones propias que habría que sobreescribir para el brandbook mineral. Para primitivos simples (Button, Card) es más rápido hacerlos a mano.

---

## [2026-05-17] Storage de comprobantes: Cloudflare R2 (F3+)

**Decisión**: Cloudflare R2 (S3-compatible, sin egress fees).
**Razón**: Sin costo de egress, S3-compatible (sdks existentes), se puede conectar con mismo dominio de Cloudflare.
**Trade-off**: Si ya usamos Supabase para la DB, Supabase Storage también es válido y simplifica el stack.

---

## [2026-05-17] Calendario: Schedule-X (F3+)

**Decisión**: Schedule-X para el componente de calendario de reservas.
**Razón**: El más moderno del ecosistema React para calendarios headless. Soporte correcto de timezones. FullCalendar tiene licencia restrictiva en algunas vistas.
**Trade-off**: Menos maduro que FullCalendar. react-big-calendar es opción si Schedule-X presenta issues.

---

## Próximas decisiones pendientes

- [ ] Auth en F2: NextAuth vs Clerk (cost/complexity tradeoff) — decidir antes de arrancar F2
- [ ] Dominio: ¿migrar `lacanteraws.com` a Vercel en F1 o usar subdomain de staging?
- [ ] Plan que reemplaza a "Diamante": ¿nombre, precio, includes?
- [ ] Reemplazo del plan Diamante en planes
