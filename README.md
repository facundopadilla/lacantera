# La Cantera Workspace

Aplicación web para **La Cantera**, coworking en Salta, Argentina con dos sedes:
- **Deán Funes 1380** — La Cantera Workspace (330m², 60 estaciones, salón de eventos)
- **Balcarce 735** — La Cantera Office (20 oficinas privadas, patios internos, anfiteatro para 45)

## Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 15 (App Router) + TailwindCSS + Lucide Icons |
| Backend | FastAPI (Python 3.12) + SQLModel |
| DB | PostgreSQL |
| Email | Resend |
| Captcha | Cloudflare Turnstile |
| Storage | Cloudflare R2 |
| Hosting | Vercel (web) + Railway (api) |

## Estructura

```
LaCantera/
├── design/          # Brandbook, tokens y design system (fuente de verdad)
├── apps/
│   ├── web/         # Next.js 15 — landing + app pública
│   └── api/         # FastAPI — backend
└── docs/            # Roadmap, deploy, decisiones técnicas
```

## Desarrollo

```bash
# Frontend
cd apps/web && npm install && npm run dev

# Backend
cd apps/api && uv sync && uv run uvicorn app.main:app --reload
```

## Fases

| Fase | Alcance | Estado |
|---|---|---|
| F1 | Brandbook + design system + landing pública | En curso |
| F2 | Auth + dashboard usuario | Pendiente |
| F3 | Booking salas + pagos + comprobantes | Pendiente |
| F4 | Admin dashboard + eventos dinámicos | Pendiente |

## Skills de diseño

El orden de uso es intencional:
1. `/frontend-design` — generar componentes con dirección estética
2. `taste-skill` — refinar layout, motion y spacing
3. `/impeccable /audit` — auditar y aplicar `/critique` y `/polish`

Ver `docs/DECISIONES.md` para el log de decisiones técnicas.
