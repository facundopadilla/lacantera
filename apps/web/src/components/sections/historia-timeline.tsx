"use client";
import { MapPin, ArrowUp, Building2, Users } from "lucide-react";
import { useReducedMotion, motion } from "framer-motion";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/lib/photos";

const hitos = [
  {
    year: "2017",
    Icon: MapPin,
    title: "Abrimos las puertas",
    description: "El primer espacio de coworking de Salta nació en Deán Funes 1380.",
    photoKey: "nosotrosHistoria1" as keyof typeof photos,
  },
  {
    year: "2019",
    Icon: ArrowUp,
    title: "El primer crecimiento",
    description: "Sumamos el segundo piso y más de 40 nuevas estaciones de trabajo.",
    photoKey: null,
  },
  {
    year: "2022",
    Icon: Building2,
    title: "Balcarce: la segunda sede",
    description:
      "Abrimos La Cantera Office en Balcarce 735, con anfiteatro para 45 personas.",
    photoKey: "nosotrosHistoria2" as keyof typeof photos,
  },
  {
    year: "2024",
    Icon: Users,
    title: "60+ coworkers activos",
    description: "Hoy somos dos sedes con coworkers de toda la ciudad.",
    photoKey: null,
  },
] as const;

export function HistoriaTimeline() {
  const reduced = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px bg-copper/20" />

      {hitos.map((hito, i) => (
        <motion.div
          key={hito.year}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: i * 0.08,
          }}
          className="relative flex gap-6 pb-14 last:pb-0"
        >
          <div className="relative z-10 w-10 h-10 rounded-full bg-copper/10 border border-copper/25 flex items-center justify-center shrink-0">
            <hito.Icon size={16} className="text-copper" strokeWidth={1.5} />
          </div>

          <div className="flex-1 min-w-0">
            <span className="font-display text-5xl font-black text-copper/20 leading-none select-none">
              {hito.year}
            </span>
            <h3 className="font-display font-bold text-xl text-stone-deep mt-1">
              {hito.title}
            </h3>
            <p className="text-sm text-neutral-500 mt-1 leading-relaxed max-w-sm">
              {hito.description}
            </p>
            {hito.photoKey && (
              <div className="mt-4 max-w-[200px] rounded-xl overflow-hidden">
                <Photo
                  src={photos[hito.photoKey].src}
                  alt={photos[hito.photoKey].alt}
                  width={photos[hito.photoKey].width}
                  height={photos[hito.photoKey].height}
                  blurDataURL={photos[hito.photoKey].blurDataURL}
                  aspect="3/4"
                  sizes="200px"
                  variant="editorial"
                />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
