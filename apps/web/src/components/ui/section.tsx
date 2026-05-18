import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: "light" | "cream" | "dark" | "mineral" | "dean" | "balcarce";
  spacing?: "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "article";
}

const toneClasses = {
  light:    "bg-white",
  cream:    "bg-stone-cream",
  dark:     "bg-stone-deep text-stone-cream",
  mineral:  "bg-neutral-900 text-stone-cream",
  dean:     "bg-accent-dean/10",
  balcarce: "bg-accent-balcarce/10",
} as const;

const spacingClasses = {
  sm:  "py-10 md:py-12",
  md:  "py-14 md:py-20",
  lg:  "py-20 md:py-28",
  xl:  "py-28 md:py-36",
} as const;

export function Section({
  className,
  tone = "cream",
  spacing = "lg",
  as: Tag = "section",
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(toneClasses[tone], spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
