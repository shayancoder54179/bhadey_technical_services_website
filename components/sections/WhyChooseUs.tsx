"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Cpu,
  Trophy,
  ShieldCheck,
  ArrowDownToLine,
  MapPin,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Industry-Leading Equipment",
    description:
      "We run the Proceq GP8000 for concrete and the Proceq GS8000 for ground scanning, along with professional diamond core cutting equipment.",
    Icon: Cpu,
  },
  {
    title: "Proven Track Record",
    description:
      "We have served UAE's most prestigious projects including The Dubai Mall, Kempinski Hotel, The Edition, Emaar Properties, Nakheel Mall, Sheikh Khalifa Hospital, Mediclinic, and hundreds more.",
    Icon: Trophy,
  },
  {
    title: "Safety First Approach",
    description:
      "Every core cutting job begins with a concrete scan, and every excavation begins with a ground scan. We never cut blind and we never dig blind. Your structure's integrity and worker safety are our top priorities.",
    Icon: ShieldCheck,
  },
  {
    title: "Concrete & Ground Scanning",
    description:
      "Two Proceq radars, not one. The GP8000 reads up to 1m into concrete for rebar and post-tension cables; the GS8000 reads 5–10m into the ground for buried utilities before excavation.",
    Icon: ArrowDownToLine,
  },
  {
    title: "UAE-Wide Coverage",
    description:
      "We serve Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain. Our mobile teams reach any project site across the Emirates.",
    Icon: MapPin,
  },
  {
    title: "Fast & Reliable",
    description:
      "Quick response times, efficient execution, and detailed professional reports delivered promptly. We understand construction timelines and deliver accordingly.",
    Icon: Clock,
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const headerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-60px 0px -60px 0px",
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="bg-concrete py-16 md:py-20 lg:py-24"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Alternating layout: image placeholder left, content right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 mb-14 md:mb-16">
          {/* Image placeholder — left on desktop */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 flex-shrink-0 w-full lg:w-[45%] aspect-[4/3] border border-steel/20 overflow-hidden"
            aria-hidden
          >
            <Image
              src="/images/7272030 (1).jpg"
              alt="Bhadeya Technical Services LLC professional team - GPR scanning experts at work in Dubai UAE ground penetrating radar"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              loading="lazy"
            />
          </motion.div>

          {/* Header content — right on desktop */}
          <motion.header
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-1 lg:order-2 flex-1"
          >
            <motion.p
              variants={headerVariants}
              className="font-mono text-xs font-semibold uppercase tracking-widest text-signal-orange mb-3"
              aria-hidden
            >
              Why Bhadeya
            </motion.p>
            <motion.h2
              id="why-choose-us-heading"
              variants={headerVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight tracking-tight"
            >
              Why Leading UAE Companies Trust Bhadeya Technical Services
            </motion.h2>
            <motion.p
              variants={headerVariants}
              className="text-lg text-muted-foreground max-w-xl"
            >
              7+ years of precision, safety, and reliability in every project
            </motion.p>
          </motion.header>
        </div>

        {/* 6 feature blocks — 3x2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-px border border-steel/20 bg-steel/20 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.Icon as LucideIcon;
            return (
              <motion.article
                key={feature.title}
                variants={cardVariants}
                transition={{ duration: 0.4 }}
                className={cn(
                  "bg-paper p-6",
                  "transition-colors duration-300 ease-out",
                  "hover:bg-concrete/50"
                )}
              >
                <div
                  className="mb-4 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange"
                  aria-hidden
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
