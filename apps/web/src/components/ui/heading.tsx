import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "display";
  balance?: boolean;
}

const sizeClasses = {
  sm:      "text-2xl md:text-3xl",
  md:      "text-3xl md:text-4xl",
  lg:      "text-4xl md:text-5xl",
  xl:      "text-5xl md:text-6xl",
  "2xl":   "text-6xl md:text-7xl",
  display: "text-6xl md:text-7xl lg:text-8xl",
} as const;

export function Heading({
  as: Tag = "h2",
  size = "lg",
  balance = true,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display tracking-tight leading-[1.05]",
        sizeClasses[size],
        balance && "text-balance",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
