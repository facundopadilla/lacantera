"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes } from "react";

interface SpringCardProps extends HTMLAttributes<HTMLDivElement> {
  liftY?: number;
}

export function SpringCard({
  children,
  className,
  liftY = 4,
  ...props
}: SpringCardProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -liftY }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      {...(props as object)}
    >
      {children}
    </motion.div>
  );
}
