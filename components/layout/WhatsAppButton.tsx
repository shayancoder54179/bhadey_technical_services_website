"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { company } from "@/data/company";
import { trackWhatsAppClick } from "@/lib/tracking";

const WHATSAPP_GREEN = "#25D366";
const whatsappUrl = `${company.socialLinks.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to inquire about your GPR scanning and technical services."
)}`;

export function WhatsAppButton() {
  return (
    <Link
      href={whatsappUrl}
      onClick={() => trackWhatsAppClick("floating_button")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full shadow-lift transition-transform hover:scale-105 md:bottom-8 md:right-8"
      style={{ backgroundColor: WHATSAPP_GREEN }}
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full opacity-25">
        <span
          className="block size-full rounded-full"
          style={{ backgroundColor: WHATSAPP_GREEN }}
          aria-hidden
        />
      </span>
      <WhatsAppIcon className="relative size-7 text-white" aria-hidden />
    </Link>
  );
}
