import type { Metadata } from "next";
import Image from "next/image";
import { Check, X, ArrowRight, Home, Briefcase, HelpCircle, MessageCircle } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaFloating } from "@/components/layout/cta-floating";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MotionSection } from "@/components/motion/motion-section";
import { MotionStaggerGrid } from "@/components/motion/motion-stagger-grid";
import { SpringCard } from "@/components/motion/spring-card";
import { TocSidebar } from "@/components/motion/toc-sidebar";
import { planes } from "@/lib/content/planes";
import { convenios } from "@/lib/content/convenios";
import { photos } from "@/lib/photos";
import type { Plan } from "@/lib/content/planes";

export const metadata: Metadata = {
  title: "Planes y precios",
  description:
    "Bronce, Plata, Oro y planes personalizados. Con descuento para residentes del edificio y convenios profesionales.",
};

function PlanCard({ plan, featured }: { plan: Plan; featured?: boolean }) {
  return (
    <div
      className={`relative flex flex-col bg-white rounded-2xl overflow-hidden border h-full ${
        featured
          ? "border-copper shadow-[0_4px_12px_-2px_rgba(184,112,58,0.20)]"
          : "border-neutral-200"
      }`}
    >
      {featured && (
        <div className="absolute top-3 right-3 bg-copper text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
          Popular
        </div>
      )}

      <div className="h-1" style={{ backgroundColor: plan.color }} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          {/* Double-Bezel letter tile */}
          <div
            className="w-12 h-12 shrink-0 p-0.5 rounded-xl"
            style={{ backgroundColor: `${plan.color}30` }}
          >
            <div
              className="w-full h-full rounded-[10px] flex items-center justify-center font-display font-black text-xl"
              style={{ backgroundColor: plan.color, color: "white" }}
            >
              {plan.letra}
            </div>
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-stone-deep leading-tight">
              {plan.nombre}
            </h2>
            <p className="text-xs text-neutral-400 font-medium">
              {plan.espacio}
              {plan.personas > 1 && ` · hasta ${plan.personas} personas`}
            </p>
          </div>
        </div>

        <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-1">
          {plan.descripcion}
        </p>

        <ul className="space-y-2.5 mb-6">
          {plan.features.map((f) => (
            <li
              key={f.nombre}
              className={`flex items-start gap-2.5 text-sm ${
                f.incluido ? "text-neutral-700" : "text-neutral-300 line-through"
              }`}
            >
              {f.incluido ? (
                <Check size={14} className="text-success mt-0.5 shrink-0" />
              ) : (
                <X size={14} className="text-neutral-200 mt-0.5 shrink-0" />
              )}
              <span>
                {f.nombre}
                {f.detalle && f.incluido && (
                  <span className="text-xs text-neutral-400 ml-1">· {f.detalle}</span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <Button href="/contacto" variant={featured ? "copper" : "outline"} size="md" className="w-full">
          Consultar precio
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}

export default function PlanesPage() {
  const sortedPlanes = [
    planes.find((p) => p.id === "oro"),
    planes.find((p) => p.id === "plata"),
    planes.find((p) => p.id === "bronce"),
  ].filter(Boolean) as Plan[];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-stone-deep py-24 min-h-[55vh] flex items-center">
          <Container>
            <MotionSection as="div">
              <Eyebrow tone="light" className="mb-4">Membresías</Eyebrow>
              <Heading as="h1" size="xl" className="text-stone-cream mb-4">
                Planes que se ajustan a cómo trabajás.
              </Heading>
              <p className="text-neutral-300 text-lg max-w-lg leading-relaxed">
                Mes a mes. Sin letra chica.
              </p>
            </MotionSection>
          </Container>
        </section>

        {/* Content wrapper with TocSidebar */}
        <div className="relative">
          {/* TocSidebar — solo desktop, posicionado absoluto a la izquierda */}
          <div className="hidden xl:block absolute -left-48 top-0 h-full">
            <TocSidebar
              items={[
                { id: "planes-lista", label: "Planes" },
                { id: "descuentos", label: "Descuentos" },
                { id: "preguntas-frecuentes", label: "FAQ" },
              ]}
            />
          </div>

          {/* Planes bento grid */}
          <Section tone="cream" spacing="lg" id="planes-lista">
            <Container>
              <MotionStaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedPlanes.map((plan) => (
                  <SpringCard key={plan.id} className="h-full">
                    <PlanCard plan={plan} featured={plan.destacado} />
                  </SpringCard>
                ))}
              </MotionStaggerGrid>

              {/* Plan Personalizado */}
              <div className="mt-8">
                <a
                  href="https://wa.me/5493874636952?text=Hola%2C%20me%20interesa%20consultar%20sobre%20un%20plan%20personalizado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl bg-stone-deep p-8 border border-white/10 hover:border-copper/50 transition-colors duration-200 group"
                >
                  <div>
                    <span className="text-copper text-xs font-bold uppercase tracking-wider">Plan personalizado</span>
                    <h3 className="font-display font-bold text-2xl text-stone-cream mt-1 mb-2">
                      ¿Necesitás algo diferente?
                    </h3>
                    <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
                      Armamos un plan a medida para tu situación. Escribinos por WhatsApp y lo charlamos.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-5 py-3 rounded-xl group-hover:bg-[#22c55e] transition-colors">
                      <MessageCircle size={16} />
                      Consultar por WhatsApp
                    </span>
                  </div>
                </a>
              </div>
            </Container>
          </Section>

          {/* Descuentos */}
          <Section tone="light" spacing="md" className="border-t border-neutral-100" id="descuentos">
            <Container>

              {/* Heading editorial */}
              <div className="mb-10">
                <Eyebrow tone="copper" className="mb-3">Descuentos y convenios</Eyebrow>
                <Heading as="h2" size="md" className="text-stone-deep">
                  Hay descuentos que te corresponden
                </Heading>
                <p className="text-neutral-500 text-sm mt-2 max-w-md">
                  Si vivís en el edificio o tenés convenio profesional, escribinos antes de elegir tu plan.
                </p>
              </div>

              {/* 2 cards editoriales en columnas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1: Residentes */}
                <div className="group flex overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  {/* Foto lateral */}
                  <div className="hidden sm:block relative w-36 shrink-0">
                    <Image
                      src={photos.descuentoResidente.src}
                      alt={photos.descuentoResidente.alt}
                      fill
                      sizes="144px"
                      placeholder="blur"
                      blurDataURL={photos.descuentoResidente.blurDataURL}
                      className="object-cover"
                      style={{
                        filter: "grayscale(70%)",
                        objectPosition: photos.descuentoResidente.objectPosition,
                      }}
                    />
                    <div className="absolute inset-0 bg-copper/15 pointer-events-none" />
                  </div>
                  {/* Contenido */}
                  <div className="flex flex-col justify-center p-6 flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-copper/10 flex items-center justify-center shrink-0">
                        <Home size={16} className="text-copper" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-semibold text-stone-deep">Residentes del edificio</p>
                        <p className="text-sm text-neutral-500 mt-0.5 leading-relaxed">
                          Si vivís en el mismo edificio donde está el coworking, tenés 20% off en cualquier plan.
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-copper/10 text-copper text-sm font-bold w-fit">
                      −20% off
                    </span>
                  </div>
                </div>

                {/* Card 2: Convenios */}
                <div className="group flex overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  {/* Foto lateral (derecha) */}
                  <div className="hidden sm:block relative w-36 shrink-0">
                    <Image
                      src={photos.nosotrosHistoria1.src}
                      alt="Espacio profesional"
                      fill
                      sizes="144px"
                      placeholder="blur"
                      blurDataURL={photos.nosotrosHistoria1.blurDataURL}
                      className="object-cover"
                      style={{ filter: "grayscale(70%)" }}
                    />
                    <div className="absolute inset-0 bg-copper/15 pointer-events-none" />
                  </div>
                  {/* Contenido */}
                  <div className="flex flex-col justify-center p-6 flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-accent-dean/10 flex items-center justify-center shrink-0">
                        <Briefcase size={16} className="text-accent-dean" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-semibold text-stone-deep">Convenios profesionales</p>
                        <p className="text-sm text-neutral-500 mt-0.5 leading-relaxed">
                          Colegios y asociaciones con convenio tienen 25% off. Consultá si tu institución está incluida.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {convenios.slice(0, 3).map((c) => (
                        <Badge key={c.id} variant="dean" className="text-[11px]">{c.nombre}</Badge>
                      ))}
                      {convenios.length > 3 && (
                        <span className="text-xs text-neutral-400">+{convenios.length - 3} más</span>
                      )}
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-dean/10 text-accent-dean text-sm font-bold w-fit">
                      −25% off
                    </span>
                  </div>
                </div>

              </div>
            </Container>
          </Section>

          {/* FAQ */}
          <Section tone="cream" spacing="md" id="preguntas-frecuentes">
            <Container size="md">
              <Eyebrow tone="copper" className="mb-6">Preguntas frecuentes</Eyebrow>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-white border border-neutral-200 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-stone-deep text-sm list-none hover:bg-neutral-50 transition-colors">
                      <span className="flex items-center gap-2.5">
                        <HelpCircle size={14} className="text-copper shrink-0" strokeWidth={1.5} />
                        {faq.q}
                      </span>
                      <span className="text-neutral-400 group-open:rotate-180 transition-transform text-lg leading-none ml-4 shrink-0">
                        ↓
                      </span>
                    </summary>
                    <div className="px-6 pb-5 pt-1">
                      <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </Container>
          </Section>
        </div>
      </main>
      <Footer />
      <CtaFloating />
    </>
  );
}

const faqs = [
  {
    q: "¿Cuánto tiempo mínimo tengo que quedarme?",
    a: "No hay contrato mínimo. Podés empezar mes a mes y decidir si continuás. También hay opciones con descuento para quienes pagan de forma anual.",
  },
  {
    q: "¿Cuántas horas de sala incluye cada plan?",
    a: "Bronce incluye 2 hs/mes, Plata 4 hs/mes y Oro 8 hs/mes. Las horas son por membresía individual y no se acumulan de mes a mes.",
  },
  {
    q: "¿Puedo usar cualquiera de las dos sedes con mi membresía?",
    a: "Los planes básicos son para una sede. Si necesitás acceso a las dos, consultanos, tenemos opciones multi-sede.",
  },
  {
    q: "¿Los pagos se hacen del 1 al 5?",
    a: "Sí, los pagos se realizan del 1 al 5 de cada mes por transferencia bancaria. Te enviamos el CBU y podés subir el comprobante en la plataforma.",
  },
  {
    q: "¿Puedo agendar una visita antes de decidir?",
    a: "Escribinos por WhatsApp o completá el formulario de contacto y coordinamos una visita sin compromiso.",
  },
];
