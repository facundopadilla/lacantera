import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

const sizes = {
  sm: { width: 96,  height: 41  },
  md: { width: 120, height: 52  },
  lg: { width: 152, height: 66  },
} as const;

export function Logo({ variant = "color", size = "md", href = "/", className }: LogoProps) {
  const { width, height } = sizes[size];
  const src = variant === "white" ? "/logo/logo-blanco.png" : "/logo/logo-original.png";

  const img = (
    <Image
      src={src}
      alt="La Cantera Workspace"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      style={{ width: "auto", height: `${height}px` }}
      priority
    />
  );

  if (href) {
    return <Link href={href} className="inline-block shrink-0">{img}</Link>;
  }

  return img;
}
