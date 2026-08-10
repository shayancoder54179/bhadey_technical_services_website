"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetQuoteLink, PhoneLink } from "@/components/seo/TrackedCtaLinks";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// H1 uses transform-only — no opacity:0 so browser can measure LCP immediately
const h1Variant = {
  hidden: { y: 12 },
  visible: { y: 0, transition: { duration: 0.4 } },
};

// Other items fade + slide
const itemFadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-ink"
      aria-label="Hero - Bhadeya Technical Services GPR Scanning Dubai UAE"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,130,15,0.10) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[75vh] w-full max-w-7xl flex-col items-center justify-center px-6 py-14 sm:px-8 md:min-h-[80vh] md:py-16 lg:px-12 xl:px-16">
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-5 md:space-y-6 max-w-4xl"
        >
          <motion.div variants={itemFadeUp}>
            <span
              className="inline-flex items-center gap-2 border border-signal-orange/30 bg-signal-orange/[0.08] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-signal-orange"
              role="status"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-signal-orange shadow-[0_0_8px_var(--color-signal-orange)]" />
              UAE&apos;s Trusted GPR Scanning Experts · 7+ Years
            </span>
          </motion.div>

          {/* H1 uses transform-only variant — always visible for LCP measurement */}
          <motion.h1
            variants={h1Variant}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-semibold leading-[1.08] text-paper tracking-tight"
          >
            Know what&apos;s beneath{" "}
            <span className="text-signal-orange">before</span> you cut.
          </motion.h1>

          <motion.p
            variants={itemFadeUp}
            className="text-base sm:text-lg text-paper/75 max-w-[700px] leading-relaxed mx-auto"
          >
            Protect your structure before you cut, and your site before you
            dig. Proceq GP8000 reads{" "}
            <span className="font-mono text-paper">1m</span> into concrete;
            Proceq GS8000 reads{" "}
            <span className="font-mono text-paper">3&ndash;5m</span> into the
            ground. Serving Dubai, Abu Dhabi, Sharjah &amp; across UAE.
          </motion.p>

          <motion.div
            variants={itemFadeUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2"
          >
            <Button
              asChild
              size="lg"
              className={cn(
                "w-full sm:w-auto rounded-none border border-transparent bg-signal-orange text-ink hover:border-ink hover:bg-signal-orange",
                "text-base font-semibold px-8 py-6"
              )}
            >
              <GetQuoteLink href="https://wa.me/971556926286?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20quote%20for%20GPR%20scanning%20services.">Get Free Quote</GetQuoteLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-none border-2 border-white/25 bg-transparent text-paper hover:bg-white/5 hover:text-paper hover:border-white/40 text-base font-semibold px-6 py-6"
            >
              <PhoneLink
                href="tel:+971556926286"
                className="inline-flex items-center gap-2"
              >
                <Phone className="size-5" aria-hidden />
                Call Now: +971 55 692 6286
              </PhoneLink>
            </Button>
          </motion.div>
        </motion.header>
      </div>
    </section>
  );
}
