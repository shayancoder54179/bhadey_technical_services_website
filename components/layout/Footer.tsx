"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { PhoneLink, WhatsAppLink } from "@/components/seo/TrackedCtaLinks";
import { company } from "@/data/company";
import { services } from "@/data/services";

const FOOTER_BG = "#18181A";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const whatsappUrl = `${company.socialLinks.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to inquire about your GPR scanning and technical services."
)}`;

export function Footer() {
  return (
    <footer
      className="border-t border-signal-orange/30 text-white"
      style={{ backgroundColor: FOOTER_BG }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="inline-block bg-paper p-2.5">
                <Image
                  src="/images/bts_logo.png"
                  alt="Bhadeya Technical Services LLC - GPR scanning core cutting excavation Dubai UAE"
                  width={200}
                  height={72}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xs">
              UAE&apos;s trusted partner for GPR scanning, core cutting, and excavation. 7+ years serving Dubai, Abu Dhabi, Sharjah &amp; beyond.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-signal-orange">
              Services
            </h3>
            <ul className="mt-3 space-y-2" role="list">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-signal-orange">
              Contact
            </h3>
            <div className="mt-3 space-y-2">
              <PhoneLink
                href={`tel:${company.phoneClean}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                aria-label={`Call: ${company.phone}`}
              >
                <Phone className="size-4 shrink-0" aria-hidden />
                {company.phone}
              </PhoneLink>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                aria-label={`Email: ${company.email}`}
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {company.email}
              </a>
              <WhatsAppLink
                href={whatsappUrl}
                source="footer"
                className="flex items-center gap-2 text-sm text-[#25D366] transition-colors hover:underline"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden />
                WhatsApp
              </WhatsAppLink>
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1" role="list">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-white/50">
          Serving {company.serviceAreas.join(", ")}.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto px-6 py-5 sm:px-8 lg:px-12 xl:px-16">
          <p className="text-center text-sm text-white/60 sm:text-left">
            © {new Date().getFullYear()} Bhadeya Technical Services L.L.C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
