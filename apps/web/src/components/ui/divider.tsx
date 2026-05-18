import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "plain" | "vein" | "dotted";
  tone?: "light" | "dark";
}

export function Divider({ variant = "plain", tone = "light", className, ...props }: DividerProps) {
  if (variant === "vein") {
    return (
      <div className={cn("flex items-center gap-4", className)} {...props}>
        <div className={cn("flex-1 h-px", tone === "dark" ? "bg-neutral-700" : "bg-neutral-200")} />
        <div className={cn("w-1.5 h-1.5 rounded-full rotate-45", tone === "dark" ? "bg-copper/50" : "bg-copper/40")} />
        <div className={cn("flex-1 h-px", tone === "dark" ? "bg-neutral-700" : "bg-neutral-200")} />
      </div>
    );
  }

  if (variant === "dotted") {
    return (
      <div
        className={cn("h-px", tone === "dark" ? "border-neutral-700" : "border-neutral-200", className)}
        style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "8px 1px" }}
        {...props}
      />
    );
  }

  return (
    <hr
      className={cn(
        "border-0 h-px",
        tone === "dark" ? "bg-neutral-700" : "bg-neutral-200",
        className
      )}
      {...(props as HTMLAttributes<HTMLHRElement>)}
    />
  );
}
