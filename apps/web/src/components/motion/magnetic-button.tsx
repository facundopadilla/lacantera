"use client";

import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  href,
  className,
  children,
  target,
  rel,
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const translateX = useTransform(x, [-1, 1], [-6, 6]);
  const translateY = useTransform(y, [-1, 1], [-4, 4]);

  function handlePointerMove(e: React.PointerEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) / (rect.width / 2));
    y.set((e.clientY - cy) / (rect.height / 2));
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 font-semibold leading-none select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-copper",
    "active:scale-[0.97] transition-[background-color,box-shadow] duration-150",
    className
  );

  return (
    <motion.a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      target={target}
      rel={rel}
      style={reduced ? undefined : { x: translateX, y: translateY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={baseClasses}
    >
      {children}
    </motion.a>
  );
}
