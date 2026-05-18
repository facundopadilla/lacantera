# Roadmap — La Cantera

## Fase 1 · Fundación (en curso)

**Objetivo**: Brandbook + design system + landing pública.
**Bloqueo para F2**: Validar paleta con cliente, tener fotos HD, definir plan que reemplaza a Diamante.

### Entregables
- [ ] Brandbook (`design/brandbook.md`)
- [ ] Design tokens (`design/tokens.css`, `design/tokens.json`)
- [ ] Preview standalone (`design/preview.html`)
- [ ] Logos descargados + brief de vectorización
- [ ] Brief de fotografía (`design/photography-brief.md`)
- [ ] Primitivos UI (`apps/web/src/components/ui/`)
- [ ] Componentes de marca y layout
- [ ] Data estática de contenido (`lib/content/`)
- [ ] Página `/` (home completa)
- [ ] Página `/sedes` (con tabs Deán Funes / Balcarce)
- [ ] Página `/planes` (con 5 planes + comparativa)
- [ ] Página `/eventos` (placeholder)
- [ ] Página `/nosotros`
- [ ] Página `/contacto` (con Turnstile + Resend)
- [ ] SEO básico (metadata, OG, robots, sitemap)
- [ ] Scaffold FastAPI (`apps/api/app/main.py` solo `/health`)
- [ ] Deploy preview en Vercel

**Lighthouse mobile objetivo**: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 95.

---

## Fase 2 · Auth + Dashboard usuario (3-4 semanas post-F1)

**Objetivo**: Los usuarios pueden registrarse, loguearse y ver su perfil y tipo de membresía.

### Funcionalidades
- Registro, login, recuperar contraseña
- Roles: `superusuario | admin | usuario`
- Dashboard `/app` protegido por rol
- Perfil de usuario con tipo de cliente:
  - Residente del edificio (admin activa manualmente el flag)
  - Miembro de colegio profesional (con % de descuento)
  - Particular
  - Empresa (con N sub-usuarios vinculados a un `company_id`)
- FastAPI: `/auth/*` endpoints (JWT + refresh tokens)
- PostgreSQL: tablas `users`, `companies`, `professional_memberships`
- Resend: e-mail de confirmación de registro y recuperación de clave
- Cloudflare Turnstile en todos los formularios de auth

**Pendiente**: Decidir entre NextAuth y Clerk para el manejo de sesión en Next.js.

---

## Fase 3 · Booking + pagos + comprobantes (4-5 semanas post-F2)

**Objetivo**: Usuarios pueden reservar salas de reuniones y gestionar sus pagos mensuales.

### Funcionalidades
- Catálogo de salas por sede (`location_id`)
- Calendario de disponibilidad (Schedule-X)
- Reserva con estados: `pending | confirmed | cancelled`
- 4 horas/mes incluidas según plan, horas adicionales con costo
- Flujo de pagos del 1 al 5 de cada mes:
  - El admin publica el link de pago (CBU/alias/instrucciones) 
  - El usuario sube comprobante (JPG/PNG/PDF) a Cloudflare R2
  - El admin aprueba o rechaza con nota
  - Resend notifica al usuario
- PostgreSQL: tablas `rooms`, `bookings`, `payments`, `payment_proofs`
- `america/argentina/buenos_aires` timezone en UI, UTC en DB

---

## Fase 4 · Admin dashboard + eventos dinámicos (3 semanas post-F3)

**Objetivo**: Administradores pueden gestionar todo el sistema desde un panel.

### Funcionalidades
- `/admin` protegido por `role=admin|superusuario`
- CRUD de usuarios (activar/desactivar, cambiar rol, marcar residente)
- CRUD de planes y precios por sede
- Gestión de reservas (ver, aprobar, cancelar)
- Gestión de comprobantes de pago
- Creación y publicación de eventos (aparecen en `/eventos` de la landing)
- Metrics básicas: usuarios activos, reservas del mes, pagos pendientes
- Audit log: tabla `audit_events` con `(actor_id, action, target, timestamp)`

---

## Backlog (post-MVP)

- WhatsApp Cloud API para notificaciones (alta demanda en AR)
- PWA / instalable como app
- Integración con MercadoPago automático
- Analytics con Plausible o PostHog
- Blog / comunidad para miembros
- Referral codes
- Tour virtual / video hero
- Stripe en USD si llegan clientes internacionales
