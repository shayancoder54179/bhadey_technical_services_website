import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Radar, ScanSearch } from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Scanning Services Dubai | GS 8000 Scanner | Bhadeya Technical",
  description:
    "Advanced concrete scanning with GS 8000 in Dubai, Abu Dhabi & UAE. High-resolution rebar detection, cover measurement & structural assessment. Non-destructive testing experts. Free quote available!",
  keywords: [
    "concrete scanning Dubai",
    "GS 8000 scanner",
    "concrete scanning UAE",
    "rebar detection",
    "structural scanning Dubai",
    "NDT Dubai",
    "non destructive testing UAE",
  ],
  alternates: { canonical: "https://www.bhadeyatechnical.com/services/concrete-scanning-gs8000" },
  openGraph: {
    title: "Concrete Scanning Dubai | GS 8000 | Bhadeya Technical",
    description:
      "High-resolution concrete scanning with GS 8000 in Dubai, Abu Dhabi & UAE. Rebar detection, cover measurement, NDT.",
    url: "https://www.bhadeyatechnical.com/services/concrete-scanning-gs8000",
    type: "website",
  },
};

const concreteScanningData: ServicePageData = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Concrete Scanning (GS 8000)", href: "/services/concrete-scanning-gs8000" },
  ],
  hero: {
    title: "Concrete Scanning Services in Dubai & UAE with GS 8000",
    subtitle:
      "High-resolution concrete scanning using the advanced GS 8000 scanner. Precise rebar mapping, cover measurement and structural assessment—non-destructively. Ideal for renovation, structural audits and pre-demolition surveys across Dubai, Abu Dhabi and the UAE.",
    stats: [
      { value: "GS 8000", label: "Scanner" },
      { value: "High-Res", label: "Imaging" },
      { value: "Non-Destructive", label: "Testing" },
    ],
    ctaPrimaryLabel: "Get Free Quote",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
  },
  overview: {
    title: "What is Concrete Scanning with GS 8000?",
    description:
      "Concrete scanning with the GS 8000 is a non-destructive testing method that provides high-resolution imaging of concrete structures. It is optimised for detecting rebar patterns, measuring concrete cover, locating embedded conduits and assessing structural condition. Unlike general-purpose GPR, the GS 8000 delivers exceptional detail within concrete elements—making it the preferred choice for structural assessments, renovation planning and quality control in Dubai and the UAE.",
    howItWorks: [
      {
        step: 1,
        title: "Scan area definition",
        description:
          "We define the zones to be scanned based on your structural drawings and project needs. This ensures full coverage of critical areas.",
      },
      {
        step: 2,
        title: "High-resolution scanning",
        description:
          "The GS 8000 is moved systematically over the concrete surface, capturing high-resolution data for rebar, cover and embedded objects.",
      },
      {
        step: 3,
        title: "Analysis & digital report",
        description:
          "Data is processed to produce rebar maps, cover measurements and a detailed digital report for your design and construction teams.",
      },
    ],
    benefits: [
      "Highly detailed structural imaging",
      "Precise reinforcement mapping",
      "Fast project turnaround",
      "Digital reporting and documentation",
      "Non-destructive assessment",
      "Cost-effective structural analysis",
    ],
  },
  equipment: {
    title: "Equipment We Use",
    name: "GS 8000 Concrete Scanner",
    description:
      "The GS 8000 is an advanced concrete scanner that delivers high-resolution imaging for precise detection of reinforcement, embedded objects and structural anomalies within concrete. It is designed for rebar mapping, cover measurement and condition assessment, with excellent clarity and reliability. Bhadeya Technical uses the GS 8000 to deliver professional concrete scanning services across Dubai, Abu Dhabi and the UAE.",
    specs: [
      { label: "Technology", value: "High-resolution concrete imaging" },
      { label: "Best for", value: "Rebar, cover, embedded objects" },
      { label: "Output", value: "Digital reports & marked drawings" },
      { label: "Method", value: "Non-destructive" },
    ],
    whyBest:
      "The GS 8000 is optimised for concrete rather than general ground scanning. It provides the resolution and accuracy needed for structural assessments, renovation and quality control. We use it alongside our Proceq GP8000 GPR to offer the right tool for each project.",
  },
  features: [
    { title: "High-resolution subsurface imaging", description: "Clear view of rebar and embedded elements." },
    { title: "Precise rebar detection and mapping", description: "Accurate reinforcement layout for design and cutting." },
    { title: "Concrete cover measurement", description: "Cover depth for compliance and structural review." },
    { title: "Embedded object identification", description: "Conduits, ducts and other embedments located." },
    { title: "Real-time data visualization", description: "See results as we scan." },
    { title: "Detailed digital reports", description: "Professional reports for your records and approvals." },
  ],
  applications: [
    { title: "Structural condition assessment" },
    { title: "Renovation and retrofit planning" },
    { title: "Reinforcement mapping" },
    { title: "Quality control inspections" },
    { title: "Pre-demolition surveys" },
    { title: "Concrete cover measurement" },
    { title: "Embedded object detection" },
    { title: "Construction verification" },
  ],
  process: {
    title: "Our Concrete Scanning Process",
    steps: [
      {
        number: 1,
        title: "Consultation & scope",
        description:
          "We discuss your project, structural drawings and deliverables. We confirm scan areas, access and any specific requirements (e.g. cover reports, rebar maps).",
      },
      {
        number: 2,
        title: "On-site scanning with GS 8000",
        description:
          "Our technician performs the scan using the GS 8000, following a defined grid. We capture high-resolution data for all specified zones.",
      },
      {
        number: 3,
        title: "Analysis & reporting",
        description:
          "We process the data and produce a detailed report with rebar maps, cover measurements, marked-up drawings and recommendations.",
      },
      {
        number: 4,
        title: "Recommendations",
        description:
          "We provide clear recommendations for safe cutting, drilling or construction, and for any follow-up structural or NDT work in Dubai or the UAE.",
      },
    ],
  },
  seoParagraphs: [
    {
      title: "Concrete Scanning in Dubai",
      content:
        "Concrete scanning in Dubai is widely used for high-rise, commercial and infrastructure projects. The GS 8000 delivers high-resolution rebar mapping, cover measurement and structural assessment—supporting renovation, retrofit and quality control. Bhadeya Technical provides professional concrete scanning services across Dubai, with detailed digital reports that meet consultant and contractor requirements.",
    },
    {
      title: "Concrete Scanning in Abu Dhabi",
      content:
        "In Abu Dhabi, concrete scanning is required for government, oil & gas and civil projects. Our GS 8000 concrete scanning services in Abu Dhabi include rebar mapping, cover measurement and embedded object detection. We deliver reports suitable for structural review and construction planning across the emirate.",
    },
    {
      title: "Why Choose Professional Concrete Scanning",
      content:
        "Professional concrete scanning ensures the right equipment, trained technicians and reliable reports. The GS 8000 is designed for concrete-specific applications; our team interprets data correctly and delivers reports you can use for design and compliance. Bhadeya Technical serves Dubai, Abu Dhabi and the wider UAE with integrated scanning and core cutting solutions.",
    },
  ],
  relatedServices: [
    { href: "/services/gpr-scanning", label: "GPR Scanning" },
    { href: "/services/core-cutting", label: "Core Cutting" },
    { href: "/services/excavation", label: "Excavation" },
  ],
  faq: {
    title: "Frequently Asked Questions About Concrete Scanning (GS 8000)",
    items: [
      {
        question: "What is the difference between GPR scanning and concrete scanning with GS 8000?",
        answer:
          "Both are non-destructive. GPR with the Proceq GP8000 offers deeper penetration (up to 200cm) and is ideal for deep utilities and ground scanning. The GS 8000 is optimised for concrete—delivering high-resolution rebar mapping, cover measurement and embedded object detection within concrete elements. We recommend the best option based on your project.",
      },
      {
        question: "When should I use concrete scanning instead of GPR?",
        answer:
          "Use concrete scanning (GS 8000) when you need detailed rebar layout, cover measurement or structural condition assessment within concrete. Use GPR (GP8000) when you need deeper penetration, utility locating or scanning of ground or asphalt. We can advise and combine both if needed.",
      },
      {
        question: "Do you provide reports after concrete scanning?",
        answer:
          "Yes. We provide detailed digital reports including rebar maps, cover measurements, marked-up drawings and recommendations. Reports are suitable for design, construction and compliance in Dubai and the UAE.",
      },
      {
        question: "Which areas do you serve?",
        answer:
          "We serve Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain. Our team is mobile and can attend site across the UAE.",
      },
    ],
  },
  ctaTitle: "Need Concrete Scanning in Dubai or UAE?",
  ctaDescription:
    "Get a free quote for GS 8000 concrete scanning. We respond within 1 hour during business hours.",
};

function GPRVsConcreteComparison() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24 border-t border-border"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <h2 id="comparison-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          GPR Scanning vs Concrete Scanning — Which Do You Need?
        </h2>
        <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
          Both are non-destructive scanning methods, but they serve different purposes. Use this guide to choose the right service for your project in Dubai or the UAE.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-2 border-[var(--color-secondary-blue)]/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-blue)]/15 text-[var(--color-secondary-blue)]">
                  <Radar className="size-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">GPR Scanning (Proceq GP8000)</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Best for: <strong className="text-foreground">Deep penetration</strong>, utility locating, ground and slab scanning. Detects rebar, post-tension cables, conduits and voids <strong className="text-foreground">up to 200cm depth</strong>.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Pre-core cutting and drilling</li>
                <li>Post-tension cable detection</li>
                <li>Utility mapping in concrete and ground</li>
                <li>Slab-on-grade and bridge decks</li>
              </ul>
              <Button asChild variant="outline" size="sm" className="rounded-lg">
                <Link href="/services/gpr-scanning">Learn more about GPR Scanning</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-2 border-emerald-500/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                  <ScanSearch className="size-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">Concrete Scanning (GS 8000)</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Best for: <strong className="text-foreground">High-resolution concrete imaging</strong>—rebar mapping, cover measurement and structural assessment. Optimised for detail within concrete elements.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Structural condition assessment</li>
                <li>Renovation and retrofit planning</li>
                <li>Rebar mapping and cover measurement</li>
                <li>Pre-demolition and quality control</li>
              </ul>
              <p className="text-sm text-foreground font-medium">You are here: Concrete Scanning (GS 8000)</p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
          Not sure which you need? Contact us with your project details and we will recommend the right service or a combined approach for Dubai or UAE projects.
        </p>
      </div>
    </section>
  );
}

export default function ConcreteScanningGS8000Page() {
  return (
    <ServicePageTemplate data={concreteScanningData}>
      <GPRVsConcreteComparison />
    </ServicePageTemplate>
  );
}
