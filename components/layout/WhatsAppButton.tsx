"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
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
      onClick={trackWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 md:bottom-8 md:right-8 md:size-14"
      style={{ backgroundColor: WHATSAPP_GREEN }}
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full opacity-30">
        <span
          className="block size-full rounded-full"
          style={{ backgroundColor: WHATSAPP_GREEN }}
          aria-hidden
        />
      </span>
      <MessageCircle className="relative size-6 text-white md:size-7" aria-hidden />
    </Link>
  );
}
