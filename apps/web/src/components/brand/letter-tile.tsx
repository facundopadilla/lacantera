import { cn } from "@/lib/utils";

const LETTER_COLORS: Record<string, string> = {
  A: "#B8703A", G: "#B8703A", M: "#B8703A", S: "#B8703A",
  B: "#7A8C5C", H: "#7A8C5C", N: "#7A8C5C", T: "#7A8C5C",
  C: "#9B4A3F", I: "#9B4A3F", O: "#9B4A3F",
  D: "#C99852", J: "#C99852", P: "#C99852",
  E: "#4A6A78", K: "#4A6A78", Q: "#4A6A78",
  F: "#7C5E8A", L: "#7C5E8A", R: "#7C5E8A",
};

interface LetterTileProps {
  letter: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabel?: boolean;
}

const sizeClasses = {
  sm:  "w-8 h-8 text-sm",
  md:  "w-11 h-11 text-lg",
  lg:  "w-14 h-14 text-2xl",
} as const;

export function LetterTile({ letter, size = "md", className, showLabel = false }: LetterTileProps) {
  const char = letter.toUpperCase()[0];
  const color = LETTER_COLORS[char] ?? "#9C9081";

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={cn(
          "rounded-lg flex items-center justify-center font-display font-black text-white",
          sizeClasses[size],
          className
        )}
        style={{ backgroundColor: color }}
        aria-label={`Oficina ${letter}`}
      >
        {letter.toUpperCase()}
      </div>
      {showLabel && (
        <span className="text-xs text-neutral-400 font-medium">
          {letter}
        </span>
      )}
    </div>
  );
}

export function LetterGrid({ className }: { className?: string }) {
  const letters = "ABCDEFGHIJKLMNOPQRST".split("");
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {letters.map((l) => (
        <LetterTile key={l} letter={l} size="md" />
      ))}
    </div>
  );
}
