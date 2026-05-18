"use client";
import { useRef } from "react";
import { useScroll, useTransform, useReducedMotion, motion } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  speed?: number;
  blurDataURL?: string;
}

export function ParallaxImage({
  src,
  alt,
  width,
  height,
  className,
  speed = 50,
  blurDataURL,
}: ParallaxImageProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  if (reduced) {
    return (
      <div ref={ref} className={"relative overflow-hidden " + (className ?? "")}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div ref={ref} className={"relative overflow-hidden " + (className ?? "")}>
      <motion.div style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
