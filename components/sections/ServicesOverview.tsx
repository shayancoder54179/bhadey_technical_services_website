"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Radar, CircleDot, Shovel, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetQuoteLink } from "@/components/seo/TrackedCtaLinks";
import { services } from "@/data/services";
import type { ServiceIconColor } from "@/data/services";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  Radar,
  CircleDot,
  Shovel,
} as const;

const ICON_COLOR_CLASSES: Record<ServiceIconColor, string> = {
  blue: "bg-[var(--color-secondary-blue)]/15 text-[var(--color-secondary-blue)]",
  green: "bg-emerald-500/15 text-emerald-600",
  orange: "bg-[var(--color-accent-orange)]/15 text-[var(--color-accent-orange)]",
  navy: "bg-[var(--color-primary-navy)]/15 text-[var(--color-primary-navy)]",
};

type ServiceItem = (typeof services)[number] & {
  overviewHighlight?: string;
  overviewFeatures?: string[];
  iconColor?: ServiceIconColor;
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
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-orange)] mb-3"
            aria-hidden
          >
            OUR SERVICES
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
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

        {/* Service cards — 3 columns on desktop, single column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 md:mb-16">
          {(services as ServiceItem[]).map((service, index) => {
            const IconComponent =
              ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Radar;
            const iconColor = service.iconColor ?? "blue";
            const highlight =
              service.overviewHighlight ?? service.equipment ?? "";
            const features =
              service.overviewFeatures ?? service.features.slice(0, 4);

            return (
              <motion.article
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={cn(
                  "group rounded-xl border-2 border-border bg-card p-6 md:p-7",
                  "transition-all duration-300 ease-out",
                  "hover:border-[var(--color-secondary-blue)]/40 hover:shadow-lg hover:-translate-y-0.5",
                  "focus-within:border-[var(--color-secondary-blue)]/40 focus-within:shadow-lg"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex size-12 rounded-full items-center justify-center mb-5",
                    ICON_COLOR_CLASSES[iconColor]
                  )}
                  aria-hidden
                >
                  <IconComponent className="size-6" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed">
                  {service.shortDescription}
                </p>
                <p className="text-sm font-semibold text-foreground/90 mb-4">
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
                        className="size-1.5 rounded-full bg-[var(--color-accent-orange)] shrink-0"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-secondary-blue)] hover:underline focus:outline-none focus:underline"
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center rounded-xl bg-muted/50 border border-border px-6 py-8 md:py-10">
          <p className="text-base md:text-lg text-foreground mb-5 max-w-2xl mx-auto">
            Need multiple services? We offer integrated scanning + cutting
            packages.
          </p>
          <Button asChild size="lg" className="font-semibold">
            <GetQuoteLink href="/contact">Request Custom Quote</GetQuoteLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
