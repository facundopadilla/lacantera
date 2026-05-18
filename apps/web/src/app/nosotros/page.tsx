import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaFloating } from "@/components/layout/cta-floating";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MotionSection } from "@/components/motion/motion-section";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { HistoriaTimeline } from "@/components/sections/historia-timeline";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "La historia detrás de La Cantera. Un espacio creado en Salta para quienes eligen trabajar diferente.",
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-stone-deep py-24 min-h-[60vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={photos.sedeDeanFunes.src}
              alt={photos.sedeDeanFunes.alt}
              fill
              priority
              className="object-cover grayscale opacity-40"
            />
            <div className="absolute inset-0 bg-stone-deep/70" />
          </div>
          <Container>
            <MotionSection as="div" className="relative z-10">
              <Eyebrow tone="light" className="mb-4">Quiénes somos</Eyebrow>
              <Heading as="h1" size="xl" className="text-stone-cream mb-4">
                Hicimos el espacio que faltaba en Salta.
              </Heading>
              <p className="text-neutral-300 text-lg max-w-lg leading-relaxed">
                Un coworking de Salta, para la forma en que se trabaja acá.
              </p>
            </MotionSection>
          </Container>
        </section>

        {/* Historia */}
        <Section tone="cream" spacing="lg">
          <Container size="md">
            <Eyebrow tone="copper" className="mb-6">Nuestra historia</Eyebrow>
            <HistoriaTimeline />
          </Container>
        </Section>

        {/* CTA */}
        <Section tone="light" spacing="md" className="border-t border-neutral-100">
          <Container>
            <MotionSection as="div">
              <h2 className="font-display font-bold text-2xl text-stone-deep mb-4">
                Vení a conocernos
              </h2>
              <p className="text-neutral-500 text-sm mb-6 max-w-sm">
                Agendá una visita y te mostramos el espacio.
              </p>
              <MagneticButton
                href="/contacto"
                className="inline-flex items-center gap-2 bg-copper text-white font-semibold text-base px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Agendá una visita
              </MagneticButton>
            </MotionSection>
          </Container>
        </Section>
      </main>
      <Footer />
      <CtaFloating />
    </>
  );
}

