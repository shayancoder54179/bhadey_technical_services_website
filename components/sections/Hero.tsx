"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetQuoteLink, PhoneLink } from "@/components/seo/TrackedCtaLinks";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className="relative min-h-[auto] md:min-h-[100vh] overflow-hidden flex items-center justify-center"
      aria-label="Hero - Bhadeya Technical Services GPR Scanning Dubai UAE"
    >
      {/* Background: deep navy to dark blue gradient + dot pattern */}
      <div
        className="absolute inset-0 bg-[#0A2540]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 102, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0, 102, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 24px 24px",
          backgroundPosition: "0 0, 0 0, 0 0",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-5rem)]">
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-5 md:space-y-6 max-w-4xl"
        >
          <motion.div variants={itemFadeUp}>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/95 backdrop-blur-sm"
              role="status"
            >
              🏆 UAE&apos;s Trusted GPR Scanning Experts • 5+ Years Experience
            </span>
          </motion.div>

          <motion.h1
            variants={itemFadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-bold leading-tight text-white tracking-tight"
          >
            Professional GPR Scanning & Core Cutting Services in Dubai & UAE
          </motion.h1>

          <motion.p
            variants={itemFadeUp}
            className="text-base sm:text-lg text-white/85 max-w-[700px] leading-relaxed mx-auto"
          >
            Protect your structure before you cut. We use Proceq GP8000
            technology for precise subsurface detection up to 200cm depth.
            Serving Dubai, Abu Dhabi, Sharjah & across UAE.
          </motion.p>

          <motion.div
            variants={itemFadeUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2"
          >
            <Button
              asChild
              size="lg"
              className={cn(
                "w-full sm:w-auto bg-[var(--color-accent-orange)] text-white hover:bg-[var(--color-accent-orange)]/90",
                "text-base font-semibold px-8 py-6 rounded-lg shadow-lg"
              )}
            >
              <GetQuoteLink href="/contact">Get Free Quote</GetQuoteLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white/80 text-white bg-transparent hover:bg-white/10 text-base font-semibold px-6 py-6 rounded-lg"
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
