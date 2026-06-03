"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.55, ease },
  },
};


const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.09,
      delayChildren: delay,
    },
  }),
};

type BlurRevealStroke = {
  color?: string;
  width?: string;
  fill?: string;
};

type BlurRevealLine = {
  text: string;
  className?: string;
  stroke?: BlurRevealStroke;
};

interface BlurRevealHeadlineProps {
  lines: BlurRevealLine[];
  className?: string;
  style?: CSSProperties;
  delay?: number;
  wordClassName?: Record<string, string>;
}

// Contorno EXTERIOR: en vez de -webkit-text-stroke (que es centrado y, con un
// fill por background-clip, queda pintado ENCIMA del cobre → se ve interior),
// usamos text-shadow multidireccional. La sombra se renderiza detrás del glifo,
// así que solo asoma por afuera. Escala en em → grosor parejo con el clamp.
const outlineShadow = (color: string, widthEm: number): string => {
  const o = `${widthEm}em`;
  const n = `-${widthEm}em`;
  const d = `${(widthEm * 0.72).toFixed(4)}em`;
  const nd = `-${(widthEm * 0.72).toFixed(4)}em`;
  return [
    `${o} 0 0 ${color}`,
    `${n} 0 0 ${color}`,
    `0 ${o} 0 ${color}`,
    `0 ${n} 0 ${color}`,
    `${d} ${d} 0 ${color}`,
    `${nd} ${d} 0 ${color}`,
    `${d} ${nd} 0 ${color}`,
    `${nd} ${nd} 0 ${color}`,
  ].join(", ");
};

const OUTLINE_WIDTH_EM = 0.014;

export function BlurRevealHeadline({
  lines,
  className,
  style,
  delay = 0.3,
  wordClassName,
}: BlurRevealHeadlineProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <h1 className={className} style={style}>
        {lines.map((line, i) => (
          <span key={i} className={line.className}>
            {i > 0 && <br />}
            {line.text.split(" ").map((word, wi) =>
              line.stroke ? (
                <span
                  key={wi}
                  className={cn("inline-block mr-[0.28em]", wordClassName?.[word])}
                  style={{
                    color: line.stroke.fill,
                    ...(line.stroke.color
                      ? {
                          textShadow: outlineShadow(
                            line.stroke.color,
                            line.stroke.width ? parseFloat(line.stroke.width) : OUTLINE_WIDTH_EM,
                          ),
                        }
                      : {}),
                  }}
                >
                  {word}
                </span>
              ) : (
                <span key={wi} className={cn("inline-block mr-[0.28em]", wordClassName?.[word])}>
                  {word}
                </span>
              ),
            )}
          </span>
        ))}
      </h1>
    );
  }

  let wordIndex = 0;

  return (
    <motion.h1
      className={className}
      style={style}
      variants={containerVariants}
      custom={delay}
      initial="hidden"
      animate="visible"
    >
      {lines.flatMap((line, lineIndex) => {
        const nodes: ReactNode[] = [];

        if (lineIndex > 0) {
          nodes.push(<br key={`br-${lineIndex}`} />);
        }

        for (const word of line.text.split(" ")) {
          const key = wordIndex++;

          if (line.stroke) {
            nodes.push(
              <FillRevealWord
                key={key}
                word={word}
                stroke={line.stroke}
                className={wordClassName?.[word]}
              />,
            );
          } else {
            nodes.push(
              <motion.span
                key={key}
                variants={wordVariants}
                className={cn("inline-block mr-[0.28em]", line.className, wordClassName?.[word])}
                style={{ willChange: "filter, opacity, transform" }}
              >
                {word}
              </motion.span>,
            );
          }
        }

        return nodes;
      })}
    </motion.h1>
  );
}

function FillRevealWord({
  word,
  stroke,
  className,
}: {
  word: string;
  stroke: BlurRevealStroke;
  className?: string;
}) {
  return (
    <motion.span
      variants={wordVariants}
      className={cn("inline-block mr-[0.28em] whitespace-nowrap", className)}
      style={{
        color: stroke.fill ?? "#B8703A",
        ...(stroke.color
          ? {
              textShadow: outlineShadow(
                stroke.color,
                stroke.width ? parseFloat(stroke.width) : OUTLINE_WIDTH_EM,
              ),
            }
          : {}),
        willChange: "filter, opacity, transform",
      }}
    >
      {word}
    </motion.span>
  );
}
