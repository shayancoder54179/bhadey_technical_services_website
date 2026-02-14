"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PhoneLink, WhatsAppLink } from "@/components/seo/TrackedCtaLinks";
import { company } from "@/data/company";
import { services } from "@/data/services";

const FOOTER_BG = "#0A2540";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Free Quote" },
];

const whatsappUrl = `${company.socialLinks.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to inquire about your GPR scanning and technical services."
)}`;

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: FOOTER_BG }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {/* Section 1 - Company Info */}
          <div className="xl:col-span-1">
            <Link href="/" className="inline-block">
              <div className="bg-white rounded-xl p-3 inline-block mb-4">
                <Image
                  src="/images/bts_logo.png"
                  alt="Bhadeya Technical Services LLC - GPR scanning core cutting excavation Dubai UAE"
                  width={220}
                  height={80}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 block text-sm font-semibold uppercase tracking-tight text-white">
                Bhadeya Technical Services LLC
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {company.description}
            </p>
            <div className="mt-6 space-y-3">
              <PhoneLink
                href={`tel:${company.phoneClean}`}
                className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
                aria-label={`Call: ${company.phone}`}
              >
                <Phone className="size-4 shrink-0" aria-hidden />
                {company.phone}
              </PhoneLink>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
                aria-label={`Email: ${company.email}`}
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {company.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/80">
                <Clock className="mt-0.5 size-4 shrink-0" aria-hidden />
                <div>
                  <p>{company.hours.weekday.days}: {company.hours.weekday.time}</p>
                  <p>{company.hours.saturday.days}: {company.hours.saturday.time}</p>
                  <p>{company.hours.friday.days}: {company.hours.friday.time}</p>
                </div>
              </div>
              <WhatsAppLink
                href={whatsappUrl}
                className="inline-flex items-center gap-2 text-sm text-[#25D366] transition-colors hover:underline"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden />
                WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          {/* Section 2 - Our Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 - Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {company.serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 - Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO paragraph */}
        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-white/60">
          Bhadeya Technical Services LLC provides professional GPR scanning,
          core cutting, and excavation services across Dubai, Abu Dhabi, Sharjah,
          Ras Al Khaimah, and UAE. Trusted by The Dubai Mall, Emaar, ADNOC, and
          leading construction companies.
        </p>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/10"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-8 lg:px-12 xl:px-16">
          <p className="text-center text-sm text-white/70 sm:text-left">
            © {new Date().getFullYear()} Bhadeya Technical Services L.L.C. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
