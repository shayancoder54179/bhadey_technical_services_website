import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";

import { OG_DEFAULTS, OG_IMAGES, twitterCard } from "@/lib/og-image";
export const metadata: Metadata = {
  title: "Concrete Scanning Dubai & UAE | GPR Survey",
  description:
    "UAE-wide GPR survey and concrete scanning. Locate rebar, post-tension cables and conduits before you cut or drill — no radiation, single-sided access.",
  keywords: [
    "GPR survey UAE",
    "GPR survey",
    "GPR scanning UAE",
    "ground penetrating radar near me",
    "GPR scanning near me",
    "Proceq GP8000 scanning",
    "post tension scanning",
    "concrete x-ray alternative",
    "rebar detection UAE",
    "subsurface scanning UAE",
  ],
  alternates: { canonical: "https://www.bhadeya.com/services/gpr-scanning" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Concrete Scanning Dubai & UAE | GPR Rebar & PT Detection | Bhadeya Technical",
    description:
      "GPR survey and concrete scanning across the UAE. 1.5m in concrete, up to 10m in ground. Rebar, post-tension and utility detection with no radiation and no site evacuation.",
    url: "https://www.bhadeya.com/services/gpr-scanning",
    type: "website",
    images: OG_IMAGES,
  },
  twitter: twitterCard(
    "Concrete Scanning Dubai & UAE | GPR Rebar & PT Detection | Bhadeya Technical",
    "GPR survey and concrete scanning across the UAE. 1.5m in concrete, up to 10m in ground. Rebar, post-tension and utility detection with no radiation and no site evacuation."
  ),
};

const gprPageData: ServicePageData = {
  slug: "gpr-scanning",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "GPR Concrete Scanning", href: "/services/gpr-scanning" },
  ],
  hero: {
    title: "Concrete Scanning in Dubai & Across the UAE",
    subtitle:
      "A GPR survey with the industry-leading Proceq GP8000 detects rebar, post-tension cables, conduits and voids up to 1.5 m deep in concrete—non-destructively, with no radiation and no need to evacuate the area, and with full reporting. For buried utilities in soil, our Proceq GS8000 reads up to 10 m depending on ground conditions. We survey across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain, and are trusted by Dubai Mall, Emaar and ADNOC.",
    stats: [
      { value: "1.5m", label: "Depth in concrete" },
      { value: "Up to 10m", label: "Depth in soil (GS8000)" },
      { value: "±10mm", label: "Positional accuracy" },
    ],
    ctaPrimaryLabel: "Get Free Quote via WhatsApp",
    ctaPrimaryHref:
      "https://wa.me/971556926286?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20quote%20for%20GPR%20scanning%20services.",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
    image: {
      src: "/images/7272030 (1).jpg",
      alt: "Professional GPR scanning service in Dubai using Proceq GP8000 ground penetrating radar for rebar detection and subsurface scanning in UAE",
    },
  },
  overview: {
    title: "What is a GPR Survey?",
    description:
      "A GPR (Ground Penetrating Radar) survey is a non-destructive testing method that uses radar pulses to image the subsurface of concrete and ground. It detects and maps rebar, post-tension cables, electrical conduits, plumbing, voids and other embedded objects before any cutting, drilling or excavation. Because the survey is done from one accessible face with no ionising radiation, work can continue around it — unlike concrete x-ray, which needs access to both sides of the element and the area cleared. This prevents costly damage, ensures structural safety and protects workers. Across the UAE, a GPR survey is a standard requirement before safe construction and renovation work.",
    howItWorks: [
      {
        step: 1,
        title: "Scan planning & grid setup",
        description:
          "We define the scan area and set a systematic grid to ensure full coverage. This ensures no zones are missed and data is consistent.",
      },
      {
        step: 2,
        title: "Data collection with Proceq GP8000",
        description:
          "Our technician moves the GPR antenna over the surface. The GP8000 sends electromagnetic pulses into the material and records reflections from embedded objects in real time.",
      },
      {
        step: 3,
        title: "Analysis & reporting",
        description:
          "Data is processed and interpreted to produce marked-up drawings, depth estimates and a professional report you can use for planning and compliance.",
      },
    ],
    benefits: [
      "Prevent hitting rebar and post-tension cables",
      "Avoid costly utility damage and delays",
      "Ensure worker and structural safety",
      "Meet UAE construction safety compliance",
      "Accurate pre-construction planning",
      "Non-destructive—no damage to the structure",
    ],
  },
  equipment: {
    title: "Equipment We Use",
    image: {
      src: "/images/WhatsApp Image 2025-12-28 at 00.56.41.jpeg",
      alt: "Proceq GP8000 ground penetrating radar held against a concrete soffit during a Bhadeya scan",
      caption: "Our Proceq GP8000 scanning a concrete soffit on site.",
    },
    name: "Proceq GP8000",
    description:
      "The Proceq GP8000 is a state-of-the-art ground penetrating radar system that provides real-time 3D visualization of concrete structures. It enables accurate detection of rebar, post-tension cables, conduits and voids at depths up to 1.5 m in concrete, with high resolution and reliability. Used by leading contractors and consultants worldwide, the GP8000 is the gold standard for concrete scanning in the UAE. For scanning the ground rather than concrete—locating buried utilities before excavation—we operate the Proceq GS8000, which reaches up to 10 m depending on soil conditions.",
    specs: [
      { label: "Depth in concrete", value: "Up to 1.5 m" },
      { label: "Positional accuracy", value: "±10 mm" },
      { label: "Output", value: "Real-time 3D imaging" },
      { label: "Ground scanning", value: "GS8000, 5–10 m in soil" },
    ],
    whyBest:
      "The GP8000 is built for concrete and the GS8000 is built for ground—we operate both, so the right instrument goes to the right job. Real-time 3D visualization helps our team and your engineers make fast, confident decisions on-site, and honest depth figures mean you know exactly what a scan can and cannot tell you before we mobilise.",
  },
  features: [
    { title: "Up to 1.5 m scanning depth in concrete", description: "Full coverage of slabs, walls, beams and columns." },
    { title: "Real-time 3D visualization", description: "See subsurface structures as we scan." },
    { title: "Rebar, PT cables & conduit detection", description: "Accurate mapping of all critical embedded elements." },
    { title: "Non-destructive and safe", description: "No damage to the structure; safe for occupants and workers." },
    { title: "Detailed professional reports", description: "Marked-up drawings and recommendations for your records." },
    { title: "Pre-cutting safety verification", description: "Standard practice before any core cutting or drilling." },
  ],
  applications: [
    { title: "Pre-core cutting scanning" },
    { title: "Post-tension cable detection" },
    { title: "Rebar mapping and cover measurement" },
    { title: "Void and delamination detection" },
    { title: "Utility locating in concrete" },
    { title: "Slab-on-grade inspection" },
    { title: "Bridge deck assessment" },
    { title: "Structural integrity evaluation" },
  ],
  galleryImages: [
    { src: "/images/WhatsApp Image 2025-12-28 at 00.56.37.jpeg", alt: "Bhadeya Technical Services GPR scanning at construction site Dubai - technician using ground penetrating radar on ceiling" },
    { src: "/images/WhatsApp Image 2025-12-28 at 00.56.38.jpeg", alt: "GPR scanning grid and coordinate marking for subsurface scanning rebar detection UAE" },
    { src: "/images/WhatsApp Image 2025-12-28 at 00.56.39 (2).jpeg", alt: "Ground penetrating radar scan markings and core-drilled hole on concrete slab Dubai project" },
    { src: "/images/WhatsApp Image 2025-12-28 at 00.56.39.jpeg", alt: "Concrete surface with GPR scanning markings for rebar detection Dubai UAE" },
    { src: "/images/WhatsApp Image 2025-12-28 at 00.56.40.jpeg", alt: "Proceq GP8000 GPR scanner detecting subsurface utilities at construction site UAE" },
  ],
  galleryTitle: "GPR Scanning in Action",
  process: {
    title: "Our GPR Survey Process",
    steps: [
      {
        number: 1,
        title: "Consultation & planning",
        description:
          "We discuss your project, scope and deliverables. We confirm scan areas, access and any specific concerns (e.g. post-tension cables, utilities). A site visit or detailed brief ensures we bring the right setup and allocate the right time.",
      },
      {
        number: 2,
        title: "On-site GPR scanning",
        description:
          "Our certified technician performs the scan using the Proceq GP8000, following a defined grid. We mark findings on the surface where required and capture all data for analysis.",
      },
      {
        number: 3,
        title: "Analysis & reporting",
        description:
          "We process the data and produce a professional report with marked-up plans, depth estimates, object identification and clear recommendations for safe cutting or construction.",
      },
      {
        number: 4,
        title: "Recommendations",
        description:
          "We provide actionable recommendations—where it is safe to cut or drill, and where to avoid. This supports your design, construction and safety compliance across Dubai and the UAE.",
      },
    ],
  },
  seoParagraphs: [
    {
      title: "GPR Survey Across the UAE",
      content:
        "Bhadeya Technical carries out GPR surveys across the whole country, not one emirate. Our service areas are Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain, and both scanners are based at our office in Al Khabeesi, Deira, Dubai — so a survey team and the equipment travel together to your site rather than being hired in. For most Dubai and Sharjah addresses we can attend the same day, with same-day service available for Dubai projects booked before 12PM, and next-day mobilisation is normal for Abu Dhabi city and the surrounding zones. We work Sunday to Thursday, 8:00 AM to 6:00 PM, and Saturday 9:00 AM to 3:00 PM, and reply to survey requests within 1 hour during those hours.",
    },
    {
      title: "Post-Tension Scanning Before You Cut",
      content:
        "Post-tension scanning is the single most safety-critical reason to survey a slab before drilling. Post-tension strands sit under extreme tension — typically 140–200 kN per strand — and cutting one can cause immediate slab collapse rather than a repairable hole. Concrete slabs in UAE high-rise and commercial buildings very often contain them, which is why every penetration point we clear is surveyed first. Our Proceq GP8000 images the strand layout in real-time 3D so the technician can mark both the cable runs and the safe drilling zones directly on the surface, then issue a report showing positions and depths. If a strand sits exactly where you need to cut, we stop and tell you before anything is drilled, and mark the nearest clear alternative.",
    },
    {
      title: "GPR Scanning in Dubai",
      content:
        "GPR scanning in Dubai is essential for high-rise, commercial and infrastructure projects. Before core cutting, drilling or demolition, contractors and consultants rely on GPR to locate rebar, post-tension cables and utilities. Bhadeya Technical provides professional GPR scanning services across Dubai using the Proceq GP8000, scanning up to 1.5 m into concrete with detailed reporting. For ground works we deploy the Proceq GS8000, which locates buried utilities at up to 10 m depending on soil conditions. We serve developers, main contractors and MEP teams on projects ranging from fit-outs to major new builds.",
    },
    {
      title: "GPR Scanning in Abu Dhabi",
      content:
        "In Abu Dhabi, GPR scanning is used for government, oil & gas and large-scale civil projects where safety and accuracy are paramount. Our GPR scanning services in Abu Dhabi include rebar detection, post-tension cable locating and utility mapping. We use the Proceq GP8000 for consistent, reliable results and deliver reports that meet project and regulatory requirements. We cover Abu Dhabi city, Mussafah, Yas Island and surrounding areas.",
    },
    {
      title: "Why Choose Professional GPR Scanning",
      content:
        "Choosing a professional GPR scanning provider ensures correct equipment, trained technicians and reliable reports. Amateur or unqualified scanning can miss critical elements and lead to costly damage or safety incidents. Bhadeya Technical uses the Proceq GP8000, follows a strict process and delivers reports you can trust for planning and compliance. We are trusted by names such as Dubai Mall, Emaar and ADNOC.",
    },
  ],
  peopleAlsoAsk: [
    {
      question: "How much does a GPR survey cost?",
      answer:
        "GPR survey costs in Dubai and the wider UAE vary based on the area to be scanned, complexity, access and location. Contact Bhadeya Technical Services with your site address and scan area for a free, customized quote. We offer competitive pricing for all project sizes.",
    },
    {
      question: "How accurate is GPR scanning?",
      answer:
        "Our Proceq GP8000 GPR scanner detects rebar, post-tension cables, conduits, voids, and utilities with positional accuracy within ±10mm under ideal conditions. Accuracy depends on concrete mix, moisture content, and object depth — our technicians will advise if site conditions could affect results. The GP8000 scans up to 1.5 m into concrete; for ground scanning our GS8000 reaches up to 10 m depending on soil.",
    },
    {
      question: "How long does GPR scanning take?",
      answer:
        "A typical GPR scan takes 30 minutes to 2 hours for a standard area. Larger projects may require a full day. We provide time estimates during consultation.",
    },
    {
      question: "Do I need GPR scanning before core cutting?",
      answer:
        "Yes, GPR scanning before core cutting is essential and often required by UAE safety regulations. It prevents hitting rebar, post-tension cables, and embedded utilities, avoiding costly damage and safety hazards.",
    },
  ],
  relatedServices: [
    { href: "/gpr-scanning-dubai", label: "Get a Fast GPR Quote in Dubai" },
    { href: "/services/gpr-ground-scanning", label: "GPR Ground Scanning" },
    { href: "/services/core-cutting", label: "Core Cutting" },
    { href: "/services/excavation", label: "Excavation" },
  ],
  faq: {
    title: "Frequently Asked Questions About GPR Surveys",
    items: [
      {
        question: "Is there a GPR scanning company near me?",
        answer:
          "If your site is in the UAE, yes. We are based in Al Khabeesi, Deira, Dubai, and both the Proceq GP8000 concrete scanner and the GS8000 ground scanner are kept here — we are a mobile survey team and bring everything to site. We cover Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain. Most Dubai and Sharjah addresses can be attended the same day, with same-day service available for Dubai projects booked before 12PM, and next-day mobilisation is normal for Abu Dhabi city and the surrounding zones. We work Sunday to Thursday 8:00 AM to 6:00 PM and Saturday 9:00 AM to 3:00 PM, and reply within 1 hour during those hours. Send us your site address on WhatsApp and we will confirm how soon we can reach you.",
      },
      {
        question: "GPR scanning vs concrete x-ray — which is safer?",
        answer:
          "GPR is the safer method on almost every UAE site. It uses low-power radio-frequency pulses and emits no ionising radiation, so there is no exclusion zone, no radiation shielding, no permits for radioactive sources and no need to evacuate the area — adjacent floors and occupied spaces can keep working while we survey. It also needs access to one face only, so ground-bearing slabs, rafts and retaining walls can be scanned at all, and results appear in real time so safe zones are marked on the concrete during the visit rather than after film is developed. Concrete x-ray requires both faces of the element to be accessible and both sides cleared of people, though it does resolve finer detail in very heavily congested reinforcement. For everything else, GPR is the appropriate method.",
      },
      {
        question: "Do you carry out post-tension scanning?",
        answer:
          "Yes — post-tension cable detection is a core part of every concrete survey we do. The Proceq GP8000 images strand runs in real-time 3D up to 1.5 m into concrete, and we mark both the cables and the clear drilling positions on the surface before any core cutting or drilling begins. Post-tension strands carry roughly 140–200 kN each, so cutting one risks slab collapse rather than a repairable hole. Where a required penetration falls directly on a strand, we stop, tell you, and mark the nearest safe alternative rather than cutting and reporting afterwards.",
      },
      {
        question: "What is GPR scanning and why is it important?",
        answer:
          "GPR (Ground Penetrating Radar) scanning is a non-destructive testing method that uses radar pulses to image the subsurface of concrete and ground. It is crucial before any core cutting, drilling or excavation to detect rebar, post-tension cables, electrical conduits, plumbing and other embedded utilities. This prevents costly damage, ensures structural safety and protects workers.",
      },
      {
        question: "How deep can your GPR scanner detect objects?",
        answer:
          "It depends on the material. In concrete, our Proceq GP8000 scans up to 1.5 metres deep — which covers slabs, walls, beams and columns, where rebar and post-tension cables normally sit within the first 10–30cm. In ground and soil, our Proceq GS8000 reaches 5–10 metres depending on soil conditions: dry sand allows deeper penetration, wet ground and heavy clay reduce it. We operate both machines across Dubai and the UAE, so concrete work and pre-excavation surveys each get the correct instrument.",
      },
      {
        question: "Which areas in the UAE do you serve?",
        answer:
          "We provide GPR scanning across the UAE including Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain. Our team is mobile and can reach any project site in the Emirates.",
      },
      {
        question: "Is GPR scanning safe?",
        answer:
          "Yes. GPR uses low-power radio waves and is non-destructive. It does not emit harmful radiation and is safe for operators, workers and the structure. There is no damage to the scanned surface.",
      },
    ],
  },
  ctaTitle: "Need a GPR Survey Anywhere in the UAE?",
  ctaDescription:
    "Get a free quote for a GPR survey with the Proceq GP8000. Send us your site address and we respond within 1 hour during business hours.",
};

// The Service entity for this page is emitted by ServicePageTemplate from the
// central registry in components/seo/JsonLd.tsx — only the FAQ lives here.
const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: gprPageData.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function GPRScanningPage() {
  return (
    <>
      {pageSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicePageTemplate data={gprPageData} />
    </>
  );
}
