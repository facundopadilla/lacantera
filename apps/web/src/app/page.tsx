import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaFloating } from "@/components/layout/cta-floating";
import { HeroSection } from "@/components/sections/hero-section";
import { SedesSwitcher } from "@/components/sections/sedes-switcher";
import { AmenitiesGrid } from "@/components/sections/amenities-grid";
import { PlanesPreview } from "@/components/sections/planes-preview";
import { ConveniosBand } from "@/components/sections/convenios-band";
import { EventosTeaser } from "@/components/sections/eventos-teaser";
import { CtaFinal } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SedesSwitcher />
        <AmenitiesGrid />
        <PlanesPreview />
        <ConveniosBand />
        <EventosTeaser />
        <CtaFinal />
      </main>
      <Footer />
      <CtaFloating />
    </>
  );
}
