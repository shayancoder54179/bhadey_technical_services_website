"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const SERVICES_LINE = "GPR Scanning | Core Cutting | Excavation";

const CITY_DESCRIPTIONS: Record<string, string> = {
  Dubai:
    "Serving all areas including Downtown, Marina, JBR, Business Bay, DIFC, JLT and beyond with professional GPR scanning and core cutting services.",
  "Abu Dhabi":
    "Trusted by ADNOC Headquarters, Al Dar Properties, and major developments. Full GPR scanning and core cutting coverage across Abu Dhabi.",
  Sharjah:
    "Complete GPR scanning, core cutting, and excavation services for construction projects throughout Sharjah.",
  "Ras Al Khaimah":
    "Professional technical services including GPR scanning and core cutting for RAK construction projects.",
  Fujairah:
    "Serving Fujairah construction projects including Taif Mall with GPR scanning and core cutting services.",
  "Al Ain":
    "GPR scanning and core cutting services for Al Ain projects including Jimi Mall and residential developments.",
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.35 },
  }),
};

export function ServiceAreas() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-60px 0px -60px 0px",
    threshold: 0.08,
  });

  const cities = company.serviceAreas;

  return (
    <section
      ref={ref}
      className="bg-muted/50 py-16 md:py-20 lg:py-24"
      aria-labelledby="service-areas-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-orange)] mb-3"
            aria-hidden
          >
            SERVICE AREAS
          </p>
          <h2
            id="service-areas-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            GPR Scanning & Core Cutting Services Across UAE
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide our full range of technical services across all major
            emirates
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cities.map((city, index) => (
            <motion.article
              key={city}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={cn(
                "rounded-xl border border-border bg-card p-6 shadow-sm",
                "transition-all duration-300 ease-out",
                "hover:border-[var(--color-secondary-blue)]/30 hover:shadow-md"
              )}
            >
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <MapPin
                  className="size-5 shrink-0 text-[var(--color-accent-orange)]"
                  aria-hidden
                />
                {city}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                {SERVICES_LINE}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {CITY_DESCRIPTIONS[city] ??
                  `Serving ${city} construction projects with professional GPR scanning and core cutting services.`}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
