"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Radar, CircleDot, Shovel, Magnet, Layers, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetQuoteLink } from "@/components/seo/TrackedCtaLinks";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  Radar,
  CircleDot,
  Shovel,
  Magnet,
  Layers,
  Truck,
} as const;

// Short instrument codes — an identifier per service, not a sequence, so no numbered markers.
const SERVICE_CODES: Record<string, string> = {
  "gpr-scanning": "GPR",
  "gs8000-scanning": "GS8000",
  "core-cutting": "CORE",
  excavation: "EXC",
  "oversized-cargo": "CARGO",
  "interlock-road-pavement": "PAVE",
};

type ServiceItem = (typeof services)[number] & {
  overviewHighlight?: string;
  overviewFeatures?: string[];
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export function ServicesOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-60px 0px -60px 0px",
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="bg-paper py-16 md:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p
            className="font-mono text-xs font-semibold uppercase tracking-widest text-signal-orange mb-3"
            aria-hidden
          >
            Our Services
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight"
          >
            Comprehensive Technical Services Across UAE
          </h2>
          <p className="text-lg text-muted-foreground">
            From non-destructive scanning to precision cutting, we provide
            end-to-end solutions for safe construction practices
          </p>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-[800px] mx-auto text-center">
            Bhadeya Technical Services LLC is a leading provider of GPR scanning, core cutting, and excavation services across Dubai, Abu Dhabi, Sharjah, and UAE. With 7+ years of experience, we deliver precision and safety on every job.
          </p>
        </header>

        {/* Service cards — flat instrument-panel grid, hairline dividers instead of per-card borders */}
        <div className="grid grid-cols-1 gap-px border border-steel/20 bg-steel/20 md:grid-cols-2 mb-14 md:mb-16">
          {(services as ServiceItem[]).map((service, index) => {
            const IconComponent =
              ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Radar;
            const highlight =
              service.overviewHighlight ?? service.equipment ?? "";
            const features =
              service.overviewFeatures ?? service.features.slice(0, 4);
            const code = SERVICE_CODES[service.id] ?? service.id.slice(0, 4).toUpperCase();

            return (
              <motion.article
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={cn(
                  "group bg-paper p-6 md:p-7",
                  "transition-colors duration-300 ease-out",
                  "hover:bg-concrete/60 focus-within:bg-concrete/60"
                )}
              >
                {/* Icon + code */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex size-12 shrink-0 items-center justify-center bg-signal-orange/10 text-signal-orange"
                    aria-hidden
                  >
                    <IconComponent className="size-6" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-steel" aria-hidden>
                    {code}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed">
                  {service.shortDescription}
                </p>
                <p className="font-mono text-xs text-foreground/80 mb-4 uppercase tracking-wide">
                  {highlight}
                </p>

                <ul className="space-y-2 mb-6" role="list">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      role="listitem"
                    >
                      <span
                        className="size-1.5 bg-signal-orange shrink-0"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 border-b-2 border-transparent text-sm font-semibold text-foreground hover:border-signal-orange focus:outline-none focus:border-signal-orange"
                >
                  Learn More About {service.title}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-concrete border border-steel/20 px-6 py-8 md:py-10">
          <p className="text-base md:text-lg text-foreground mb-5 max-w-2xl mx-auto">
            Need multiple services? We offer integrated scanning + cutting
            packages.
          </p>
          <Button asChild size="lg" className="rounded-none bg-signal-orange font-semibold text-ink hover:bg-signal-orange/90">
            <GetQuoteLink href="/contact">Request Custom Quote</GetQuoteLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
