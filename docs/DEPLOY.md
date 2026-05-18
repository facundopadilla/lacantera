# Deploy — La Cantera

## Fase 1: solo frontend (Vercel)

### Requisitos
- Cuenta en [vercel.com](https://vercel.com)
- Repositorio en GitHub conectado a Vercel
- Variables de entorno configuradas (ver abajo)

### Deploy automático
```bash
# Conectar repo a Vercel (primera vez)
cd apps/web && npx vercel --cwd .

# Deploys automáticos en cada push a main via GitHub + Vercel integration
```

### Variables de entorno (Vercel dashboard → Settings → Environment Variables)
```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=   # Cloudflare Turnstile public key
TURNSTILE_SECRET_KEY=             # Cloudflare Turnstile secret key (server only)
RESEND_API_KEY=                   # Resend API key
RESEND_FROM_EMAIL=                # hola@lacanteraws.com (verificar dominio en Resend)
NEXT_PUBLIC_SITE_URL=             # https://lacanteraws.com en prod, https://staging.lacanteraws.com en preview
```

### Dominio
- **Opción A (staging)**: usar el subdominio `nuevo.lacanteraws.com` hasta cerrar F1 y validar con cliente. El sitio actual sigue en `lacanteraws.com`.
- **Opción B (reemplazo directo)**: migrar el dominio principal a Vercel desde F1. Requiere coordinación con el cliente para no interrumpir el WhatsApp linkado al sitio.

**Recomendación**: Opción A en F1. Migrar en F2 cuando el sitio nuevo ya incluya al menos el formulario de contacto funcionando.

---

## Fase 2+: frontend + backend (Vercel + Railway)

### Frontend (Vercel)
Sin cambios adicionales. Agregar:
```
NEXT_PUBLIC_API_URL=https://api.lacanteraws.com  # URL del backend Railway
JWT_SECRET=                                       # Para verificar tokens en middleware Next (si corresponde)
```

### Backend FastAPI (Railway)
```bash
# Setup inicial
railway init
railway link

# Variables de entorno en Railway dashboard
DATABASE_URL=postgresql://...      # Neon / Supabase / Railway Postgres
SECRET_KEY=                        # JWT secret, generado con: openssl rand -hex 32
RESEND_API_KEY=                    # Mismo que en Vercel
CLOUDFLARE_R2_BUCKET=lacantera-uploads
CLOUDFLARE_R2_ACCESS_KEY=
CLOUDFLARE_R2_SECRET_KEY=
CLOUDFLARE_R2_ACCOUNT_ID=
FRONTEND_URL=https://lacanteraws.com  # Para CORS

# Deploy
railway up
```

### Base de datos (PostgreSQL)
Opciones recomendadas:
1. **Neon** (serverless Postgres, free tier 0.5 GB)
2. **Supabase** (Postgres managed + Auth + Storage en uno, free tier 500 MB)
3. **Railway Postgres** (add-on en el mismo proyecto Railway)

### Migraciones
```bash
cd apps/api
uv run alembic upgrade head    # aplicar migraciones pendientes
uv run alembic revision --autogenerate -m "description"   # generar nueva migración
```

---

## CI/CD (GitHub Actions)

### `.github/workflows/ci-frontend.yml`
- Trigger: push a cualquier branch
- Steps: install → lint → type-check → build
- Deploy preview en Vercel (automático via integración de Vercel)

### `.github/workflows/ci-backend.yml` (F2+)
- Trigger: push a cualquier branch (con cambios en `apps/api/**`)
- Steps: install uv → run pytest → deploy a Railway (staging en branches, prod en main)
