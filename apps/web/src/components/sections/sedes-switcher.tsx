import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MotionStaggerGrid } from "@/components/motion/motion-stagger-grid";
import { Photo } from "@/components/ui/photo";
import { sedes } from "@/lib/content/sedes";
import { photos } from "@/lib/photos";

export function SedesSwitcher() {
  return (
    <Section tone="cream" spacing="lg">
      <Container>
        <div className="mb-12">
          <Eyebrow className="mb-4">Nuestros espacios</Eyebrow>
          <Heading as="h2" size="lg" className="text-stone-deep">
            Dos sedes, una sola comunidad
          </Heading>
        </div>

        <MotionStaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sedes.map((sede) => (
            <SedeCard key={sede.id} sede={sede} />
          ))}
        </MotionStaggerGrid>
      </Container>
    </Section>
  );
}

function SedeCard({ sede }: { sede: (typeof sedes)[number] }) {
  const isDean = sede.id === "dean-funes";

  return (
    <Link
      href={`/sedes#${sede.slug}`}
      className="group relative flex flex-col overflow-hidden transition-all duration-300"
    >
      {/* Double-Bezel outer shell */}
      <div className="p-1.5 rounded-3xl bg-neutral-100/60 border border-neutral-200 transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-[var(--shadow-mineral)] group-hover:-translate-y-1 h-full">
        {/* Inner card */}
        <div
          className="rounded-[1.4rem] bg-white overflow-hidden flex flex-col h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
        >
          {/* Accent bar */}
          <div className="h-1 w-full" style={{ backgroundColor: sede.accentColor }} />

          {/* Foto de fondo */}
          <div className="h-52 relative overflow-hidden">
            <Photo
              src={isDean ? photos.sedeDeanFunes.src : photos.sedeBalcarce.src}
              alt={isDean ? photos.sedeDeanFunes.alt : photos.sedeBalcarce.alt}
              width={isDean ? photos.sedeDeanFunes.width : photos.sedeBalcarce.width}
              height={isDean ? photos.sedeDeanFunes.height : photos.sedeBalcarce.height}
              blurDataURL={isDean ? photos.sedeDeanFunes.blurDataURL : photos.sedeBalcarce.blurDataURL}
              aspect="16/9"
              sizes="(max-width: 768px) 100vw, 50vw"
              variant="desaturated"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-stone-deep/40" />
            <div className="absolute top-4 left-4 z-10">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: sede.accentColor }}
              >
                <MapPin size={10} />
                {sede.direccion}
              </span>
            </div>
          </div>

          <div className="flex-1 p-6 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                  {sede.subtitulo}
                </p>
                <h3 className="font-display font-bold text-2xl text-stone-deep leading-tight">
                  {sede.nombre}
                </h3>
              </div>
              <ArrowRight
                size={20}
                className="text-neutral-300 group-hover:text-copper group-hover:translate-x-1 transition-all duration-200 mt-1 shrink-0"
              />
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed mb-5 flex-1">
              {sede.descripcion}
            </p>

            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-neutral-100">
              {sede.stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display font-black text-xl leading-none"
                    style={{ color: sede.accentColor }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
