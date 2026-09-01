import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";

import { OG_IMAGES } from "@/lib/og-image";
export const metadata: Metadata = {
  title: "Excavation Services Dubai & UAE",
  description:
    "GPR-guided excavation across Dubai, Abu Dhabi and Sharjah. We scan the ground before digging, so your crew works from a utility map, not a guess.",
  keywords: [
    "excavation services Dubai",
    "excavation UAE",
    "safe excavation Dubai",
    "utility trenching UAE",
    "foundation excavation Dubai",
    "GPR scanning before excavation Dubai",
    "pre-excavation utility survey UAE",
  ],
  alternates: { canonical: "https://www.bhadeya.com/services/excavation" },
  openGraph: {
    title: "Excavation Dubai & UAE | We Scan Before We Dig | Bhadeya Technical",
    description:
      "Every excavation starts with a GPR scan. Proceq GS8000 reads 3-5m into the ground to find buried utilities before the first bucket. Dubai, Abu Dhabi & UAE.",
    url: "https://www.bhadeya.com/services/excavation",
    type: "website",
    images: OG_IMAGES,
  },
};

const excavationData: ServicePageData = {
  slug: "excavation",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Excavation", href: "/services/excavation" },
  ],
  hero: {
    title: "Excavation in Dubai & UAE — We Scan Before We Dig",
    subtitle:
      "Before any machine breaks ground, we survey the dig area with our Proceq GS8000 ground radar, reading 3–5 m into the soil depending on ground conditions. Buried cables, pipes and ducts are located and marked first, then we excavate. Site preparation, utility trenching, foundation excavation. 7+ years serving Dubai, Abu Dhabi, Sharjah and across the UAE.",
    stats: [
      { value: "Scan first", label: "On every dig" },
      { value: "3–5m", label: "Ground scan depth" },
      { value: "7+ Years", label: "Experience" },
    ],
    ctaPrimaryLabel: "Get Free Quote",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
    image: {
      src: "/images/tenweb_media_sb87wloxc.webp",
      alt: "Professional excavation services in Dubai UAE - safe GPR-guided excavation at construction site by Bhadeya Technical Services",
    },
  },
  overview: {
    title: "What Are Our Excavation Services?",
    description:
      "Before you excavate, you scan — that is the rule we work to on every job. Our excavation services cover site preparation, utility trenching, foundation excavation and grading for construction and civil projects across the UAE, and each one begins with a GPR survey of the dig area using our Proceq GS8000. It reads 3–5 m into the ground depending on soil conditions, locating power cables, water and sewer lines, telecom ducts, gas pipes and voids before the first bucket goes in. Because the scanning and the digging are both ours, there is no waiting on a third-party surveyor and no gap in responsibility between the survey and the excavation. We serve Dubai, Abu Dhabi, Sharjah and the wider UAE with experienced operators and full compliance with local safety regulations.",
    howItWorks: [
      {
        step: 1,
        title: "GPR scan of the dig area",
        description:
          "Nothing is excavated until the ground is scanned. We survey the dig area with the Proceq GS8000 to map buried utilities and obstructions, defining safe excavation zones and flagging anything that must be hand-dug.",
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
      "GPR scan before every dig, without exception",
      "Ground read to 3–5 m depending on soil",
      "Reduced risk of utility strikes",
      "Efficient project timelines",
      "Experienced and certified operators",
      "Compliance with UAE regulations",
      "Integrated scanning and excavation",
    ],
  },
  equipment: {
    title: "Equipment & Approach",
    name: "Professional Excavation Machinery + Proceq GS8000",
    description:
      "We combine modern excavation machinery with the Proceq GS8000 ground scanning radar. Before any excavation we survey the dig area with the GS8000, which reads 3–5 m into the soil depending on ground conditions, and mark what is buried. Our operators are trained in safe digging practices and we follow UAE safety standards. This sequence—scan first, then controlled excavation—delivers safe, efficient results across Dubai, Abu Dhabi and the UAE.",
    specs: [
      { label: "Ground scan depth", value: "3–5 m, soil-dependent" },
      { label: "Scanner", value: "Proceq GS8000" },
      { label: "Experience", value: "7+ years" },
      { label: "Coverage", value: "All UAE" },
    ],
    whyBest:
      "Many excavation contractors dig without subsurface mapping and find the utility with the bucket. We scan first with the GS8000, then excavate with full awareness of what is underground. This reduces utility strikes, delays and costly repairs—and gives you confidence that the work is done safely.",
  },
  features: [
    { title: "GPR scan before every dig", description: "Proceq GS8000 locates utilities and obstructions before digging." },
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
          "We discuss your project and excavation requirements, then scan the planned dig area with the Proceq GS8000 to map utilities and obstructions at 3–5 m depending on soil conditions. You receive a clear picture of what is underground before any digging — this step is not optional on our jobs.",
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
        "Excavation services in Dubai are in demand for new builds, infrastructure and MEP projects. Safe excavation requires knowing what is underground. Bhadeya Technical provides excavation with GPR scanning—we map utilities and obstructions before digging, reducing the risk of strikes and delays. We serve Dubai with 7+ years of experience and a focus on safety and efficiency.",
    },
    {
      title: "Excavation Services in Abu Dhabi",
      content:
        "In Abu Dhabi, excavation is required for government, oil & gas and civil projects. Our excavation services in Abu Dhabi include GPR-scanned zones, site preparation, utility trenching and foundation excavation. We work to UAE safety standards and cover Abu Dhabi city, Mussafah and surrounding areas.",
    },
    {
      title: "Why Choose GPR-Guided Excavation",
      content:
        "Excavating without subsurface information can lead to utility strikes, injuries, authority penalties and project delays. Scanning before you excavate gives you a map of what is underground before the first dig, and the cost of the scan is a fraction of the cost of one strike. Bhadeya Technical carries out the GPR survey and the excavation with its own team and its own Proceq GS8000—so you get safe, efficient digging, one point of responsibility, and peace of mind across Dubai and the UAE.",
    },
  ],
  relatedServices: [
    { href: "/services/gs8000-scanning", label: "GPR Ground Scanning" },
    { href: "/services/gpr-scanning", label: "GPR Concrete Scanning" },
    { href: "/services/interlock-road-pavement", label: "Interlock & Road Pavement" },
    { href: "/services/core-cutting", label: "Core Cutting" },
  ],
  faq: {
    title: "Frequently Asked Questions About Excavation",
    items: [
      {
        question: "Do you scan before excavation?",
        answer:
          "Yes — always, on every job. Before we excavate we scan the dig area with our Proceq GS8000 ground radar, which reads 3–5 metres into the soil depending on ground conditions. We map and mark buried power cables, water and sewer lines, telecom ducts, gas pipes and voids, agree the safe dig limits with you, and only then bring in the machine. It is not an optional extra on our excavation work — it is how the job starts.",
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
          "We have 7+ years of experience providing excavation and GPR scanning services across the UAE. We are trusted by contractors and developers in Dubai, Abu Dhabi and beyond.",
      },
    ],
  },
  ctaTitle: "Need Excavation in Dubai or UAE?",
  ctaDescription:
    "Get a free quote for excavation with a GPR ground scan before the first dig. We respond within 1 hour during business hours.",
};

export default function ExcavationPage() {
  return <ServicePageTemplate data={excavationData} />;
}
