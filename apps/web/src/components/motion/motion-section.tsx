"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes } from "react";

const motionTags = {
  section: motion.section,
  div:     motion.div,
  article: motion.article,
} as const;

interface MotionSectionProps extends HTMLAttributes<HTMLElement> {
  as?: keyof typeof motionTags;
  delay?: number;
}

export function MotionSection({
  as: tag = "section",
  delay = 0,
  children,
  className,
  ...props
}: MotionSectionProps) {
  const reduced = useReducedMotion();
  const MotionTag = motionTags[tag];

  return (
    <MotionTag
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      }}
      className={className}
      {...(props as object)}
    >
      {children}
    </MotionTag>
  );
}
