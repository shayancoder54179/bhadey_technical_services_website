import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";

export const metadata: Metadata = {
  title: "Interlock Paving & Road Works UAE",
  description:
    "Interlock paving and road works across Dubai, Abu Dhabi and Sharjah. Driveways, car parks and access roads laid on a properly compacted sub-base.",
  keywords: [
    "interlock Dubai",
    "interlock tiles UAE",
    "interlock paving contractor Dubai",
    "road pavement Dubai",
    "interlock repair UAE",
    "driveway paving Dubai",
    "parking area paving UAE",
    "hardstanding contractor Dubai",
  ],
  alternates: {
    canonical: "https://www.bhadeya.com/services/interlock-road-pavement",
  },
  openGraph: {
    title: "Interlock & Road Pavement Dubai & UAE | Bhadeya Technical",
    description:
      "Interlock laying, repair and re-levelling plus road pavement works across the UAE. Sub-base done properly so the surface stays level.",
    url: "https://www.bhadeya.com/services/interlock-road-pavement",
    type: "website",
  },
};

const interlockPageData: ServicePageData = {
  slug: "interlock-road-pavement",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Interlock & Road Pavement", href: "/services/interlock-road-pavement" },
  ],
  hero: {
    title: "Interlock & Road Pavement Works in Dubai & UAE",
    subtitle:
      "Interlock tile laying, repair and re-levelling, plus road pavement and hardstanding works for driveways, parking areas, yards and internal site roads. We handle the excavation, sub-base and compaction ourselves — which is what decides whether paving stays flat or sinks within a year.",
    stats: [
      { value: "Lay, repair & re-level", label: "Scope" },
      { value: "7+ Years", label: "Experience" },
      { value: "All UAE", label: "Coverage" },
    ],
    ctaPrimaryLabel: "Get Free Quote via WhatsApp",
    ctaPrimaryHref:
      "https://wa.me/971556926286?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20interlock%20and%20road%20pavement%20works.",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
  },
  overview: {
    title: "What Are Our Interlock & Road Pavement Services?",
    description:
      "We lay, repair and re-level interlock paving and carry out road pavement works across the UAE — driveways, parking areas, warehouse yards, walkways, landscaping paths and internal site roads. The visible part of the job is the tile; the part that determines how long it lasts is underneath it. Most interlock failures are sub-base failures: paving sinks, rocks or ponds because the ground was not excavated to the right level, the sub-base was not compacted properly, or the falls were never set for drainage. Because we already run excavation and ground scanning as core services, we control that layer instead of inheriting it — including locating buried utilities before breaking ground on a site where services run beneath the paving.",
    howItWorks: [
      {
        step: 1,
        title: "Excavation & sub-base",
        description:
          "We excavate to the required formation level, scan first where buried services may be present, then lay and compact the sub-base in layers to carry the intended load — pedestrian, car or heavy vehicle.",
      },
      {
        step: 2,
        title: "Levels, falls & edge restraints",
        description:
          "Levels and falls are set so water drains away rather than ponding, and kerbstones or edge restraints are installed to stop the paving spreading sideways under load.",
      },
      {
        step: 3,
        title: "Laying, cutting & compaction",
        description:
          "Tiles are laid to the agreed pattern, cut cleanly at edges and around fixtures, then jointed with sand and compacted to lock the surface together.",
      },
    ],
    benefits: [
      "Paving that stays level — sub-base done properly",
      "Correct falls, so water drains instead of ponding",
      "Utilities located before excavation begins",
      "Excavation, scanning and paving from one contractor",
      "Clean reinstatement after utility or trenching works",
      "Coverage across Dubai, Abu Dhabi, Sharjah and the UAE",
    ],
  },
  equipment: {
    title: "Equipment & Approach",
    name: "Compaction, Levelling & Paving Equipment",
    description:
      "Interlock and pavement works are carried out with plate compactors and rollers for the sub-base and final lock-up, block cutters for clean edge and fixture cuts, and laser levelling for accurate formation levels and falls. This is supported by our own excavation machinery and, where buried services may be present, by GPR ground scanning before we break ground — so the paving crew is never the one to discover a live cable.",
    specs: [
      { label: "Scope", value: "Lay, repair & re-level" },
      { label: "Sub-base", value: "Layered & compacted" },
      { label: "Utility check", value: "GPR scan where required" },
      { label: "Coverage", value: "All UAE" },
    ],
    whyBest:
      "Anyone can lay a tile. What separates paving that lasts from paving that sinks is the excavation depth, the compaction of the sub-base and the accuracy of the falls — all work that disappears from view the moment the tiles go down. We do that groundwork with our own excavation team rather than subcontracting the part of the job that actually carries the load.",
  },
  features: [
    { title: "Interlock tile laying", description: "Standard and decorative patterns, laid to line and level." },
    { title: "Excavation & compacted sub-base", description: "Formation and base built to carry the intended load." },
    { title: "Accurate levels and falls", description: "Set for drainage so water runs off, not sits." },
    { title: "Kerbstones & edge restraints", description: "Edges held so the paving cannot spread or creep." },
    { title: "Repair & re-levelling", description: "Sunken, rocking or uneven paving lifted and reset." },
    { title: "Road pavement & hardstanding", description: "Internal site roads, yards and heavy-use surfaces." },
  ],
  applications: [
    { title: "Villa and residential driveways" },
    { title: "Parking areas and car parks" },
    { title: "Warehouse and industrial yards" },
    { title: "Walkways, pathways and landscaping" },
    { title: "Internal site and compound roads" },
    { title: "Road pavement and hardstanding" },
    { title: "Reinstatement after trenching works" },
    { title: "Sunken or uneven paving repair" },
  ],
  process: {
    title: "Our Interlock & Pavement Process",
    steps: [
      {
        number: 1,
        title: "Site visit & quotation",
        description:
          "We visit the site, measure the area, check existing levels and drainage, and confirm the intended use — pedestrian, light vehicle or heavy load. That determines the sub-base build-up and tile specification. You receive a fixed quotation before work starts.",
      },
      {
        number: 2,
        title: "Utility check & excavation",
        description:
          "Where buried services may run beneath the area, we scan the ground before breaking it. We then excavate to formation level and remove the arisings from site.",
      },
      {
        number: 3,
        title: "Sub-base & levels",
        description:
          "The sub-base is laid and compacted in layers, with levels and falls set for drainage. Kerbstones and edge restraints are installed where the design requires them.",
      },
      {
        number: 4,
        title: "Laying, jointing & handover",
        description:
          "Tiles are laid to the agreed pattern, cut cleanly at edges and around fixtures, jointed with sand and compacted. We clean down the surface and hand over a finished area ready for use.",
      },
    ],
  },
  seoParagraphs: [
    {
      title: "Interlock Paving in Dubai",
      content:
        "Interlock paving is used across Dubai for villa driveways, compound roads, parking areas, warehouse yards and landscaping walkways. It suits UAE conditions because individual tiles can be lifted and reset for access to buried services rather than being broken out like a poured slab. Bhadeya Technical carries out interlock laying, repair and re-levelling across Dubai, including the excavation and compacted sub-base that determine how the surface performs over time.",
    },
    {
      title: "Road Pavement & Hardstanding Works",
      content:
        "Beyond decorative paving, we build internal site roads, hardstanding and yard surfaces for industrial and logistics sites where the surface has to carry loaded vehicles rather than cars. These jobs live or die on the sub-base: an under-compacted base will rut and settle under repeated heavy axle loads no matter what is laid on top. We build up and compact in layers to the intended loading, across Dubai, Abu Dhabi, Sharjah and the wider UAE.",
    },
    {
      title: "Why Interlock Sinks — and How to Avoid It",
      content:
        "When interlock sinks, rocks underfoot or holds water after rain, the tiles are almost never the cause. The usual reasons are excavation that never reached proper formation level, a sub-base laid too thin or compacted in one pass instead of layers, falls that were never set so water sits and washes out the bedding, or missing edge restraints that let the paving spread sideways. All four are groundwork faults, and all four are avoidable. Because we handle the excavation, scanning and compaction with our own team, that part of the job is not left to whoever is cheapest on the day.",
    },
  ],
  peopleAlsoAsk: [
    {
      question: "How much does interlock cost in Dubai?",
      answer:
        "Cost depends on the area, the tile specification, the depth of excavation required and the intended loading — a pedestrian walkway needs far less build-up than a yard carrying loaded trucks. We quote after a site visit so the price reflects the actual groundwork required rather than a rate per square metre that ignores what is underneath.",
    },
    {
      question: "Can you repair sunken interlock instead of replacing it?",
      answer:
        "Usually yes. In most cases the tiles are reusable and the problem is beneath them, so we lift the affected area, correct the sub-base and levels, and relay the same tiles. Full replacement is only needed where tiles are cracked, badly worn or no longer matchable.",
    },
    {
      question: "How long does an interlock job take?",
      answer:
        "A villa driveway is typically a few days including excavation, sub-base and laying. Larger parking areas and yards are scoped by area and access. We give a programme with the quotation so you can plan around it.",
    },
    {
      question: "Do you scan before excavating for paving?",
      answer:
        "Where buried services may run beneath the area, yes. We use our GPR ground scanning to locate utilities before breaking ground, which matters on compounds and sites where irrigation, power and drainage often run directly under the paving.",
    },
  ],
  relatedServices: [
    { href: "/services/excavation", label: "Excavation" },
    { href: "/services/gs8000-scanning", label: "GPR Ground Scanning" },
    { href: "/services/core-cutting", label: "Core Cutting" },
  ],
  faq: {
    title: "Frequently Asked Questions About Interlock & Road Pavement",
    items: [
      {
        question: "What interlock and pavement works do you provide?",
        answer:
          "Interlock tile laying in standard and decorative patterns, repair and re-levelling of sunken or uneven paving, kerbstones and edge restraints, sub-base preparation and compaction, road pavement and hardstanding, and reinstatement after trenching or utility works. We cover driveways, parking areas, yards, walkways and internal site roads.",
      },
      {
        question: "Why does interlock paving sink?",
        answer:
          "Almost always because of the layer beneath it, not the tiles. Common causes are insufficient excavation depth, a sub-base that was laid too thin or not compacted in layers, falls that were never set so water ponds and washes out the bedding sand, and missing edge restraints that let the paving spread. We control all four by doing the groundwork ourselves.",
      },
      {
        question: "Do you handle the excavation as well?",
        answer:
          "Yes. Excavation is one of our core services, so the digging, the sub-base and the paving are all done by the same company. Where buried services may be present we scan the ground first with our GPR equipment before breaking ground.",
      },
      {
        question: "Can you reinstate paving after utility or trenching work?",
        answer:
          "Yes. We reinstate interlock and pavement surfaces after trenching, cable pulling and service installation — backfilling and compacting properly before relaying, so the reinstated strip does not settle lower than the surrounding surface a few months later.",
      },
      {
        question: "Which areas do you serve?",
        answer:
          "Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain. Our team is mobile and attends site across the UAE with all required equipment.",
      },
    ],
  },
  ctaTitle: "Need Interlock or Road Pavement Works?",
  ctaDescription:
    "Get a free quote for interlock laying, repair or road pavement works. Send us your location and area and we respond within 1 hour during business hours.",
};

export default function InterlockRoadPavementPage() {
  return <ServicePageTemplate data={interlockPageData} />;
}
