"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, animate } from "framer-motion";

const STATS = [
  {
    value: 7,
    suffix: "+ YRS",
    label: "Years Experience",
  },
  {
    value: 500,
    suffix: "CM",
    label: "Max Scanning Depth",
  },
  {
    value: 6,
    suffix: "+ CITIES",
    label: "Cities Served",
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
    <span className="font-mono tabular-nums">
      {display}
      <span className="text-signal-orange text-lg sm:text-xl md:text-2xl align-middle ml-1">
        {suffix}
      </span>
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
      className="relative w-full border-y border-white/10 bg-ink py-14 md:py-16 lg:py-20"
      aria-label="Company statistics"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center py-6 text-center sm:py-0"
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl font-semibold text-paper tracking-tight">
                <AnimatedNumber
                  target={stat.value}
                  inView={inView}
                  suffix={stat.suffix}
                />
              </span>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-paper/55">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
