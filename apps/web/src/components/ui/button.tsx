import { type VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold leading-none transition-all duration-150 ease-[cubic-bezier(0.25,1,0.5,1)] select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-copper disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-stone-deep text-stone-cream hover:bg-neutral-800 active:scale-[0.98]",
        copper:
          "bg-copper text-white hover:bg-copper-dark active:scale-[0.98]",
        outline:
          "border border-neutral-300 text-stone-deep hover:border-stone-deep hover:bg-neutral-50 active:scale-[0.98]",
        ghost:
          "text-stone-deep hover:bg-neutral-100 active:scale-[0.98]",
        dean:
          "bg-accent-dean text-white hover:opacity-90 active:scale-[0.98]",
        balcarce:
          "bg-accent-balcarce text-white hover:opacity-90 active:scale-[0.98]",
        "outline-white":
          "border border-white/40 text-white hover:bg-white/10 active:scale-[0.98]",
        link:
          "text-copper underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm:  "h-8  px-4  text-sm  rounded-md",
        md:  "h-10 px-5  text-base rounded-md",
        lg:  "h-12 px-6  text-base rounded-full",
        xl:  "h-14 px-8  text-lg  rounded-full",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
};

type ButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonProps | ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {(props as ButtonLinkProps).children}
      </Link>
    );
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
