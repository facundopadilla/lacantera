"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Package, CalendarDays, Users, MessageCircle } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const navLinks: Array<{ href: string; label: string; Icon: LucideIcon }> = [
  { href: "/sedes",    label: "Espacios",  Icon: MapPin },
  { href: "/planes",   label: "Planes",    Icon: Package },
  { href: "/eventos",  label: "Eventos",   Icon: CalendarDays },
  { href: "/nosotros", label: "Nosotros",  Icon: Users },
  { href: "/contacto", label: "Contacto",  Icon: MessageCircle },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-stone-cream/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo variant="color" size="sm" />

            <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
              {navLinks.map(({ href, label, Icon }) => {
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                      isActive
                        ? "text-stone-deep font-semibold border-b-2 border-copper bg-neutral-100"
                        : "text-neutral-600 hover:text-stone-deep hover:bg-neutral-50"
                    )}
                  >
                    <Icon size={15} strokeWidth={1.5} className="shrink-0" />
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button href="/planes" size="sm" variant="copper">
                Conocé los planes
              </Button>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-neutral-600 hover:text-stone-deep hover:bg-neutral-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-stone-deep/96 backdrop-blur-md flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="font-display font-bold text-stone-cream text-lg">La Cantera</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-stone-cream"
                aria-label="Cerrar menú"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-cream/40 mb-5">
                Navegación
              </p>
              <nav>
                {navLinks.map(({ href, label, Icon }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 py-4 border-b border-white/5 text-stone-cream text-lg font-medium"
                    >
                      <Icon size={18} strokeWidth={1.5} className="text-copper shrink-0" />
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="px-6 py-6 border-t border-white/10">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-cream/40 mb-4">
                Acciones
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/planes"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center h-11 px-6 rounded-full bg-copper text-white font-semibold text-sm"
                >
                  Ver planes y precios
                </Link>
                <a
                  href="https://wa.me/5493874636952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-11 px-6 rounded-full border border-white/20 text-stone-cream font-medium text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
