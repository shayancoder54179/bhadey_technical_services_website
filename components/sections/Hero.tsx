"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetQuoteLink, PhoneLink } from "@/components/seo/TrackedCtaLinks";

const container = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

// H1 is transform-only — never opacity:0, so the browser can measure LCP immediately
const h1Variant = { hidden: { y: 14 }, visible: { y: 0, transition: { duration: 0.45 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ASSURANCES = [
  { icon: ShieldCheck, label: "Non-destructive", detail: "Scan before you cut" },
  { icon: Clock, label: "Same-day callout", detail: "Across the UAE" },
  { icon: MapPin, label: "6+ emirates", detail: "Dubai to Fujairah" },
] as const;

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-graphite"
      aria-label="Hero - Bhadeya Technical Services GPR Scanning Dubai UAE"
    >
      {/* Warm depth behind the copy column, cooled toward the photo */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 12% 20%, rgba(234,88,12,0.16) 0%, transparent 60%), radial-gradient(90% 80% at 90% 100%, rgba(30,41,59,0.9) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-14 pt-26 sm:px-8 md:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:pb-16 lg:pt-30 xl:px-16">
        {/* ── Copy column ─────────────────────────────────────────────── */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="eyebrow eyebrow-dark">
            GPR Scanning · Core Cutting · UAE
          </motion.p>

          <motion.h1
            variants={h1Variant}
            className="display-xl mt-5 text-white"
          >
            Know what&apos;s beneath{" "}
            <span className="text-safety-bright">before</span> you cut.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[54ch] text-[1.0625rem] leading-relaxed text-white/75"
          >
            Protect your structure before you cut, and your site before you dig.
            We scan slabs, walls and ground with Proceq GP8000 and GS8000 radar,
            then mark on site exactly where it is safe to work.
          </motion.p>

          {/* Spec strip — a light plate on the dark hero, so it separates from the
              background instead of sinking into it */}
          <motion.dl
            variants={fadeUp}
            className="mt-7 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-lg bg-hairline shadow-deep"
          >
            <div className="bg-white px-5 py-4">
              <dt className="spec-label text-slate-soft">GP8000 · Concrete</dt>
              <dd className="mt-1.5 font-mono text-2xl font-bold text-graphite">
                1.5
                <span className="ml-1 text-sm font-semibold text-safety">
                  m max
                </span>
              </dd>
              <p className="mt-1 text-xs text-slate-soft">
                Rebar &amp; post-tension · ±5 mm
              </p>
            </div>
            <div className="bg-white px-5 py-4">
              <dt className="spec-label text-slate-soft">GS8000 · Ground</dt>
              <dd className="mt-1.5 font-mono text-2xl font-bold text-graphite">
                10
                <span className="ml-1 text-sm font-semibold text-safety">
                  m max
                </span>
              </dd>
              <p className="mt-1 text-xs text-slate-soft">
                Buried utilities · 5-10 m typical
              </p>
            </div>
          </motion.dl>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="h-13 rounded-md bg-safety px-8 text-base font-semibold text-white shadow-lift transition-all hover:bg-safety/90"
            >
              <GetQuoteLink href="https://wa.me/971556926286?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20quote%20for%20GPR%20scanning%20services.">
                Get a Free Quote
              </GetQuoteLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-13 rounded-md border border-white/25 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-white/10 hover:text-white"
            >
              <PhoneLink
                href="tel:+971556926286"
                className="inline-flex items-center gap-2"
              >
                <Phone className="size-[18px]" aria-hidden />
                +971 55 692 6286
              </PhoneLink>
            </Button>
          </motion.div>

          {/* Assurance row — replaces the old floating badge */}
          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-5"
          >
            {ASSURANCES.map(({ icon: Icon, label, detail }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon className="size-[18px] shrink-0 text-safety-bright" aria-hidden />
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-white">
                    {label}
                  </span>
                  <span className="block text-[0.8125rem] text-white/60">{detail}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ── Photo column ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-xl shadow-deep ring-1 ring-white/10">
            <Image
              src="/images/WhatsApp Image 2025-12-28 at 00.56.40.jpeg"
              alt="Bhadeya technician GPR scanning a concrete soffit on an active construction site in Dubai"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              priority
              className="object-cover object-center"
            />
            {/* Grade the phone photo down so it sits in the palette instead of fighting it */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "linear-gradient(to top, rgba(11,18,32,0.85) 0%, rgba(11,18,32,0.15) 45%, rgba(11,18,32,0.05) 100%)",
              }}
            />

            {/* Live caption plate */}
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/10 bg-graphite/80 px-4 py-3 backdrop-blur-md">
              <p className="spec-label text-safety-bright">
                On site · Proceq GP8000
              </p>
              <p className="mt-1 text-sm font-medium text-white/90">
                Slab scan before core drilling — rebar and post-tension mapped.
              </p>
            </div>
          </div>

          {/* Experience marker, overlapping the frame */}
          <div className="absolute -left-6 top-8 rounded-lg border border-white/10 bg-safety px-5 py-4 shadow-deep">
            <p className="font-mono text-3xl font-bold leading-none text-white">7+</p>
            <p className="spec-label mt-1 text-white/90">
              Years in UAE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
