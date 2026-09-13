"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Radar, CircleDot, Shovel, Magnet, Layers, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetQuoteLink } from "@/components/seo/TrackedCtaLinks";
import { services } from "@/data/services";
import {
  SERVICE_CODES,
  SERVICE_PHOTOS,
  SERVICE_PHOTO_POSITION,
} from "@/lib/service-photos";
import { cn } from "@/lib/utils";

const ICON_MAP = { Radar, CircleDot, Shovel, Magnet, Layers, Truck } as const;

type ServiceItem = (typeof services)[number] & {
  overviewHighlight?: string;
  overviewFeatures?: string[];
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: Math.min(i, 3) * 0.08, duration: 0.45 },
  }),
};

export function ServicesOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px 300px 0px",
    threshold: 0,
  });

  return (
    <section
      ref={ref}
      className="section-y bg-surface"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Asymmetric header — heading left, context right. Deliberately not centered:
            every section on this page used to be centered, which flattened the rhythm. */}
        <header className="mb-12 grid gap-6 border-b border-hairline pb-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16 md:mb-14">
          <div>
            <p className="eyebrow">6 services · one crew</p>
            <h2
              id="services-heading"
              className="display-lg mt-4 text-graphite"
            >
              Everything that keeps a UAE site safe to cut, drill and dig.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-slate-deep">
              From non-destructive scanning to precision cutting, we cover the
              whole sequence — so nobody on your site works blind.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate-soft">
              Bhadeya Technical Services L.L.C serves Dubai, Abu Dhabi, Sharjah
              and the wider UAE, with 7+ years on live construction sites.
            </p>
          </div>
        </header>

        {/* Service cards — elevated surfaces with real photography where we have it */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {(services as ServiceItem[]).map((service, index) => {
            const IconComponent =
              ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Radar;
            const highlight = service.overviewHighlight ?? service.equipment ?? "";
            const features = service.overviewFeatures ?? service.features.slice(0, 4);
            const code =
              SERVICE_CODES[service.id] ?? service.id.slice(0, 4).toUpperCase();
            const photo = SERVICE_PHOTOS[service.id];
            const photoPosition =
              SERVICE_PHOTO_POSITION[service.id] ?? "object-center";

            return (
              <motion.article
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-xl border border-hairline bg-surface shadow-panel",
                  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
                )}
              >
                {photo && (
                  <div className="relative h-44 w-full overflow-hidden bg-graphite">
                    <Image
                      src={photo}
                      alt={`${service.title} by Bhadeya Technical Services in the UAE`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className={cn(
                        "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]",
                        photoPosition
                      )}
                    />
                    <div
                      className="absolute inset-0"
                      aria-hidden
                      style={{
                        background:
                          "linear-gradient(to top, rgba(11,18,32,0.88) 0%, rgba(11,18,32,0.35) 35%, rgba(11,18,32,0) 75%)",
                      }}
                    />
                    <span className="spec-label absolute bottom-3 left-5 text-white">
                      {code}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  {!photo && (
                    <div className="mb-5 flex items-center gap-3">
                      <div
                        className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-safety/10 text-safety"
                        aria-hidden
                      >
                        <IconComponent className="size-6" />
                      </div>
                      <span className="spec-label text-slate-soft" aria-hidden>
                        {code}
                      </span>
                    </div>
                  )}

                  <h3 className="display-sm text-graphite">{service.title}</h3>

                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-deep">
                    {service.shortDescription}
                  </p>

                  <p className="spec-label mt-3 text-slate-soft">{highlight}</p>

                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2" role="list">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-deep"
                      >
                        <span
                          className="mt-[0.4rem] size-1.5 shrink-0 rounded-full bg-safety"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 self-start border-b-2 border-transparent pb-0.5 text-sm font-semibold text-graphite transition-colors hover:border-safety hover:text-safety focus:border-safety focus:outline-none"
                  >
                    {service.title}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA — a band, not another centered card */}
        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl border border-hairline bg-mist-tint px-6 py-7 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div>
            <p className="display-sm text-graphite">
              Need scanning and cutting together?
            </p>
            <p className="mt-1 text-[0.9375rem] text-slate-deep">
              We run integrated packages — one team, one visit, one report.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-md bg-safety px-7 font-semibold text-white shadow-panel transition-all hover:bg-safety/90 hover:shadow-lift"
          >
            <GetQuoteLink href="/contact">Request Custom Quote</GetQuoteLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
