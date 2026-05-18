import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MotionSection } from "@/components/motion/motion-section";

export function CtaFinal() {
  return (
    <section className="relative bg-stone-deep py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(ellipse at 80% 50%, #B8703A 0%, transparent 60%)`,
        }}
      />

      <Container className="relative z-10">
        <MotionSection as="div">
          <Eyebrow tone="light" className="mb-6">Vení a verlo</Eyebrow>
          <h2
            className="font-display font-black text-stone-cream leading-[0.92] tracking-tight mb-6 max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            Conocé el espacio antes de decidir.
          </h2>
          <p className="text-neutral-300 text-lg max-w-md leading-relaxed mb-10">
            Vení a conocer el espacio. Solo escribinos.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              href="/contacto"
              className="bg-copper text-white hover:bg-copper-dark h-12 px-6 rounded-full font-semibold text-base"
            >
              Agendá una visita
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0 -mr-1.5">
                <ArrowRight size={14} />
              </span>
            </MagneticButton>
            <Button href="/planes" size="lg" variant="outline-white">
              Ver planes y precios
            </Button>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
