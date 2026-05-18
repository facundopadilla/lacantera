import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeClasses = {
  sm:   "max-w-3xl",
  md:   "max-w-5xl",
  lg:   "max-w-6xl",
  xl:   "max-w-7xl",
  full: "max-w-none",
} as const;

export function Container({ className, size = "xl", children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        sizeClasses[size],
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
