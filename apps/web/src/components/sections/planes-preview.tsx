import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SpringCard } from "@/components/motion/spring-card";
import { MotionSection } from "@/components/motion/motion-section";
import { MotionStaggerGrid } from "@/components/motion/motion-stagger-grid";
import { planes } from "@/lib/content/planes";

const planesPreview = [
  planes.find((p) => p.id === "oro")!,
  planes.find((p) => p.id === "plata")!,
  planes.find((p) => p.id === "bronce")!,
];

export function PlanesPreview() {
  return (
    <Section tone="cream" spacing="lg">
      <Container>
        <MotionSection as="div" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow className="mb-4">Membresías</Eyebrow>
            <Heading as="h2" size="lg" className="text-stone-deep">
              ¡Hay un plan para vos!
            </Heading>
          </div>
          <Button href="/planes" variant="outline" size="md">
            Ver todos los planes
            <ArrowRight size={16} />
          </Button>
        </MotionSection>

        <MotionStaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {planesPreview.map((plan) => (
            <SpringCard key={plan.id} className="h-full">
              <PlanCard plan={plan} />
            </SpringCard>
          ))}
        </MotionStaggerGrid>
      </Container>
    </Section>
  );
}

function PlanCard({ plan }: { plan: (typeof planes)[number] }) {
  const topFeatures = plan.features.filter((f) => f.incluido).slice(0, 4);

  return (
    <div
      className={`relative flex flex-col bg-white rounded-2xl overflow-hidden border h-full transition-colors duration-200 ${
        plan.destacado
          ? "border-copper shadow-[0_4px_12px_-2px_rgba(184,112,58,0.20)] ring-2 ring-copper/20"
          : "border-neutral-200"
      }`}
    >
      {plan.destacado && (
        <div className="absolute top-4 right-4 bg-copper text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10">
          Más elegido
        </div>
      )}

      <div className="h-1" style={{ backgroundColor: plan.color }} />

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="shrink-0 p-0.5 rounded-xl"
            style={{ backgroundColor: `${plan.color}30` }}
          >
            <div
              className="flex items-center justify-center w-10 h-10 text-lg font-display font-black text-white rounded-[10px]"
              style={{ backgroundColor: plan.color }}
            >
              {plan.letra}
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-stone-deep leading-tight">
              {plan.nombre}
            </h3>
            <p className="text-xs text-neutral-400 font-medium">
              {plan.espacio}
              {plan.personas > 1 && ` · hasta ${plan.personas} personas`}
            </p>
          </div>
        </div>

        <p className="text-sm text-neutral-500 leading-relaxed mb-5">
          {plan.descripcion}
        </p>

        <ul className="space-y-2 mb-6">
          {topFeatures.map((f) => (
            <li key={f.nombre} className="flex items-start gap-2 text-sm text-neutral-600">
              <Check size={14} className="text-success mt-0.5 shrink-0" strokeWidth={2.5} />
              {f.nombre}
            </li>
          ))}
        </ul>

        <Button href="/contacto" variant={plan.destacado ? "copper" : "outline"} size="sm" className="w-full mt-auto">
          Consultar precio
        </Button>
      </div>
    </div>
  );
}
