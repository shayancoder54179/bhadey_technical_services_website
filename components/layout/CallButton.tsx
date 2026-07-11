"use client";

import { Phone } from "lucide-react";
import { company } from "@/data/company";
import { trackPhoneClick } from "@/lib/tracking";

const INK = "#0E0E0F";

export function CallButton() {
  return (
    <a
      href={`tel:${company.phoneClean}`}
      onClick={() => trackPhoneClick(company.phoneClean)}
      className="fixed bottom-24 right-6 z-40 flex size-12 items-center justify-center border border-white/10 transition-transform hover:scale-105 md:hidden"
      style={{ backgroundColor: INK }}
      aria-label={`Call ${company.phone}`}
    >
      <Phone className="size-6 text-white" aria-hidden />
    </a>
  );
}
