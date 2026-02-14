"use client";

import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetQuoteLink, PhoneLink, WhatsAppLink } from "@/components/seo/TrackedCtaLinks";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const whatsappUrl = `${company.socialLinks.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to get a free quote for GPR scanning, core cutting, or excavation."
)}`;

export function CTASection() {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Gradient background: electric blue to navy */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0066ff] via-[#0052cc] to-[#0A2540]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      <div className="relative container mx-auto px-4 text-center">
        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto"
        >
          Ready to Start Your Project?
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Get a free consultation and quote for your GPR scanning, core cutting,
          or excavation needs. We respond within 1 hour during business hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className={cn(
              "w-full sm:w-auto bg-white text-[#0066ff] hover:bg-white/95",
              "font-semibold text-base px-8 py-6 rounded-lg shadow-lg"
            )}
          >
            <GetQuoteLink href="/contact">Get Free Quote</GetQuoteLink>
          </Button>
          <Button
            asChild
            size="lg"
            className={cn(
              "w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20BD5A]",
              "font-semibold text-base px-8 py-6 rounded-lg shadow-lg"
            )}
          >
            <WhatsAppLink href={whatsappUrl} className="inline-flex items-center gap-2">
              <WhatsAppIcon className="size-5" aria-hidden />
              WhatsApp Us
            </WhatsAppLink>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-white/95">
          <PhoneLink
            href={`tel:${company.phoneClean}`}
            className="inline-flex items-center gap-2 text-base font-medium hover:text-white transition-colors"
            aria-label={`Call ${company.phone}`}
          >
            <Phone className="size-5 shrink-0" aria-hidden />
            {company.phone}
          </PhoneLink>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-2 text-base font-medium hover:text-white transition-colors"
            aria-label={`Email ${company.email}`}
          >
            <Mail className="size-5 shrink-0" aria-hidden />
            {company.email}
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80 text-sm">
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 shrink-0" aria-hidden />
            <strong className="text-white/95">Working hours:</strong>
          </span>
          <span>
            {company.hours.weekday.days}: {company.hours.weekday.time}
          </span>
          <span>
            {company.hours.saturday.days}: {company.hours.saturday.time}
          </span>
          <span>{company.hours.friday.days}: {company.hours.friday.time}</span>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5", className)}
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
