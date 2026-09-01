import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";
import { Shield, CircleDot, Wrench } from "lucide-react";

import { OG_IMAGES } from "@/lib/og-image";
export const metadata: Metadata = {
  title: "Diamond Core Cutting Dubai & UAE",
  description:
    "Diamond core cutting in Dubai and across the UAE, 12 mm to 500 mm. Every hole is GPR scanned first, so we never cut into rebar or post-tension cables.",
  keywords: [
    "core cutting Dubai",
    "diamond core cutting UAE",
    "concrete core cutting Dubai",
    "core drilling Dubai",
    "core cutting Abu Dhabi",
    "core cutting Sharjah",
  ],
  alternates: { canonical: "https://www.bhadeya.com/services/core-cutting" },
  openGraph: {
    title: "Core Cutting Dubai & UAE | 12-500mm | Bhadeya Technical",
    description:
      "Diamond core cutting 12mm–500mm in Dubai, Abu Dhabi & UAE. GPR before every cut. Professional equipment.",
    url: "https://www.bhadeya.com/services/core-cutting",
    type: "website",
    images: OG_IMAGES,
  },
};

const CORE_SIZES = [
  { mm: 12, label: "12mm", use: "Small anchors" },
  { mm: 16, label: "16mm", use: "Anchors, conduits" },
  { mm: 20, label: "20mm", use: "Conduits" },
  { mm: 25, label: "25mm", use: "Plumbing, electrical" },
  { mm: 32, label: "32mm", use: "Plumbing" },
  { mm: 40, label: "40mm", use: "Drainage, ducts" },
  { mm: 50, label: "50mm", use: "HVAC, pipes" },
  { mm: 75, label: "75mm", use: "Larger ducts" },
  { mm: 100, label: "100mm", use: "HVAC, structural" },
  { mm: 150, label: "150mm", use: "Large penetrations" },
  { mm: 200, label: "200mm", use: "Structural openings" },
  { mm: 300, label: "300mm", use: "Major openings" },
  { mm: 500, label: "500mm", use: "Maximum size" },
];

const coreCuttingData: ServicePageData = {
  slug: "core-cutting",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Core Cutting", href: "/services/core-cutting" },
  ],
  hero: {
    title: "Diamond Core Cutting Services in Dubai & UAE",
    subtitle:
      "Precision diamond core cutting from 12mm to 500mm diameter using professional equipment. GPR scanning is included before every cut to avoid rebar and post-tension cables. Serving Dubai, Abu Dhabi, Sharjah and major projects across the UAE.",
    stats: [
      { value: "12–500mm", label: "Hole diameter range" },
      { value: "Professional equipment", label: "Equipment" },
      { value: "GPR before every cut", label: "Safety" },
    ],
    ctaPrimaryLabel: "Get Free Quote",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
    image: {
      src: "/images/diamond-core-cutting-service-1024x688.png",
      alt: "Diamond core cutting service in Dubai by Bhadeya Technical Services - professional concrete cutting UAE",
    },
  },
  overview: {
    title: "What is Core Cutting?",
    description:
      "Core cutting (core drilling) is the process of drilling precise, circular holes in concrete, masonry and stone using diamond-tipped bits. Holes are used for plumbing, electrical conduits, HVAC ducts, anchor bolts, drainage and structural openings. At Bhadeya Technical we use professional diamond core cutting systems and—critically—we perform GPR scanning before every cut to locate rebar and post-tension cables. This combination ensures safe, clean holes without damaging the structure, across Dubai, Abu Dhabi and the UAE.",
    howItWorks: [
      {
        step: 1,
        title: "GPR scan first",
        description:
          "We scan the area with our Proceq GP8000 to map rebar, post-tension cables and utilities. This determines safe locations for each hole.",
      },
      {
        step: 2,
        title: "Mark and confirm",
        description:
          "We mark approved positions and confirm with you. No cutting takes place until the scan is done and positions are agreed.",
      },
      {
        step: 3,
        title: "Diamond core cutting",
        description:
          "Our team uses professional diamond core cutting equipment to cut clean, precise holes. We work vertically, horizontally or overhead as required by the project.",
      },
    ],
    benefits: [
      "Clean and precise holes every time",
      "Minimal structural disturbance",
      "GPR scanning included—no hidden risk",
      "Fast completion with professional equipment",
      "Reduced dust and debris",
      "Professional finish guaranteed",
    ],
  },
  equipment: {
    title: "Equipment We Use",
    name: "Professional Diamond Core Cutting Systems",
    description:
      "We use professional-grade diamond core cutting systems for reliability, precision and performance. Our equipment delivers clean, accurate cuts with minimal noise and vibration, and supports a full range of diameters from 12mm to 500mm. Combined with our pre-cut GPR scanning, we deliver safe core cutting services across Dubai, Abu Dhabi and the UAE.",
    specs: [
      { label: "Diameter range", value: "12 mm – 500 mm" },
      { label: "Technology", value: "Diamond-tipped core bits" },
      { label: "Materials", value: "Concrete, masonry, stone" },
    ],
    whyBest:
      "Our professional diamond core cutting systems are durable, accurate and widely used on major projects. We use them alongside our GPR scanning to deliver the safest core cutting service in the UAE.",
  },
  features: [
    { title: "12mm to 500mm diameter range", description: "From small anchors to large structural openings." },
    { title: "Diamond-tipped precision", description: "Clean cuts with minimal chipping or vibration." },
    { title: "GPR scanning before every cut", description: "We never cut blind—rebar and PT cables are located first." },
    { title: "Vertical, horizontal & overhead", description: "We cut in any orientation required." },
    { title: "Professional-grade equipment", description: "Reliable, precise and built for heavy use." },
    { title: "Quick and efficient execution", description: "Minimal disruption to your programme." },
  ],
  applications: [
    { title: "Plumbing pipe installations" },
    { title: "Electrical conduit routing" },
    { title: "HVAC duct penetrations" },
    { title: "Drainage installations" },
    { title: "Anchor bolt holes" },
    { title: "Sample extraction for testing" },
    { title: "Window and door openings" },
    { title: "Structural modifications" },
  ],
  galleryImages: [
    { src: "/images/WhatsApp Image 2025-12-28 at 00.56.41 (1).jpeg", alt: "Diamond core cutting in Dubai - core drill bit cutting into concrete slab UAE construction project" },
    { src: "/images/WhatsApp Image 2025-12-28 at 00.56.42.jpeg", alt: "Professional concrete core cutting Dubai - core samples and drilled holes by Bhadeya Technical Services UAE" },
    { src: "/images/WhatsApp Image 2025-12-28 at 00.56.43.jpeg", alt: "Core cutting service UAE - technician operating diamond core drilling machine on concrete Dubai" },
  ],
  galleryTitle: "Core Cutting in Action",
  process: {
    title: "Our Core Cutting Process",
    steps: [
      {
        number: 1,
        title: "Consultation & scan planning",
        description:
          "We confirm hole sizes, positions and access. We then plan the GPR scan to cover all cutting locations and any critical zones (e.g. post-tension areas).",
      },
      {
        number: 2,
        title: "GPR scanning before cutting",
        description:
          "We perform GPR scanning with the Proceq GP8000 and mark rebar, post-tension cables and utilities. We identify safe positions for each hole and agree them with you.",
      },
      {
        number: 3,
        title: "Core cutting",
        description:
          "Our team uses professional diamond core cutting equipment to drill each hole at the approved positions. We work systematically to minimise disruption and complete on schedule.",
      },
      {
        number: 4,
        title: "Handover & cleanup",
        description:
          "We leave the site clean and provide a summary of work done. Reports and marked drawings from the GPR scan are available for your records.",
      },
    ],
  },
  seoParagraphs: [
    {
      title: "Core Cutting in Dubai",
      content:
        "Core cutting in Dubai is in high demand for high-rise, commercial and MEP projects. Contractors need precise holes for plumbing, electrical, HVAC and structural penetrations. Bhadeya Technical provides diamond core cutting from 12mm to 500mm using professional equipment, with GPR scanning included before every cut. We serve Dubai, Abu Dhabi and the wider UAE with a focus on safety and quality.",
    },
    {
      title: "Core Cutting in Abu Dhabi",
      content:
        "In Abu Dhabi, core cutting is required for government, oil & gas and infrastructure projects. Our core cutting services in Abu Dhabi include the full diameter range and pre-cut GPR scanning. We use professional equipment and follow strict safety procedures to protect rebar and post-tension systems. We cover Abu Dhabi city, Mussafah and surrounding areas.",
    },
    {
      title: "Why GPR Before Every Cut Matters",
      content:
        "Cutting or drilling without knowing where rebar and post-tension cables are can cause serious structural damage and safety risks. At Bhadeya Technical we perform GPR scanning before every core cutting job. This ensures we never hit critical reinforcement and that every hole is in a safe, approved location. It is our standard practice across all UAE projects.",
    },
  ],
  relatedServices: [
    { href: "/services/gpr-scanning", label: "GPR Concrete Scanning" },
    { href: "/services/excavation", label: "Excavation" },
  ],
  faq: {
    title: "Frequently Asked Questions About Core Cutting",
    items: [
      {
        question: "What sizes of core holes can you cut?",
        answer:
          "We cut core holes from 12mm to 500mm in diameter using professional diamond core cutting equipment. This covers small anchors, conduits, plumbing, HVAC and large structural openings.",
      },
      {
        question: "Do you scan before core cutting?",
        answer:
          "Yes. We always perform GPR scanning before any core cutting. We use the Proceq GP8000 to locate rebar, post-tension cables and utilities, and we only cut at approved positions. This is standard on every job.",
      },
      {
        question: "What equipment do you use for core cutting?",
        answer:
          "We use professional diamond core cutting systems known for precision, reliability and performance, widely used on major projects in the UAE.",
      },
      {
        question: "Which areas do you serve?",
        answer:
          "We serve Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain. Our team is mobile and can attend site across the UAE.",
      },
    ],
  },
  ctaTitle: "Need Core Cutting in Dubai or UAE?",
  ctaDescription:
    "Get a free quote for diamond core cutting with GPR scanning included. We respond within 1 hour during business hours.",
};

function CoreCuttingExtras() {
  return (
    <>
      {/* Size chart */}
      <section
        className="bg-concrete py-16 md:py-20 lg:py-24 border-t border-steel/20"
        aria-labelledby="size-chart-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 id="size-chart-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Core Hole Size Range: 12mm to 500mm
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-10">
            We offer the full range of core diameters for construction and MEP works. From small anchor holes to large structural openings—all with GPR scanning before every cut.
          </p>
          <div className="overflow-x-auto">
            <div className="flex flex-wrap gap-3 justify-center min-w-[320px]">
              {CORE_SIZES.map((item) => (
                <div
                  key={item.mm}
                  className="flex flex-col items-center border border-steel/20 bg-paper p-4 min-w-[100px]"
                >
                  <span className="flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                    <CircleDot className="size-6" aria-hidden />
                  </span>
                  <span className="font-mono font-semibold text-foreground text-lg mt-2 tabular-nums">{item.label}</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">{item.use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GPR Scanning Before Every Cut */}
      <section
        className="bg-paper py-16 md:py-20 lg:py-24 border-t border-steel/20"
        aria-labelledby="gpr-safety-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto border border-steel/20 bg-concrete/50 p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex size-14 shrink-0 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Shield className="size-7" aria-hidden />
              </span>
              <div>
                <h2 id="gpr-safety-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-2 tracking-tight">
                  GPR Scanning Before Every Cut
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We never cut blind. Before any core cutting we perform GPR scanning with the Proceq GP8000 to locate rebar, post-tension cables and utilities. We then mark safe positions and only cut where approved. This protects the structure, avoids costly damage and keeps your project on track. It is our standard practice on every job in Dubai and the UAE.
                </p>
              </div>
            </div>
            <Link
              href="/services/gpr-scanning"
              className="inline-flex items-center border-b-2 border-transparent text-foreground font-semibold hover:border-signal-orange"
            >
              Learn more about our GPR scanning →
            </Link>
          </div>
        </div>
      </section>

      {/* Professional equipment showcase */}
      <section
        className="bg-concrete py-16 md:py-20 lg:py-24 border-t border-steel/20"
        aria-labelledby="equipment-showcase-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 id="equipment-showcase-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
            Professional Equipment Showcase
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start max-w-4xl">
            <span className="flex size-20 shrink-0 items-center justify-center bg-signal-orange/10 text-signal-orange">
              <Wrench className="size-10" aria-hidden />
            </span>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use <strong className="text-foreground">professional diamond</strong> core cutting systems for all our core cutting work. Our equipment is the preferred choice on major construction projects in the UAE and worldwide, offering reliability, precision and strong support. Our team is trained on professional-grade equipment and we maintain our tools to the highest standards—so you get clean, accurate holes and minimal downtime on site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Combined with our pre-cut GPR scanning, our professional core cutting allows us to deliver the safest, most reliable core cutting service in Dubai, Abu Dhabi and across the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function CoreCuttingPage() {
  return (
    <ServicePageTemplate data={coreCuttingData}>
      <CoreCuttingExtras />
    </ServicePageTemplate>
  );
}
