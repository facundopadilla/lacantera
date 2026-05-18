import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Users, Mic2, Calendar } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/lib/photos";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaFloating } from "@/components/layout/cta-floating";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MotionSection } from "@/components/motion/motion-section";
import { MotionStaggerGrid } from "@/components/motion/motion-stagger-grid";
import { SpringCard } from "@/components/motion/spring-card";
import { MagneticButton } from "@/components/motion/magnetic-button";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Anfiteatro para 45 personas en Balcarce y salón para 40 en Deán Funes. El espacio perfecto para eventos, capacitaciones y presentaciones en Salta.",
};

export default function EventosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-stone-deep py-24 min-h-[60vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={photos.eventoAnfiteatro.src}
              alt={photos.eventoAnfiteatro.alt}
              fill
              priority
              className="object-cover grayscale opacity-40"
            />
            <div className="absolute inset-0 bg-stone-deep/70" />
          </div>
          <Container>
            <MotionSection as="div" className="relative z-10">
              <Eyebrow tone="light" className="mb-4">Espacios para eventos</Eyebrow>
              <Heading as="h1" size="xl" className="text-stone-cream mb-4">
                El espacio para
                <br />
                <span className="text-copper">tu próximo evento.</span>
              </Heading>
              <p className="text-neutral-400 text-lg max-w-lg leading-relaxed">
                Dos opciones en Salta. Anfiteatro en Balcarce, salón en Deán Funes.
              </p>
            </MotionSection>
          </Container>
        </section>

        {/* Espacios */}
        <Section tone="cream" spacing="lg">
          <Container>
            <MotionStaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {espacios.map((espacio) => (
                <SpringCard key={espacio.nombre} className="h-full">
                  <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden h-full">
                    <div className="h-1" style={{ backgroundColor: espacio.color }} />
                    <Photo
                      src={espacio.photo.src}
                      alt={espacio.photo.alt}
                      width={espacio.photo.width}
                      height={espacio.photo.height}
                      blurDataURL={espacio.photo.blurDataURL}
                      variant="editorial"
                      aspect="16/9"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-none"
                    />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                            {espacio.sede}
                          </p>
                          <h2 className="font-display font-bold text-2xl text-stone-deep">
                            {espacio.nombre}
                          </h2>
                        </div>
                        <div
                          className="flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-full text-white"
                          style={{ backgroundColor: espacio.color }}
                        >
                          <Users size={14} />
                          {espacio.capacidad}
                        </div>
                      </div>
                      <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                        {espacio.descripcion}
                      </p>
                      <ul className="space-y-1.5 mb-6">
                        {espacio.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: espacio.color }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Button
                        href={`https://wa.me/${espacio.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="copper"
                        size="sm"
                      >
                        <MessageCircle size={14} />
                        Consultar disponibilidad
                      </Button>
                    </div>
                  </div>
                </SpringCard>
              ))}
            </MotionStaggerGrid>
          </Container>
        </Section>

        {/* Tipos de evento */}
        <Section tone="dark" spacing="md">
          <Container>
            <Eyebrow tone="light" className="mb-8">¿Para qué tipo de evento?</Eyebrow>
            <MotionStaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tiposEvento.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 p-5 rounded-xl border border-neutral-800 text-center"
                >
                  <Icon size={22} className="text-copper" />
                  <p className="text-sm font-medium text-stone-cream">{label}</p>
                </div>
              ))}
            </MotionStaggerGrid>
          </Container>
        </Section>

        {/* CTA Próximos eventos */}
        <Section tone="light" spacing="md" className="border-t border-neutral-100">
          <Container>
            <MotionSection as="div">
              <Calendar size={28} className="text-copper mb-4" />
              <h2 className="font-display font-bold text-2xl text-stone-deep mb-3">
                Próximos eventos en La Cantera
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-xl">
                Seguí nuestra agenda en Instagram.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  href="https://www.instagram.com/lacanteraworkspace/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  Seguinos en Instagram
                </Button>
                <MagneticButton
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-copper text-white font-semibold text-sm h-8 px-4 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Consultá por tu evento
                </MagneticButton>
              </div>
            </MotionSection>
          </Container>
        </Section>
      </main>
      <Footer />
      <CtaFloating />
    </>
  );
}

const espacios = [
  {
    nombre: "Anfiteatro",
    sede: "Balcarce",
    color: "#9B4A3F",
    capacidad: "~45 personas",
    whatsapp: "5493872287720",
    photo: photos.eventoAnfiteatro,
    descripcion:
      "Con gradas, buena acústica y equipamiento de audio y video.",
    features: [
      "Capacidad para hasta 45 personas",
      "Audio y micrófono disponibles",
      "Pantalla y proyector",
      "Acceso independiente al espacio",
      "Cocina equipada disponible",
    ],
  },
  {
    nombre: "Salón de eventos",
    sede: "Deán Funes",
    color: "#7A8C5C",
    capacidad: "~40 personas",
    whatsapp: "5493874636952",
    photo: photos.espacioColaboracion,
    descripcion:
      "Para capacitaciones y presentaciones. Pantalla, proyector e internet 300 MB.",
    features: [
      "Capacidad para hasta 40 personas",
      "Pantalla y proyector",
      "Internet 300 MB",
      "Servicio de bar disponible",
      "Estacionamiento cercano",
    ],
  },
];

const tiposEvento = [
  { icon: Mic2, label: "Presentaciones" },
  { icon: Users, label: "Capacitaciones" },
  { icon: Calendar, label: "Meetups" },
  { icon: MessageCircle, label: "Talleres" },
];
