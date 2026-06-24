import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MotionSection } from "@/components/motion/motion-section";

export function EventosTeaser() {
  return (
    <Section tone="light" spacing="md" className="border-t border-neutral-100">
      <Container>
        <MotionSection as="div" className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="shrink-0 p-1 rounded-2xl bg-neutral-100/80 border border-neutral-200">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <CalendarDays size={20} className="text-copper" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <Eyebrow className="mb-2">Espacios para eventos</Eyebrow>
              <h2 className="font-display font-bold text-2xl text-stone-deep mb-2 mt-1">
                Eventos en La Cantera
              </h2>
              <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
                Anfiteatro para 45 en Balcarce. Salón para 40 en Deán Funes.
              </p>
            </div>
          </div>
          <Button href="/eventos" variant="outline" size="md" className="shrink-0 self-center md:self-auto">
            Ver espacios para eventos
            <ArrowRight size={16} />
          </Button>
        </MotionSection>
      </Container>
    </Section>
  );
}
