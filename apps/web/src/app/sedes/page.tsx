import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaFloating } from "@/components/layout/cta-floating";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";
import { PhotoCarousel } from "@/components/ui/photo-carousel";
import { MotionSection } from "@/components/motion/motion-section";
import { MotionStaggerGrid } from "@/components/motion/motion-stagger-grid";
import { StickyTabs } from "@/components/motion/sticky-tabs";
import { sedes } from "@/lib/content/sedes";
import { photos, sedeDeanFunesGallery } from "@/lib/photos";
import * as Icons from "lucide-react";
import { MapPin, MessageCircle, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestros espacios",
  description:
    "Conocé las dos sedes de La Cantera en Salta: Deán Funes 1380 y Balcarce 735. Coworking, oficinas privadas, sala de reuniones y anfiteatro.",
};

export default function SedesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-stone-deep py-24 min-h-[60vh] flex items-center relative overflow-hidden">
          {/* Foto de fondo del hero */}
          <div className="absolute inset-0">
            <Image
              src={photos.sedeDeanFunes.src}
              alt={photos.sedeDeanFunes.alt}
              fill
              priority
              className="object-cover"
              placeholder="blur"
              blurDataURL={photos.sedeDeanFunes.blurDataURL}
              style={{
                filter: "grayscale(70%)",
                objectPosition: photos.sedeDeanFunes.objectPosition,
              }}
            />
            <div className="absolute inset-0 bg-stone-deep/70" />
          </div>
          <Container>
            <MotionSection as="div" className="relative z-10">
              <Eyebrow tone="light" className="mb-4">Nuestros espacios</Eyebrow>
              <Heading as="h1" size="xl" className="text-stone-cream mb-4">
                Dos sedes en Salta
              </Heading>
              <p className="text-neutral-300 text-lg max-w-xl leading-relaxed">
                En las dos: internet de 300 MB, café incluido y comunidad activa.
              </p>
            </MotionSection>
          </Container>
        </section>

        {/* Sticky sub-nav */}
        <div className="sticky top-16 z-30 bg-white border-b border-neutral-100">
          <Container>
            <div className="py-3">
              <StickyTabs
                tabs={[
                  { id: "dean-funes", label: "Deán Funes", color: "rgb(122 140 92 / 0.15)", href: "#dean-funes" },
                  { id: "balcarce", label: "Balcarce", color: "rgb(155 74 63 / 0.15)", href: "#balcarce" },
                ]}
                className=""
              />
            </div>
          </Container>
        </div>

        {/* Sedes */}
        {sedes.map((sede, idx) => {
          const isDean = sede.id === "dean-funes";
          return (
            <div key={sede.id} id={sede.slug}>
              {/* Intro */}
              <Section tone={idx % 2 === 0 ? "cream" : "light"} spacing="lg">
                <Container>
                  <MotionSection as="div">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                      <div>
                        <Badge
                          variant={isDean ? "dean" : "balcarce"}
                          className="mb-4"
                        >
                          {sede.subtitulo}
                        </Badge>
                        <Heading as="h2" size="md" className="text-stone-deep mb-4">
                          {sede.nombre}
                        </Heading>
                        <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                          {sede.descripcion}
                        </p>

                        <div className="flex flex-col gap-2 mb-8">
                          <div className="flex items-center gap-2 text-sm text-neutral-600">
                            <MapPin size={14} className="text-copper" />
                            {sede.direccion}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-neutral-200 mb-8">
                          {sede.stats.map((stat) => (
                            <div key={stat.label}>
                              <p
                                className="font-display font-black text-2xl leading-none"
                                style={{ color: sede.accentColor }}
                              >
                                {stat.value}
                              </p>
                              <p className="text-xs text-neutral-400 mt-1 leading-tight">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            href={`https://wa.me/${sede.whatsapp.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="copper"
                            size="md"
                          >
                            <MessageCircle size={16} />
                            Consultar por esta sede
                          </Button>
                          <Button
                            href={sede.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            size="md"
                          >
                            <MapPin size={16} />
                            Ver en Google Maps
                          </Button>
                        </div>
                      </div>

                      {/* Foto de sede */}
                      {isDean ? (
                        <PhotoCarousel
                          slides={sedeDeanFunesGallery}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <Photo
                          src={photos.sedeBalcarce.src}
                          alt={photos.sedeBalcarce.alt}
                          width={photos.sedeBalcarce.width}
                          height={photos.sedeBalcarce.height}
                          blurDataURL={photos.sedeBalcarce.blurDataURL}
                          objectPosition={photos.sedeBalcarce.objectPosition}
                          variant="editorial"
                          aspect="4/3"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="rounded-2xl overflow-hidden"
                        />
                      )}
                    </div>
                  </MotionSection>
                </Container>
              </Section>

              {/* Espacios */}
              <Section tone={idx % 2 === 0 ? "light" : "cream"} spacing="md">
                <Container>
                  <Eyebrow tone="copper" className="mb-6">Espacios disponibles</Eyebrow>
                  <MotionStaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sede.espacios.map((esp) => {
                      const Icon =
                        (Icons as unknown as Record<string, LucideIcon>)[esp.icon] ?? Icons.Square;
                      return (
                        <div
                          key={esp.nombre}
                          className="h-full p-1.5 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:border-neutral-300 transition-colors"
                        >
                          <div className="h-full p-5 rounded-[14px] bg-white flex flex-col gap-3">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${sede.accentColor}1A` }}
                            >
                              <Icon size={18} strokeWidth={1.75} style={{ color: sede.accentColor }} />
                            </div>
                            <h3 className="font-semibold text-stone-deep">{esp.nombre}</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">{esp.descripcion}</p>
                          </div>
                        </div>
                      );
                    })}
                  </MotionStaggerGrid>
                </Container>
              </Section>
            </div>
          );
        })}
      </main>
      <Footer />
      <CtaFloating />
    </>
  );
}
