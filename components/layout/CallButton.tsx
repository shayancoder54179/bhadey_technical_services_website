"use client";

import { Phone } from "lucide-react";
import { company } from "@/data/company";
import { trackPhoneClick } from "@/lib/tracking";

const NAVY = "#0A2540";

export function CallButton() {
  return (
    <a
      href={`tel:${company.phoneClean}`}
      onClick={() => trackPhoneClick(company.phoneClean)}
      className="fixed bottom-6 left-6 z-40 flex size-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 md:hidden"
      style={{ backgroundColor: NAVY }}
      aria-label={`Call ${company.phone}`}
    >
      <Phone className="size-6 text-white" aria-hidden />
    </a>
  );
}
