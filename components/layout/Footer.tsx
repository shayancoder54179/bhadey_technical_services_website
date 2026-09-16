"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PhoneLink, WhatsAppLink } from "@/components/seo/TrackedCtaLinks";
import { Logo } from "@/components/layout/Logo";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { cities, locationRoutes, serviceLabels } from "@/data/locations";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

const whatsappUrl = `${company.socialLinks.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to inquire about your GPR scanning and technical services."
)}`;

// Group the location routes by service so the internal links read as an
// organised index instead of a flat wall of near-identical sentences.
const areasByService = locationRoutes.reduce<Record<string, string[]>>(
  (acc, { service, city }) => {
    (acc[service] ??= []).push(city);
    return acc;
  },
  {}
);

const hours = [
  company.hours.weekday,
  company.hours.saturday,
  company.hours.friday,
];

export function Footer() {
  return (
    <footer
      className="border-t-2 border-safety bg-graphite-raised text-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* ── Top: brand + navigation + contact ─────────────────────────── */}
        <div className="grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-12">
          {/* Brand */}
          <div className="min-w-0">
            <Link href="/" className="inline-block" aria-label="Bhadeya Technical Services — home">
              <Logo tone="light" size="md" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              UAE&apos;s trusted partner for GPR scanning, core cutting and
              excavation. 7+ years serving Dubai, Abu Dhabi, Sharjah and beyond.
            </p>
            <WhatsAppLink
              href={whatsappUrl}
              source="footer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-safety px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-safety/90"
            >
              Get a free quote
              <ArrowRight className="size-4" aria-hidden />
            </WhatsAppLink>
          </div>

          {/* Services */}
          <nav aria-labelledby="footer-services">
            <h3 id="footer-services" className="spec-label text-safety-bright">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/75 transition-colors hover:text-safety-bright"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="footer-company">
            <h3 id="footer-company" className="spec-label text-safety-bright">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/75 transition-colors hover:text-safety-bright"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + hours */}
          <div>
            <h3 className="spec-label text-safety-bright">Contact</h3>

            <PhoneLink
              href={`tel:${company.phoneClean}`}
              className="mt-4 flex items-center gap-2.5 font-mono text-lg font-semibold text-white transition-colors hover:text-safety-bright"
              aria-label={`Call ${company.phone}`}
            >
              <Phone className="size-[18px] shrink-0 text-safety-bright" aria-hidden />
              {company.phone}
            </PhoneLink>

            <a
              href={`mailto:${company.email}`}
              className="mt-3 flex items-center gap-2.5 break-all text-sm text-white/75 transition-colors hover:text-safety-bright"
              aria-label={`Email ${company.email}`}
            >
              <Mail className="size-[18px] shrink-0 text-safety-bright" aria-hidden />
              {company.email}
            </a>

            <WhatsAppLink
              href={whatsappUrl}
              source="footer"
              className="mt-3 flex items-center gap-2.5 text-sm font-medium text-[#4ade80] transition-colors hover:text-[#86efac]"
              aria-label="Chat with us on WhatsApp"
            >
              <WhatsAppIcon className="size-[18px] shrink-0" aria-hidden />
              WhatsApp
            </WhatsAppLink>

            {/* Registered address — must stay byte-identical to the Google
                Business Profile listing for NAP consistency. */}
            <address className="mt-3 flex items-start gap-2.5 text-sm not-italic leading-relaxed text-white/75">
              <MapPin className="mt-0.5 size-[18px] shrink-0 text-safety-bright" aria-hidden />
              <span>
                {company.address.streetAddress}
                <br />
                {company.address.locality}, {company.address.region}
                <br />
                {company.address.countryName}
              </span>
            </address>

            <dl className="mt-6 space-y-1.5 border-t border-white/10 pt-5 text-sm">
              {hours.map((slot) => (
                <div key={slot.days} className="flex justify-between gap-4">
                  <dt className="text-white/60">{slot.days}</dt>
                  <dd className="font-mono text-white/90">{slot.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ── Service areas: grouped index, one row per service ──────────── */}
        <div className="border-t border-white/10 py-10">
          <h3 className="spec-label text-safety-bright">Service Areas</h3>
          <div className="mt-5 space-y-4">
            {Object.entries(areasByService).map(([service, serviceCities]) => (
              <div
                key={service}
                className="grid gap-2 sm:grid-cols-[190px_1fr] sm:items-baseline sm:gap-6"
              >
                <p className="text-sm font-semibold text-white/85">
                  {serviceLabels[service as keyof typeof serviceLabels]}
                </p>
                <ul className="flex flex-wrap gap-x-2 gap-y-2" role="list">
                  {serviceCities.map((city) => (
                    <li key={city}>
                      <Link
                        href={`/services/${service}/${city}`}
                        className="inline-block rounded-full border border-white/15 px-3 py-1 text-[0.8125rem] text-white/70 transition-colors hover:border-safety hover:text-safety-bright"
                      >
                        {cities[city as keyof typeof cities].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────── */}
      <div className="border-t border-white/10 bg-graphite">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-16">
          <div className="space-y-1">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Bhadeya Technical Services L.L.C. All
              rights reserved.
            </p>
            <p className="text-xs text-white/45">
              Trade Licence No. {company.license.number} ·{" "}
              {company.license.issuerShort}
            </p>
          </div>
          <p className="text-xs text-white/45">
            Serving {company.serviceAreas.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
