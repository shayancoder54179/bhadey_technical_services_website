"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, animate } from "framer-motion";

const STATS = [
  { value: 7, suffix: "+", unit: "years", label: "Operating across the UAE" },
  { value: 10, suffix: " m", unit: "max depth", label: "Ground scanning, GS8000" },
  { value: 6, suffix: "+", unit: "emirates", label: "Covered by mobile teams" },
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
    <span className="font-mono tabular-nums">
      {display}
      <span className="text-safety">{suffix}</span>
    </span>
  );
}

export function StatsBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px 300px 0px",
    threshold: 0,
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-graphite py-16 md:py-20"
      aria-label="Company statistics"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(80% 120% at 50% 0%, rgba(234,88,12,0.12) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-hairline shadow-deep sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start bg-white px-6 py-8 md:px-8 md:py-10"
            >
              <span className="flex items-baseline gap-2">
                <span className="block font-mono text-5xl font-bold tracking-tight text-graphite md:text-6xl">
                  <AnimatedNumber
                    target={stat.value}
                    inView={inView}
                    suffix={stat.suffix}
                  />
                </span>
                <span className="spec-label text-safety">{stat.unit}</span>
              </span>
              <p className="mt-3 text-[0.9375rem] leading-snug text-slate-deep">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
