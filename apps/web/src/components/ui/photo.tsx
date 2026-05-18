import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoVariant = "desaturated" | "editorial" | "vignette";
type PhotoAspect = "16/9" | "4/3" | "3/4" | "1/1";

interface PhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant?: PhotoVariant;
  aspect?: PhotoAspect;
  sizes?: string;
  priority?: boolean;
  className?: string;
  blurDataURL?: string;
}

const aspectClasses: Record<PhotoAspect, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
};

export function Photo({
  src,
  alt,
  width,
  height,
  variant = "editorial",
  aspect,
  sizes = "100vw",
  priority = false,
  className,
  blurDataURL,
}: PhotoProps) {
  const hasAspect = aspect !== undefined;

  const imageEl = hasAspect ? (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      className="object-cover"
      style={variant === "desaturated" ? { filter: "grayscale(70%)" } : undefined}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      className="object-cover"
      style={variant === "desaturated" ? { filter: "grayscale(70%)" } : undefined}
    />
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        hasAspect && aspectClasses[aspect!],
        className
      )}
    >
      {imageEl}
      {variant === "desaturated" && (
        <div className="absolute inset-0 bg-copper/15" />
      )}
      {variant === "vignette" && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(42,37,32,0.7) 100%)",
          }}
        />
      )}
    </div>
  );
}
