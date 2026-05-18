"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Building2, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/utils";

const variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90, damping: 18 } },
};

export function HeroSection() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0.2]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-stone-deep"
      aria-label="Bienvenido a La Cantera"
    >
      {/* Foto de fondo full-bleed */}
      {!reduced ? (
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ opacity: imageOpacity }}
        >
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <Image
              src={photos.heroHome.src}
              alt={photos.heroHome.alt}
              fill
              sizes="100vw"
              priority
              placeholder="blur"
              blurDataURL={photos.heroHome.blurDataURL}
              className="object-cover"
              style={{ filter: "grayscale(70%)" }}
            />
            <div className="absolute inset-0 bg-copper/15" />
          </motion.div>
        </motion.div>
      ) : (
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src={photos.heroHome.src}
            alt={photos.heroHome.alt}
            fill
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL={photos.heroHome.blurDataURL}
            className="object-cover"
            style={{ filter: "grayscale(70%)" }}
          />
          <div className="absolute inset-0 bg-copper/15" />
        </div>
      )}

      {/* Texturas de fondo — pointer-events-none para GPU safety */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 60%, #B8703A 0%, transparent 45%),
            radial-gradient(ellipse at 85% 15%, #7A8C5C 0%, transparent 40%),
            radial-gradient(ellipse at 65% 85%, #9B4A3F 0%, transparent 38%)
          `,
        }}
      />

      {/* Grid mineral sutil */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,239,230,1) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,230,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10 py-24 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">

          {/* ── Left: contenido principal ── */}
          <motion.div
            variants={variants}
            initial={reduced ? false : "hidden"}
            animate="visible"
          >
            <motion.div variants={item} className="mb-8">
              <Eyebrow tone="light">
                <MapPin size={10} />
                Salta · 2 sedes
              </Eyebrow>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-black text-stone-cream leading-[0.92] tracking-tight mb-8"
              style={{ fontSize: "clamp(3rem, 7.5vw, 6.5rem)" }}
            >
              Tu lugar para trabajar
              <br />
              <span className="text-copper">en Salta.</span>
            </motion.h1>

            <motion.p variants={item} className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10">
              Coworking, oficinas privadas y eventos. Dos sedes.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="/planes"
                className="bg-copper text-white hover:bg-copper-dark h-12 px-6 rounded-full"
              >
                Conocé los planes
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0 -mr-1.5">
                  <ArrowRight size={14} />
                </span>
              </MagneticButton>
              <Button href="/sedes" size="lg" variant="outline-white">
                Ver espacios
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-8 mt-16 pt-8 border-t border-neutral-800"
            >
              <Stat value="330m²" label="de espacio" />
              <div className="w-px h-8 bg-neutral-800" />
              <Stat value="2" label="sedes en Salta" />
              <div className="w-px h-8 bg-neutral-800" />
              <Stat value="60+" label="estaciones" />
            </motion.div>
          </motion.div>

          {/* ── Right: panel flotante de sedes ── */}
          <motion.div
            className="hidden lg:block"
            initial={reduced ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.5 }}
          >
            {/* Double-bezel outer shell */}
            <div className="p-1.5 rounded-3xl bg-white/5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              {/* Inner card */}
              <div className="rounded-[1.4rem] bg-neutral-900 border border-neutral-800 overflow-hidden">
                <SedePanel
                  nombre="La Cantera Workspace"
                  direccion="Deán Funes 1380"
                  stat="330m²"
                  statLabel="de espacio"
                  accentColor="#7A8C5C"
                  icon={Building2}
                />
                <div className="h-px bg-neutral-800" />
                <SedePanel
                  nombre="La Cantera Office"
                  direccion="Balcarce 735"
                  stat="20"
                  statLabel="oficinas privadas"
                  accentColor="#9B4A3F"
                  icon={Users}
                />
              </div>
            </div>

            {/* Badge flotante */}
            <div className="mt-4 flex justify-end">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-[10px] text-neutral-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Abierto ahora · Lun – Vie
              </span>
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Línea decorativa derecha */}
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent hidden lg:block"
      />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display font-black text-2xl text-stone-cream leading-none">{value}</p>
      <p className="text-xs text-neutral-500 mt-0.5 font-medium tracking-wide uppercase">{label}</p>
    </div>
  );
}

function SedePanel({
  nombre,
  direccion,
  stat,
  statLabel,
  accentColor,
  icon: Icon,
}: {
  nombre: string;
  direccion: string;
  stat: string;
  statLabel: string;
  accentColor: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
}) {
  return (
    <div className={cn("p-5 group transition-colors duration-200 hover:bg-neutral-800/50")}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${accentColor}25` }}
          >
            <Icon size={15} style={{ color: accentColor }} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: accentColor }}>
              {direccion}
            </p>
            <p className="text-sm font-semibold text-stone-cream leading-tight mt-0.5">
              {nombre}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-display font-black text-xl text-stone-cream leading-none" style={{ color: accentColor }}>
            {stat}
          </p>
          <p className="text-[10px] text-neutral-500 mt-0.5">{statLabel}</p>
        </div>
      </div>
    </div>
  );
}
