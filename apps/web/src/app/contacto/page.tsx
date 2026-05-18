import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaFloating } from "@/components/layout/cta-floating";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MotionSection } from "@/components/motion/motion-section";
import { MotionStaggerGrid } from "@/components/motion/motion-stagger-grid";
import { ContactForm } from "./contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con La Cantera Workspace. Deán Funes 1380 y Balcarce 735, Salta. WhatsApp, email y formulario de contacto.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-stone-deep py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
              <MotionSection as="div">
                <Eyebrow tone="light" className="mb-4">Contacto</Eyebrow>
                <Heading as="h1" size="xl" className="text-stone-cream mb-4">
                  Escribinos, coordinamos
                  <br />
                  <span className="text-copper">una visita.</span>
                </Heading>
                <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
                  Si querés conocer el espacio, escribinos por WhatsApp o completá el formulario.
                </p>
              </MotionSection>

              {/* Badge asimétrico */}
              <MotionSection as="div" delay={0.3} className="hidden lg:block">
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="inline-flex items-center gap-2 text-sm text-stone-cream font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Respuesta en menos de 24hs
                  </span>
                  <p className="text-xs text-neutral-500">Lunes a viernes, 9:00 – 20:00 hs</p>
                </div>
              </MotionSection>
            </div>
          </Container>
        </section>

        <Section tone="cream" spacing="lg">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Formulario */}
              <div className="lg:col-span-3">
                <h2 className="font-display font-bold text-2xl text-stone-deep mb-6">
                  Mandanos un mensaje
                </h2>
                <ContactForm />
              </div>

              {/* Info de contacto */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                <MotionStaggerGrid className="flex flex-col gap-8">
                  {sedes.map((sede) => (
                    <div key={sede.nombre}>
                      <h3
                        className="font-semibold text-sm uppercase tracking-widest mb-3"
                        style={{ color: sede.color }}
                      >
                        {sede.label}
                      </h3>
                      <address className="not-italic flex flex-col gap-2.5">
                        <div className="flex items-start gap-2.5 text-sm text-neutral-600">
                          <MapPin size={14} className="text-copper mt-0.5 shrink-0" />
                          {sede.direccion}
                        </div>
                        <a
                          href={`tel:+54${sede.telefono.replace(/\s/g, "")}`}
                          className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-stone-deep"
                        >
                          <Phone size={14} className="text-copper shrink-0" />
                          {sede.telefono}
                        </a>
                        <a
                          href={`https://wa.me/${sede.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 text-sm text-copper font-medium hover:text-amber-700"
                        >
                          WhatsApp: {sede.whatsappLabel}
                        </a>
                      </address>
                    </div>
                  ))}

                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-widest text-neutral-400 mb-3">
                      Email comercial
                    </h3>
                    <a
                      href="mailto:lacantera1380@gmail.com"
                      className="flex items-center gap-2.5 text-sm text-copper font-medium hover:text-amber-700"
                    >
                      <Mail size={14} />
                      lacantera1380@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-widest text-neutral-400 mb-3">
                      Horarios
                    </h3>
                    <div className="flex items-start gap-2.5 text-sm text-neutral-500">
                      <Clock size={14} className="text-copper mt-0.5 shrink-0" />
                      <div>
                        <p>Lunes a viernes, 9:00 – 20:00 hs</p>
                        <p className="text-neutral-400 text-xs mt-0.5">
                          Acceso con huella digital fuera de horario
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionStaggerGrid>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
      <CtaFloating />
    </>
  );
}

const sedes = [
  {
    label: "Deán Funes",
    color: "#7A8C5C",
    nombre: "La Cantera Workspace",
    direccion: "Deán Funes 1380, Salta, Argentina",
    telefono: "387 463-6952",
    whatsapp: "5493874636952",
    whatsappLabel: "+54 9 387 463-6952",
  },
  {
    label: "Balcarce",
    color: "#9B4A3F",
    nombre: "La Cantera Office",
    direccion: "Balcarce 735, Salta, Argentina",
    telefono: "387 228-7720",
    whatsapp: "5493872287720",
    whatsappLabel: "+54 9 387 228-7720",
  },
];
