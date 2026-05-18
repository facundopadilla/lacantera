import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  tone?: "copper" | "dean" | "balcarce" | "light";
}

const toneMap = {
  copper:   "bg-copper/15 border border-copper/25 text-copper",
  dean:     "bg-accent-dean/15 border border-accent-dean/25 text-accent-dean",
  balcarce: "bg-accent-balcarce/15 border border-accent-balcarce/25 text-accent-balcarce",
  light:    "bg-white/10 border border-white/15 text-neutral-300",
} as const;

export function Eyebrow({
  className,
  tone = "copper",
  children,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1",
        "text-[10px] uppercase tracking-[0.18em] font-semibold",
        toneMap[tone],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
