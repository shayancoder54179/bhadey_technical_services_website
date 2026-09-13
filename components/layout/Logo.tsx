import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "dark" = for light backgrounds, "light" = for dark backgrounds */
  tone?: "dark" | "light";
  /** Eagle height in px at desktop; the wordmark scales with it */
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const SIZES = {
  sm: { img: "h-6 md:h-7", name: "text-lg md:text-xl", sub: "text-[0.5rem] tracking-[0.12em]" },
  md: { img: "h-8 md:h-9", name: "text-2xl md:text-[1.75rem]", sub: "text-[0.5625rem] tracking-[0.15em]" },
  lg: { img: "h-10 md:h-12", name: "text-3xl md:text-4xl", sub: "text-[0.625rem] tracking-[0.1em]" },
} as const;

/**
 * The eagle is the mark; the company name is real text (Barlow Condensed), not
 * part of the bitmap — so it stays crisp at every size and can recolor per surface.
 * The eagle PNG is background-free, so it needs no white plate on any surface.
 */
export function Logo({
  tone = "dark",
  size = "md",
  className,
  priority = false,
}: LogoProps) {
  const s = SIZES[size];

  return (
    <span className={cn("flex min-w-0 max-w-full items-center gap-2.5 md:gap-3", className)}>
      <Image
        src="/images/bts-eagle.png"
        alt=""
        width={839}
        height={257}
        priority={priority}
        aria-hidden
        className={cn(s.img, "w-auto object-contain")}
      />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-display font-bold uppercase leading-[0.85] tracking-[-0.01em]",
            s.name,
            tone === "dark" ? "text-graphite" : "text-white"
          )}
        >
          Bhadeya
        </span>
        <span
          className={cn(
            "mt-1 whitespace-nowrap font-mono font-medium uppercase leading-none",
            s.sub,
            tone === "dark" ? "text-slate-soft" : "text-white/60"
          )}
        >
          Technical Services L.L.C
        </span>
      </span>
    </span>
  );
}
