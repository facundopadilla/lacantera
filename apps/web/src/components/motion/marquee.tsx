"use client";
import { useAnimation, useReducedMotion, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

interface MarqueeItem {
  label: string;
  icon?: ReactNode;
}

interface MarqueeProps {
  items: MarqueeItem[];
  speed?: number;
  className?: string;
  variant?: "light" | "dark";
}

export function Marquee({ items, speed = 40, className, variant = "light" }: MarqueeProps) {
  const reduced = useReducedMotion();
  const controlsForward = useAnimation();
  const controlsReverse = useAnimation();

  const doubled = [...items, ...items];

  useEffect(() => {
    if (reduced) return;

    controlsForward.start({
      x: ["0%", "-50%"],
      transition: { duration: speed, repeat: Infinity, ease: "linear" },
    });
    controlsReverse.start({
      x: ["-50%", "0%"],
      transition: { duration: speed, repeat: Infinity, ease: "linear" },
    });
  }, [reduced, speed, controlsForward, controlsReverse]);

  if (reduced) {
    return (
      <div className={className}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4">
          {items.map((item, i) => (
            <ItemChip key={i} item={item} variant={variant} />
          ))}
        </div>
      </div>
    );
  }

  const handleMouseEnter = () => {
    controlsForward.stop();
    controlsReverse.stop();
  };

  const handleMouseLeave = () => {
    controlsForward.start({
      x: ["0%", "-50%"],
      transition: { duration: speed, repeat: Infinity, ease: "linear" },
    });
    controlsReverse.start({
      x: ["-50%", "0%"],
      transition: { duration: speed, repeat: Infinity, ease: "linear" },
    });
  };

  return (
    <div
      className={"overflow-hidden w-full " + (className ?? "")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col gap-2 py-2">
        <motion.div animate={controlsForward} className="flex w-max">
          {doubled.map((item, i) => (
            <ItemChip key={i} item={item} variant={variant} />
          ))}
        </motion.div>
        <motion.div animate={controlsReverse} className="flex w-max">
          {doubled.map((item, i) => (
            <ItemChip key={i} item={item} variant={variant} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ItemChip({ item, variant }: { item: MarqueeItem; variant: "light" | "dark" }) {
  const cls =
    variant === "dark"
      ? "border-white/15 bg-white/10 text-stone-cream/80"
      : "border-neutral-200 bg-white/80 text-neutral-600";
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium shrink-0 mx-2 ${cls}`}>
      {item.icon}
      {item.label}
    </div>
  );
}
