"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const SERVICES_LINE = "GPR · Core Cutting · Excavation";

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
    rootMargin: "300px 0px 300px 0px",
    threshold: 0,
  });

  const cities = company.serviceAreas;

  return (
    <section
      ref={ref}
      className="section-y bg-mist"
      aria-labelledby="service-areas-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <header className="mb-12 grid gap-6 border-b border-hairline pb-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16 md:mb-14">
          <div>
            <p className="eyebrow">6 emirates · same-day callout</p>
            <h2
              id="service-areas-heading"
              className="display-lg mt-4 text-graphite"
            >
              Mobile teams across every emirate.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-deep">
            Same scanning, cutting and excavation capability wherever your site
            is — from Downtown Dubai to Fujairah.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, index) => (
            <motion.article
              key={city}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={cn(
                "rounded-xl border border-hairline bg-surface p-6 shadow-panel",
                "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
              )}
            >
              <h3 className="display-sm mb-2 flex items-center gap-2 text-graphite">
                <MapPin className="size-5 shrink-0 text-safety" aria-hidden />
                {city}
              </h3>
              <p className="spec-label mb-3 text-slate-soft">{SERVICES_LINE}</p>
              <p className="text-sm leading-relaxed text-slate-deep">
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
