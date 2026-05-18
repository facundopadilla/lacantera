# La Cantera API

FastAPI backend. En Fase 1 solo expone `/health`. Las features reales empiezan en F2.

## Desarrollo local

```bash
# Instalar dependencias con uv (recomendado)
uv sync

# Levantar server
uv run uvicorn app.main:app --reload --port 8000
```

## Variables de entorno

Copiar `.env.example` a `.env` y completar los valores.

## Estado por fase

| Fase | Endpoints |
|---|---|
| F1 (actual) | `GET /health` |
| F2 | `/auth/*` (registro, login, recuperar clave) |
| F3 | `/rooms/*`, `/bookings/*`, `/payments/*` |
| F4 | `/admin/*`, `/events/*` |

## Tests

```bash
uv run pytest
```
