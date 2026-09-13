"use client";

import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetQuoteLink, PhoneLink, WhatsAppLink } from "@/components/seo/TrackedCtaLinks";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const whatsappUrl = `${company.socialLinks.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to get a free quote for GPR scanning, core cutting, or excavation."
)}`;

export function CTASection() {
  return (
    <section
      className="section-y relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Flat Ink background */}
      <div className="absolute inset-0 bg-graphite" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 25% 0%, rgba(234,88,12,0.18) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-12 xl:px-16">
        <div>
          <p className="eyebrow eyebrow-dark">Response within 1 hour</p>
          <h2 id="cta-heading" className="display-lg mt-4 text-white">
            Tell us what you need scanned, cut or dug.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Free consultation and quote for GPR scanning, core cutting or
            excavation. We respond within 1 hour during business hours.
          </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className={cn(
              "h-13 w-full rounded-md bg-safety px-8 text-base font-semibold text-white shadow-lift sm:w-auto",
              "transition-all hover:bg-safety/90"
            )}
          >
            <GetQuoteLink href="/contact">Get Free Quote</GetQuoteLink>
          </Button>
          <Button
            asChild
            size="lg"
            className={cn(
              "h-13 w-full rounded-md bg-[#25D366] px-8 text-base font-semibold text-white shadow-lift sm:w-auto",
              "transition-colors hover:bg-[#20BD5A]"
            )}
          >
            <WhatsAppLink href={whatsappUrl} className="inline-flex items-center gap-2">
              <WhatsAppIcon className="size-5" aria-hidden />
              WhatsApp Us
            </WhatsAppLink>
          </Button>
        </div>

        </div>

        {/* Contact panel */}
        <div className="rounded-xl bg-white p-6 shadow-deep md:p-8">
          <p className="spec-label text-safety">Direct lines</p>

          <div className="mt-5 flex flex-col gap-4">
            <PhoneLink
              href={`tel:${company.phoneClean}`}
              className="inline-flex items-center gap-3 font-mono text-lg font-semibold text-graphite transition-colors hover:text-safety"
              aria-label={`Call ${company.phone}`}
            >
              <Phone className="size-5 shrink-0 text-safety" aria-hidden />
              {company.phone}
            </PhoneLink>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-3 break-all text-[0.9375rem] font-medium text-slate-deep transition-colors hover:text-safety"
              aria-label={`Email ${company.email}`}
            >
              <Mail className="size-5 shrink-0 text-safety" aria-hidden />
              {company.email}
            </a>
          </div>

          <dl className="mt-6 space-y-2 border-t border-hairline pt-5 text-sm">
            <div className="flex items-center gap-2 pb-1">
              <Clock className="size-4 shrink-0 text-safety" aria-hidden />
              <span className="spec-label text-slate-soft">Working hours</span>
            </div>
            {[company.hours.weekday, company.hours.saturday, company.hours.friday].map(
              (slot) => (
                <div key={slot.days} className="flex justify-between gap-4">
                  <dt className="text-slate-soft">{slot.days}</dt>
                  <dd className="font-mono font-medium text-graphite">{slot.time}</dd>
                </div>
              )
            )}
          </dl>
        </div>
      </div>
    </section>
  );
}
