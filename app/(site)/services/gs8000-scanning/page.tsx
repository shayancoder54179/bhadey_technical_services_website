import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";

import { OG_IMAGES } from "@/lib/og-image";
export const metadata: Metadata = {
  title: "Underground Utility Scanning UAE",
  description:
    "Underground utility scanning across the UAE before you excavate. The Proceq GS8000 maps cables, pipes and ducts to 3–5 m, marked on site and reported.",
  keywords: [
    "GS8000 scanning Dubai",
    "Proceq GS8000 UAE",
    "underground utility scanning Dubai",
    "utility locating UAE",
    "buried cable detection Dubai",
    "pre-excavation utility survey UAE",
    "subsurface utility mapping Dubai",
    "ground penetrating radar excavation UAE",
  ],
  alternates: { canonical: "https://www.bhadeya.com/services/gs8000-scanning" },
  openGraph: {
    title: "GPR Ground Scanning Dubai & UAE | Underground Utility Locating | Bhadeya Technical",
    description:
      "Locate buried utilities before you dig. Proceq GS8000 ground radar reads 3-5m into soil. Dubai, Abu Dhabi, Sharjah & across the UAE.",
    url: "https://www.bhadeya.com/services/gs8000-scanning",
    type: "website",
    images: OG_IMAGES,
  },
};

const gs8000PageData: ServicePageData = {
  slug: "gs8000-scanning",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "GPR Ground Scanning", href: "/services/gs8000-scanning" },
  ],
  hero: {
    title: "GPR Ground Scanning in Dubai & UAE — Underground Utility Locating",
    subtitle:
      "Know what is buried before you dig. Our Proceq GS8000 ground penetrating radar maps power cables, water and sewer lines, telecom ducts, gas pipes, tanks and voids at 3–5 m depending on soil conditions — marked on site and issued as a survey report before excavation begins.",
    stats: [
      { value: "3–5m", label: "Depth in soil" },
      { value: "Proceq GS8000", label: "Equipment" },
      { value: "All UAE", label: "Coverage" },
    ],
    ctaPrimaryLabel: "Get Free Quote via WhatsApp",
    ctaPrimaryHref:
      "https://wa.me/971556926286?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20GS8000%20underground%20utility%20scanning.",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
  },
  overview: {
    title: "What is GPR Ground Scanning?",
    description:
      "Underground utility scanning is a ground survey carried out before excavation to find out what is buried beneath a site. Using the Proceq GS8000 ground penetrating radar, we push a survey cart over the area in a grid pattern, reading reflections from buried objects and building a map of the services below. Working depth is typically 3–5 m and depends on the soil: dry sand allows deeper penetration, while wet ground, heavy clay and saturated fill reduce it. Findings are marked directly on the surface and issued as a report, so the excavation crew works from a map instead of a guess. This is a different instrument and a different job from concrete scanning — the GP8000 images the inside of concrete, the GS8000 images the ground.",
    howItWorks: [
      {
        step: 1,
        title: "Survey grid set-out",
        description:
          "We define the survey area and set a scanning grid so the whole footprint is covered with no gaps. Access, surface condition and any known services are noted before we start.",
      },
      {
        step: 2,
        title: "Ground scanning with the GS8000",
        description:
          "The GS8000 cart is run over the grid, transmitting stepped-frequency radar pulses into the ground and recording reflections from buried utilities, tanks, voids and obstructions in real time.",
      },
      {
        step: 3,
        title: "Marking & reporting",
        description:
          "Detected services are painted onto the ground with estimated depths, and the data is processed into a survey report with a mapped plan you can hand to the excavation crew and the client.",
      },
    ],
    benefits: [
      "Know what is buried before excavation starts",
      "Avoid utility strikes, injuries and shutdowns",
      "Prevent repair bills and programme delays",
      "Support authority and client pre-dig requirements",
      "Faster and safer than exploratory trial pits",
      "Scanning and excavation from one contractor",
    ],
  },
  equipment: {
    title: "Equipment We Use",
    name: "Proceq GS8000",
    description:
      "The Proceq GS8000 is a subsurface mapping ground penetrating radar built specifically for utility locating in soil. It uses stepped-frequency continuous wave technology across an ultra-wide 0.2–3.4 GHz bandwidth, balancing penetration depth and object resolution in a single pass, and covers large areas quickly — which makes it suited to roads, yards, compounds and open sites as well as tight trench corridors.",
    specs: [
      { label: "Working depth", value: "3–5 m, soil-dependent" },
      { label: "Technology", value: "Stepped-frequency GPR" },
      { label: "Bandwidth", value: "0.2–3.4 GHz" },
      { label: "Output", value: "Mapped survey report" },
    ],
    whyBest:
      "Depth in ground is decided by the soil, not by marketing. Dry desert sand can let the GS8000 read deeper than 5 m, while wet or clay-heavy ground can pull it back below 3 m — so we quote 3–5 m as the realistic working range and tell you on site what the conditions allow. Alongside it we run the Proceq GP8000 for concrete, which means the right radar goes to the right job rather than one machine being stretched across both.",
  },
  features: [
    { title: "Working depth 3–5 m in soil", description: "Realistic range for UAE ground conditions." },
    { title: "Locates all common buried services", description: "Power, water, sewer, telecom, gas and unknown lines." },
    { title: "Detects tanks, voids and obstructions", description: "Not just utilities — anything that stops a dig." },
    { title: "On-site marking and paint-out", description: "Findings marked where the crew needs them." },
    { title: "Mapped survey report", description: "Documented positions and depths for your records." },
    { title: "Large-area grid coverage", description: "Roads, yards, compounds and open sites scanned quickly." },
  ],
  applications: [
    { title: "Pre-excavation utility surveys" },
    { title: "Trenching and utility corridor clearance" },
    { title: "Road and highway subsurface surveys" },
    { title: "Buried tank and void detection" },
    { title: "Site investigation before piling" },
    { title: "Utility mapping for as-built records" },
    { title: "Landscaping and compound works" },
    { title: "Infrastructure and municipality projects" },
  ],
  process: {
    title: "Our Underground Scanning Process",
    steps: [
      {
        number: 1,
        title: "Consultation & site brief",
        description:
          "We confirm the survey area, the depth of the planned excavation, access arrangements and any existing service drawings. This tells us the grid spacing and time required, and lets us give you a fixed price before mobilising.",
      },
      {
        number: 2,
        title: "On-site ground scanning",
        description:
          "Our technician surveys the area with the Proceq GS8000 on a set grid. Scanning is non-destructive and does not disturb the surface, so it can be done on live sites, roads and finished compounds.",
      },
      {
        number: 3,
        title: "Marking & interpretation",
        description:
          "Detected services are painted on the ground with estimated depths and routes. Anything uncertain is flagged as a hand-dig zone rather than being presented as a clear result.",
      },
      {
        number: 4,
        title: "Survey report & handover",
        description:
          "We issue a report with a mapped plan of the detected utilities, depth estimates and recommendations on where machine excavation is safe and where hand digging is required.",
      },
    ],
  },
  seoParagraphs: [
    {
      title: "Underground Utility Scanning in Dubai",
      content:
        "Dubai sites are densely serviced — DEWA power, Etisalat and du ducting, district cooling, sewer and irrigation lines often run through the same corridor. Scanning before excavation is the only practical way to see them without digging trial pits across the whole site. Bhadeya Technical provides GS8000 underground utility scanning across Dubai, covering roads, plots, compounds and infrastructure works, with on-site marking and survey reports suitable for contractor QA and authority submissions.",
    },
    {
      title: "Underground Utility Scanning in Abu Dhabi",
      content:
        "In Abu Dhabi, pre-excavation surveys are routine on government, oil and gas and civil projects where a utility strike carries serious consequences. Our GS8000 ground scanning covers Abu Dhabi city, Mussafah, Khalifa City, Yas Island and the industrial zones, mapping buried services to 3–5 m depending on soil conditions and delivering documentation that supports project safety files.",
    },
    {
      title: "Why Scan the Ground Before Excavating",
      content:
        "A single strike on a live cable or a pressurised main can injure a crew, shut down a district, trigger authority penalties and stop a programme for weeks — and the repair bill will always exceed the cost of a scan. Ground scanning converts that risk into a known quantity before the machine arrives. Because Bhadeya Technical carries out both the survey and the excavation with its own team and equipment, there is no gap in responsibility between the map and the dig.",
    },
  ],
  peopleAlsoAsk: [
    {
      question: "How deep can the GS8000 scan?",
      answer:
        "Typically 3–5 m in soil, depending on ground conditions. Dry sand allows deeper penetration; wet ground, heavy clay and saturated fill reduce it. We assess conditions on site and tell you the realistic depth for your ground rather than quoting a best-case figure.",
    },
    {
      question: "What is the difference between the GS8000 and the GP8000?",
      answer:
        "The GS8000 scans ground and soil for buried utilities before excavation, reaching 3–5 m depending on conditions. The GP8000 scans concrete for rebar, post-tension cables and conduits before cutting or drilling, reaching up to 1 m in concrete. They are separate machines for separate jobs, and Bhadeya Technical operates both.",
    },
    {
      question: "Can you detect plastic pipes?",
      answer:
        "Yes. Ground penetrating radar responds to the contrast between a buried object and the surrounding soil, so it detects non-metallic services such as PVC and HDPE pipes that electromagnetic cable locators miss. Detection is strongest where the pipe is a clear contrast to the soil and can be harder in very wet or heterogeneous ground.",
    },
    {
      question: "How long does a utility survey take?",
      answer:
        "A single trench corridor or small plot is usually surveyed and marked within a few hours. Larger sites, road sections and full compounds are scoped by area and may take a full day or more. We confirm timing and price after reviewing the survey area with you.",
    },
  ],
  relatedServices: [
    { href: "/services/excavation", label: "Excavation" },
    { href: "/services/gpr-scanning", label: "GPR Concrete Scanning" },
    { href: "/services/interlock-road-pavement", label: "Interlock & Road Pavement" },
  ],
  faq: {
    title: "Frequently Asked Questions About Underground Utility Scanning",
    items: [
      {
        question: "Do I need a utility survey before excavating?",
        answer:
          "In practice, yes. Most UAE main contractors, consultants and authorities expect a pre-excavation utility survey, and any site with existing services carries real risk without one. Even where no drawing shows a service, abandoned and undocumented lines are common — scanning is what turns an assumption into a record.",
      },
      {
        question: "How deep can you scan into the ground?",
        answer:
          "Our Proceq GS8000 works to 3–5 metres in soil, depending on ground conditions. Dry sandy ground allows deeper penetration, while wet ground, clay and saturated fill reduce it. If your excavation is deeper than the ground allows us to read, we will tell you that up front rather than after the survey.",
      },
      {
        question: "What can the GS8000 detect?",
        answer:
          "Power cables, water and sewer lines, telecom and fibre ducts, gas pipes, drainage, irrigation lines, buried tanks, voids and general obstructions — both metallic and non-metallic, including plastic pipes that cable locators cannot find.",
      },
      {
        question: "Do you provide a report?",
        answer:
          "Yes. Every survey includes on-site marking of detected services with estimated depths, plus a survey report with a mapped plan and recommendations on where machine excavation is safe and where hand digging is advised. Reports are suitable for contractor QA files and authority submissions.",
      },
      {
        question: "Can you scan and then do the excavation?",
        answer:
          "Yes, and most clients prefer it. Bhadeya Technical provides both the GS8000 survey and the excavation, so the crew digging the ground is working from a survey done by the same company. There is no third-party handover and no dispute about who owns the result.",
      },
      {
        question: "Which areas do you cover?",
        answer:
          "Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain. Our team is mobile and attends site with all equipment, with same-day or next-day response for most Dubai locations.",
      },
    ],
  },
  ctaTitle: "Find Out What Is Buried Before You Dig",
  ctaDescription:
    "Get a free quote for a GS8000 underground utility survey. Send us your site location and dig area and we respond within 1 hour during business hours.",
};

export default function GS8000ScanningPage() {
  return <ServicePageTemplate data={gs8000PageData} />;
}
