import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "stone" | "copper" | "dean" | "balcarce" | "success" | "warning" | "danger";
}

const variantClasses = {
  stone:    "bg-neutral-100 text-neutral-700",
  copper:   "bg-amber-50 text-amber-800",
  dean:     "bg-green-50 text-green-800",
  balcarce: "bg-red-50 text-red-900",
  success:  "bg-green-50 text-green-800",
  warning:  "bg-amber-50 text-amber-800",
  danger:   "bg-red-50 text-red-900",
} as const;

export function Badge({ variant = "stone", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
