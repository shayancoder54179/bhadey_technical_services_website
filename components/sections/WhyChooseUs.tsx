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
      "Two Proceq radars, not one. The GP8000 reads up to 1.5 m into concrete for rebar and post-tension cables; the GS8000 reaches up to 10 m into the ground for buried utilities before excavation.",
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
    rootMargin: "300px 0px 300px 0px",
    threshold: 0,
  });

  return (
    <section
      ref={ref}
      className="section-y bg-mist"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Alternating layout: image placeholder left, content right */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-center lg:gap-14 xl:gap-16 md:mb-14">
          {/* Image placeholder — left on desktop */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            className="relative order-2 aspect-[4/3] w-full flex-shrink-0 overflow-hidden rounded-xl shadow-lift ring-1 ring-hairline lg:order-1 lg:w-[45%]"
          >
            <Image
              src="/images/7272030 (1).jpg"
              alt="Bhadeya Technical Services team performing ground penetrating radar scanning on a Dubai construction site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              aria-hidden
              style={{
                background:
                  "linear-gradient(to top, rgba(11,18,32,0.55) 0%, transparent 55%)",
              }}
            />
            <p className="spec-label absolute bottom-4 left-5 text-white/90">
              Live site · UAE
            </p>
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
              className="eyebrow"
            >
              7+ years in the UAE
            </motion.p>
            <motion.h2
              id="why-choose-us-heading"
              variants={headerVariants}
              className="display-lg mt-4 text-graphite"
            >
              Why Leading UAE Companies Trust Bhadeya Technical Services
            </motion.h2>
            <motion.p
              variants={headerVariants}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-deep"
            >
              7+ years of precision, safety and reliability — on hospitals,
              malls, hotels and infrastructure across the Emirates.
            </motion.p>
          </motion.header>
        </div>

        {/* 6 feature blocks — 3x2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.Icon as LucideIcon;
            return (
              <motion.article
                key={feature.title}
                variants={cardVariants}
                transition={{ duration: 0.4 }}
                className={cn(
                  "rounded-xl border border-hairline bg-surface p-6 shadow-panel",
                  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
                )}
              >
                <div
                  className="mb-4 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety"
                  aria-hidden
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="display-sm mb-2 text-graphite">
                  {feature.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-slate-deep">
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
