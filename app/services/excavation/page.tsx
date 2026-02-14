import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";

export const metadata: Metadata = {
  title: "Excavation Services Dubai & UAE | Safe GPR-Guided Excavation | Bhadeya Technical",
  description:
    "Professional excavation services in Dubai, Abu Dhabi & UAE. GPR-scanned excavation zones for maximum safety. Site preparation, utility trenching, foundation excavation. 5+ years experience.",
  keywords: [
    "excavation services Dubai",
    "excavation UAE",
    "safe excavation Dubai",
    "utility trenching UAE",
    "foundation excavation Dubai",
  ],
  alternates: { canonical: "https://www.bhadeyatechnical.com/services/excavation" },
  openGraph: {
    title: "Excavation Dubai & UAE | GPR-Guided | Bhadeya Technical",
    description:
      "Safe excavation with GPR-scanned zones in Dubai, Abu Dhabi & UAE. Site prep, trenching, foundations. 5+ years.",
    url: "https://www.bhadeyatechnical.com/services/excavation",
    type: "website",
  },
};

const excavationData: ServicePageData = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Excavation", href: "/services/excavation" },
  ],
  hero: {
    title: "Professional Excavation Services in Dubai & UAE",
    subtitle:
      "Safe, efficient excavation with GPR-scanned zones. We identify underground utilities and obstructions before digging—reducing risk and delays. Site preparation, utility trenching, foundation excavation. 5+ years serving Dubai, Abu Dhabi, Sharjah and across the UAE.",
    stats: [
      { value: "5+ Years", label: "Experience" },
      { value: "GPR pre-scan", label: "Safety" },
      { value: "All UAE", label: "Coverage" },
    ],
    ctaPrimaryLabel: "Get Free Quote",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
  },
  overview: {
    title: "What Are Our Excavation Services?",
    description:
      "Our excavation services cover site preparation, utility trenching, foundation excavation and grading for construction and civil projects across the UAE. What sets us apart is our integration of GPR scanning: we scan excavation zones before digging to locate underground utilities, cables and obstructions. This GPR-guided approach minimises the risk of utility strikes, protects existing infrastructure and keeps your project on schedule. We serve Dubai, Abu Dhabi, Sharjah and the wider UAE with experienced operators and full compliance with local safety regulations.",
    howItWorks: [
      {
        step: 1,
        title: "Site assessment & GPR scanning",
        description:
          "We assess the site and perform GPR scanning to map underground utilities and obstructions. This defines safe excavation zones and highlights areas to avoid or hand-dig.",
      },
      {
        step: 2,
        title: "Planning & marking",
        description:
          "We mark utilities and agree excavation limits with you. Our team plans the work to minimise risk and maximise efficiency.",
      },
      {
        step: 3,
        title: "Controlled excavation",
        description:
          "Excavation is carried out in line with the scan results and markings. We work carefully near utilities and use appropriate methods (e.g. hand digging) when required.",
      },
    ],
    benefits: [
      "GPR-scanned excavation zones for safety",
      "Reduced risk of utility strikes",
      "Efficient project timelines",
      "Experienced and certified operators",
      "Compliance with UAE regulations",
      "Integrated scanning and excavation",
    ],
  },
  equipment: {
    title: "Equipment & Approach",
    name: "Professional Excavation + GPR Technology",
    description:
      "We combine modern excavation machinery with GPR scanning technology. Before any excavation we use our Proceq GP8000 GPR to map the subsurface. Our operators are trained in safe digging practices and we follow UAE safety standards. This integrated approach—GPR first, then controlled excavation—delivers safe, efficient results across Dubai, Abu Dhabi and the UAE.",
    specs: [
      { label: "GPR depth", value: "Up to 200 cm" },
      { label: "Experience", value: "5+ years" },
      { label: "Coverage", value: "All UAE" },
    ],
    whyBest:
      "Many excavation contractors dig without subsurface mapping. We scan first with GPR, then excavate with full awareness of what is underground. This reduces utility strikes, delays and costly repairs—and gives you confidence that the work is done safely.",
  },
  features: [
    { title: "Pre-excavation GPR scanning", description: "We locate utilities and obstructions before digging." },
    { title: "Utility-safe digging practices", description: "Controlled excavation and hand digging where needed." },
    { title: "Site preparation and grading", description: "Ready your site for construction or landscaping." },
    { title: "Trenching for utilities and drainage", description: "Precise trenches for pipes, cables and drainage." },
    { title: "Foundation excavation", description: "Excavation for foundations and basements." },
    { title: "Experienced operators", description: "Trained, safety-conscious team across the UAE." },
  ],
  applications: [
    { title: "Construction site preparation" },
    { title: "Utility trench excavation" },
    { title: "Foundation digging" },
    { title: "Drainage system installation" },
    { title: "Road and infrastructure work" },
    { title: "Landscaping and grading" },
    { title: "Underground utility installation" },
    { title: "Pool and basement excavation" },
  ],
  process: {
    title: "Our Excavation Process",
    steps: [
      {
        number: 1,
        title: "Consultation & GPR scan",
        description:
          "We discuss your project and excavation requirements. We then perform GPR scanning over the planned excavation zone to map utilities and obstructions. You receive a clear picture of what is underground before any digging.",
      },
      {
        number: 2,
        title: "Marking & approval",
        description:
          "We mark utilities and agree safe excavation limits with you. Any areas requiring hand digging or special care are identified. This step ensures everyone is aligned on safety and scope.",
      },
      {
        number: 3,
        title: "Excavation",
        description:
          "Our team carries out the excavation according to the plan and markings. We use appropriate methods—machine or hand—based on proximity to utilities and site conditions. Work is completed efficiently and safely.",
      },
      {
        number: 4,
        title: "Handover",
        description:
          "We leave the site in a safe, tidy state and provide any required documentation. Reports from the GPR scan are available for your records and future reference.",
      },
    ],
  },
  seoParagraphs: [
    {
      title: "Excavation Services in Dubai",
      content:
        "Excavation services in Dubai are in demand for new builds, infrastructure and MEP projects. Safe excavation requires knowing what is underground. Bhadeya Technical provides excavation with GPR scanning—we map utilities and obstructions before digging, reducing the risk of strikes and delays. We serve Dubai with 5+ years of experience and a focus on safety and efficiency.",
    },
    {
      title: "Excavation Services in Abu Dhabi",
      content:
        "In Abu Dhabi, excavation is required for government, oil & gas and civil projects. Our excavation services in Abu Dhabi include GPR-scanned zones, site preparation, utility trenching and foundation excavation. We work to UAE safety standards and cover Abu Dhabi city, Mussafah and surrounding areas.",
    },
    {
      title: "Why Choose GPR-Guided Excavation",
      content:
        "Excavating without subsurface information can lead to utility strikes, project delays and safety incidents. GPR-guided excavation gives you a map of what is underground before the first dig. Bhadeya Technical combines GPR scanning with professional excavation—so you get safe, efficient digging and peace of mind across Dubai and the UAE.",
    },
  ],
  relatedServices: [
    { href: "/services/gpr-scanning", label: "GPR Scanning" },
    { href: "/services/core-cutting", label: "Core Cutting" },
  ],
  faq: {
    title: "Frequently Asked Questions About Excavation",
    items: [
      {
        question: "Do you scan before excavation?",
        answer:
          "Yes. We perform GPR scanning before excavation to map underground utilities and obstructions. This allows us to plan safe excavation zones and avoid utility strikes. It is standard on all our excavation work.",
      },
      {
        question: "Which areas do you serve?",
        answer:
          "We serve Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain. Our team is mobile and can attend site across the UAE.",
      },
      {
        question: "What types of excavation do you do?",
        answer:
          "We provide site preparation, utility trenching, foundation excavation and grading. All excavation is supported by pre-dig GPR scanning where applicable.",
      },
      {
        question: "How long have you been providing excavation services?",
        answer:
          "We have 5+ years of experience providing excavation and GPR scanning services across the UAE. We are trusted by contractors and developers in Dubai, Abu Dhabi and beyond.",
      },
    ],
  },
  ctaTitle: "Need Excavation in Dubai or UAE?",
  ctaDescription:
    "Get a free quote for excavation with GPR-scanned zones. We respond within 1 hour during business hours.",
};

export default function ExcavationPage() {
  return <ServicePageTemplate data={excavationData} />;
}
