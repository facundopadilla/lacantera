"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { PhotoEntry } from "@/lib/photos";
import { cn } from "@/lib/utils";

type Slide = Pick<PhotoEntry, "src" | "alt" | "width" | "height" | "objectPosition" | "blurDataURL">;

const AUTOPLAY_MS = 4500;

interface PhotoCarouselProps {
  slides: Slide[];
  sizes?: string;
  className?: string;
  aspectClassName?: string;
  autoplayMs?: number;
}

export function PhotoCarousel({
  slides,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className,
  aspectClassName = "aspect-[4/3]",
  autoplayMs = AUTOPLAY_MS,
}: PhotoCarouselProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (reduced || count <= 1 || paused) return;

    const tick = () => {
      if (document.hidden) return;
      go(1);
    };

    const id = window.setInterval(tick, autoplayMs);
    return () => window.clearInterval(id);
  }, [reduced, count, paused, autoplayMs, go]);

  if (count === 0) return null;

  const slide = slides[index];

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl group", aspectClassName, className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galería de fotos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={reduced ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduced ? undefined : { opacity: 0, x: -24 }}
          transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes={sizes}
            placeholder={slide.blurDataURL ? "blur" : "empty"}
            blurDataURL={slide.blurDataURL}
            className="object-cover"
            style={{ objectPosition: slide.objectPosition ?? "center center" }}
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-stone-deep/80 text-stone-cream border border-white/15 opacity-90 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 hover:bg-stone-deep"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-stone-deep/80 text-stone-cream border border-white/15 opacity-90 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 hover:bg-stone-deep"
            aria-label="Foto siguiente"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>

          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2 py-1 rounded-full bg-stone-deep/60 backdrop-blur-sm"
            aria-hidden
          >
            {slides.map((s, i) => (
              <span
                key={s.src}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-5 bg-stone-cream" : "w-1.5 bg-stone-cream/40",
                )}
              />
            ))}
          </div>

          <p className="sr-only" aria-live="polite">
            Imagen {index + 1} de {count}
          </p>
        </>
      )}
    </div>
  );
}
