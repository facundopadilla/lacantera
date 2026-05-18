import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { convenios } from "@/lib/content/convenios";

export function ConveniosBand() {
  return (
    <section className="bg-white border-y border-neutral-200 py-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="shrink-0 text-center md:text-left">
            <Eyebrow className="mb-2">Convenios profesionales</Eyebrow>
            <p className="text-sm text-neutral-500 mt-2">
              25% de descuento para colegiados
            </p>
          </div>

          <div className="w-px h-8 bg-neutral-200 hidden md:block" />

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
            {convenios.map((convenio) => {
              const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[convenio.icon];
              return (
                <div
                  key={convenio.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 transition-all duration-200 hover:border-copper/40 hover:bg-copper/5"
                >
                  {IconComponent && (
                    <IconComponent size={13} className="text-copper" strokeWidth={1.5} />
                  )}
                  <span className="text-sm font-medium text-neutral-700">
                    {convenio.nombre}
                  </span>
                  <span className="text-xs font-bold text-copper ml-1">
                    −{Math.round(convenio.descuento * 100)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
