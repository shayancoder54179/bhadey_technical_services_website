import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";
import { Shield, CircleDot, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Cutting Services Dubai & UAE | Diamond Core Cutting | 12-500mm",
  description:
    "Professional diamond core cutting services in Dubai, Abu Dhabi & UAE. 12mm to 500mm diameter holes using professional equipment. GPR scanning included before every cut. Serving major projects across UAE.",
  keywords: [
    "core cutting Dubai",
    "diamond core cutting UAE",
    "concrete core cutting Dubai",
    "core drilling Dubai",
    "core cutting Abu Dhabi",
    "core cutting Sharjah",
  ],
  alternates: { canonical: "https://www.bhadeyatechnical.com/services/core-cutting" },
  openGraph: {
    title: "Core Cutting Dubai & UAE | 12-500mm | Bhadeya Technical",
    description:
      "Diamond core cutting 12mm–500mm in Dubai, Abu Dhabi & UAE. GPR before every cut. Professional equipment.",
    url: "https://www.bhadeyatechnical.com/services/core-cutting",
    type: "website",
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
    { href: "/services/gpr-scanning", label: "GPR Scanning" },
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
        className="bg-muted/40 py-16 md:py-20 lg:py-24 border-t border-border"
        aria-labelledby="size-chart-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 id="size-chart-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
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
                  className="flex flex-col items-center rounded-xl border-2 border-border bg-card p-4 min-w-[100px] shadow-sm"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-[var(--color-accent-orange)]/15 text-[var(--color-accent-orange)] font-bold text-lg">
                    <CircleDot className="size-6" aria-hidden />
                  </span>
                  <span className="font-bold text-foreground text-lg mt-2 tabular-nums">{item.label}</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">{item.use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GPR Scanning Before Every Cut */}
      <section
        className="bg-white py-16 md:py-20 lg:py-24 border-t border-border"
        aria-labelledby="gpr-safety-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-[var(--color-secondary-blue)]/30 bg-[var(--color-secondary-blue)]/5 p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-blue)]/20 text-[var(--color-secondary-blue)]">
                <Shield className="size-7" aria-hidden />
              </span>
              <div>
                <h2 id="gpr-safety-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  GPR Scanning Before Every Cut
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We never cut blind. Before any core cutting we perform GPR scanning with the Proceq GP8000 to locate rebar, post-tension cables and utilities. We then mark safe positions and only cut where approved. This protects the structure, avoids costly damage and keeps your project on track. It is our standard practice on every job in Dubai and the UAE.
                </p>
              </div>
            </div>
            <Link
              href="/services/gpr-scanning"
              className="inline-flex items-center text-[var(--color-secondary-blue)] font-semibold hover:underline"
            >
              Learn more about our GPR scanning →
            </Link>
          </div>
        </div>
      </section>

      {/* Professional equipment showcase */}
      <section
        className="bg-muted/40 py-16 md:py-20 lg:py-24 border-t border-border"
        aria-labelledby="equipment-showcase-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 id="equipment-showcase-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Professional Equipment Showcase
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start max-w-4xl">
            <span className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
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
