import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";

const sedes = [
  {
    nombre: "Deán Funes",
    direccion: "Deán Funes 1380, Salta",
    telefono: "387 463-6952",
    whatsapp: "+5493874636952",
    color: "#7A8C5C",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=De%C3%A1n+Funes+1380%2C+Salta%2C+Argentina",
  },
  {
    nombre: "Balcarce",
    direccion: "Balcarce 735, Salta",
    telefono: "387 228-7720",
    whatsapp: "+5493872287720",
    color: "#9B4A3F",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Balcarce+735%2C+Salta%2C+Argentina",
  },
];

const links = [
  { href: "/sedes",    label: "Nuestros espacios" },
  { href: "/planes",   label: "Planes y precios" },
  { href: "/eventos",  label: "Eventos" },
  { href: "/nosotros", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TiktokIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function WhatsappIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

// Activar Facebook, LinkedIn y TikTok reemplazando null por la URL real cuando tengan perfil
const redesActivas = [
  { label: "Instagram", href: "https://www.instagram.com/lacanteraworkspace/", Icon: InstagramIcon },
  { label: "WhatsApp",  href: "https://wa.me/5493874636952",                  Icon: WhatsappIcon  },
  { label: "Facebook",  href: null as string | null,                           Icon: FacebookIcon  },
  { label: "LinkedIn",  href: null as string | null,                           Icon: LinkedinIcon  },
  { label: "TikTok",    href: "https://www.tiktok.com/@lacanteraworkspace",     Icon: TiktokIcon    },
].filter((r): r is typeof r & { href: string } => r.href !== null);

export function Footer() {
  return (
    <footer className="bg-stone-deep text-stone-cream mt-auto">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-8 lg:gap-16">

          {/* Col 1: Logo + claim + redes */}
          <div>
            <Logo variant="white" size="md" className="mb-4" />
            <p className="text-stone-cream/80 text-sm leading-relaxed">
              Coworking en Salta. Dos sedes.
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-2">
                {redesActivas.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-full bg-white/5 hover:bg-copper/20 text-stone-cream/80 hover:text-copper transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
              <a
                href="mailto:lacantera1380@gmail.com"
                className="flex items-center gap-2 text-stone-cream/75 hover:text-copper text-sm transition-colors"
              >
                <Mail size={14} strokeWidth={1.5} />
                lacantera1380@gmail.com
              </a>
            </div>
          </div>

          {/* Col 2: Navegación */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-stone-cream/85 mb-4">
              Navegación
            </p>
            <ul className="flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-stone-cream/80 hover:text-copper transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Mini-cards sedes */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-stone-cream/85 mb-4">
              Nuestras sedes
            </p>
            <div className="flex flex-col gap-3">
              {sedes.map((sede) => (
                <div
                  key={sede.nombre}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                    style={{ color: sede.color }}
                  >
                    {sede.nombre}
                  </p>
                  <p className="text-stone-cream/80 text-sm">{sede.direccion}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <a
                      href={sede.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-stone-cream/75 hover:text-copper text-xs transition-colors"
                    >
                      <MapPin size={11} />
                      Ver en Maps
                    </a>
                    <a
                      href={`tel:+54${sede.telefono.replace(/\s/g, "")}`}
                      className="text-stone-cream/75 text-xs hover:text-copper transition-colors"
                    >
                      {sede.telefono}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-cream/65">
          <p>© {new Date().getFullYear()} La Cantera Workspace. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-copper transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-copper transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
