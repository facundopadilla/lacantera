"use client";

import React, { type ReactNode } from "react";
import * as Icons from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MotionSection } from "@/components/motion/motion-section";
import { Marquee } from "@/components/motion/marquee";
import { getSharedAmenities } from "@/lib/content/amenities";

export function AmenitiesGrid() {
  const amenities = getSharedAmenities();

  const marqueeItems = amenities.map((a) => {
    const Icon = (Icons as unknown as Record<string, React.ElementType>)[a.icon] as
      | React.ElementType
      | undefined;
    return {
      label: a.nombre,
      icon: Icon ? <Icon size={14} strokeWidth={1.5} /> : undefined,
    } satisfies { label: string; icon?: ReactNode };
  });

  return (
    <Section tone="dark" spacing="lg">
      <Container>
        <MotionSection as="div" className="mb-12">
          <Eyebrow tone="light" className="mb-4">Incluido en todas las membresías</Eyebrow>
          <Heading as="h2" size="lg" className="text-stone-cream">
            Todo lo que necesitás,
            <br />
            ya está acá.
          </Heading>
        </MotionSection>

        <Marquee items={marqueeItems} variant="dark" />
      </Container>
    </Section>
  );
}
