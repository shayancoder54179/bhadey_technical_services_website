"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, animate } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Ruler,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STATS = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    Icon: Briefcase,
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    Icon: Calendar,
  },
  {
    value: 200,
    suffix: "cm",
    label: "Max Scanning Depth",
    Icon: Ruler,
  },
  {
    value: 6,
    suffix: "+",
    label: "Cities Served",
    Icon: MapPin,
  },
] as const;

function AnimatedNumber({
  target,
  inView,
  suffix,
  duration = 1.5,
}: {
  target: number;
  inView: boolean;
  suffix: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-80px 0px -80px 0px",
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative py-14 md:py-16 lg:py-20 overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Background: navy with subtle pattern */}
      <div
        className="absolute inset-0 bg-[#0A2540]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 102, 255, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255, 107, 0, 0.06) 0%, transparent 30%),
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 32px 32px, 32px 32px",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0",
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {STATS.map((stat) => {
            const Icon = stat.Icon as LucideIcon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: STATS.indexOf(stat) * 0.1,
                }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Glow behind number */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  aria-hidden
                >
                  <div
                    className="w-24 h-24 rounded-full opacity-20 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,107,0,0.4) 0%, transparent 70%)",
                    }}
                  />
                </div>

                {/* Icon with accent */}
                <div
                  className={cn(
                    "inline-flex size-12 rounded-full items-center justify-center mb-4",
                    "bg-[var(--color-accent-orange)]/20 text-[var(--color-accent-orange)]",
                    "border border-[var(--color-accent-orange)]/30"
                  )}
                  aria-hidden
                >
                  <Icon className="size-6" />
                </div>

                {/* Number with gradient / bold white */}
                <div className="relative">
                  <motion.span
                    className="block text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                    style={{
                      textShadow:
                        "0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(0,102,255,0.1)",
                    }}
                  >
                    <AnimatedNumber
                      target={stat.value}
                      inView={inView}
                      suffix={stat.suffix}
                    />
                  </motion.span>
                </div>

                <p className="mt-2 text-sm sm:text-base font-medium text-white/85">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
