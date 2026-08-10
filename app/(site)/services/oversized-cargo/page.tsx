import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";

export const metadata: Metadata = {
  title: "Oversized Cargo Movement UAE | Heavy Load Transport Support | Bhadeya Technical",
  description:
    "Professional oversized cargo movement assistance across Dubai, Abu Dhabi, Sharjah & UAE. Route surveys, RTA permit support, escort & flagging services, and unique GPR road scanning before heavy loads. Get a free quote today.",
  keywords: [
    "oversized cargo movement UAE",
    "heavy load transport Dubai",
    "oversized load escort UAE",
    "RTA permit oversized cargo",
    "heavy machinery transport Dubai",
    "project cargo UAE",
    "oversized load flagging services",
    "heavy cargo route survey UAE",
  ],
  alternates: { canonical: "https://www.bhadeya.com/services/oversized-cargo" },
  openGraph: {
    title: "Oversized Cargo Movement UAE | Bhadeya Technical Services",
    description:
      "Expert oversized cargo movement support across UAE — route surveys, RTA permits, escort & flagging, and GPR bridge scanning. Safe & compliant heavy load transport.",
    url: "https://www.bhadeya.com/services/oversized-cargo",
    type: "website",
  },
};

const oversizedCargoPageData: ServicePageData = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Oversized Cargo Movement", href: "/services/oversized-cargo" },
  ],
  hero: {
    title: "Oversized Cargo Movement",
    subtitle:
      "Safe & Compliant Oversized Load Transport Assistance Across UAE. Professional roadside assistance, escort, and logistics support for the movement of oversized and heavy cargo across Dubai, Abu Dhabi, Sharjah, and all UAE emirates.",
    stats: [
      { value: "UAE-Wide", label: "Coverage" },
      { value: "RTA Certified", label: "Compliance" },
      { value: "24/7", label: "Support" },
    ],
    ctaPrimaryLabel: "Get Free Quote",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
  },
  overview: {
    title: "What is Oversized Cargo Movement?",
    description:
      "Moving oversized or heavy loads in the UAE requires specialized planning, coordination, and strict compliance with RTA and local authority regulations. Whether it is heavy machinery, industrial equipment, or large prefabricated structures, every movement must be surveyed, permitted, and professionally escorted. Bhadeya Technical Services provides expert ground support and technical assistance for oversized cargo operations across all UAE emirates. Our services ensure the safety of personnel, infrastructure, and the cargo itself — from initial route planning through to final delivery.",
    howItWorks: [
      {
        step: 1,
        title: "Route survey & planning",
        description:
          "Our team conducts a thorough pre-movement survey of the proposed route, assessing road widths, bridge clearances, overhead utilities, turning radii, and any obstructions. We identify the safest and most practical path for your load.",
      },
      {
        step: 2,
        title: "Regulatory compliance & permits",
        description:
          "We assist with all RTA permit applications and oversized load documentation required by relevant UAE authorities. Our team manages the paperwork so your cargo is fully compliant before the move begins.",
      },
      {
        step: 3,
        title: "GPR scanning of critical infrastructure",
        description:
          "Where bridges or roads along the route require structural verification, our GPR scanning team assesses subsurface condition and structural integrity — a unique capability no other UAE cargo support provider offers.",
      },
      {
        step: 4,
        title: "Escorted movement & on-site support",
        description:
          "Certified escort vehicles and flagmen accompany the load throughout the movement. Our on-site technicians remain present to handle any unexpected issues, with 24/7 emergency support available.",
      },
    ],
    benefits: [
      "Integrated GPR scanning + escort — unique in UAE",
      "Full RTA compliance and permit management",
      "Reduced risk of infrastructure damage or incidents",
      "Experienced technical crew throughout the operation",
      "24/7 emergency support across all UAE emirates",
      "Single point of contact for the entire movement",
    ],
  },
  equipment: {
    title: "Our Capability",
    name: "Integrated Cargo Movement & GPR Support",
    description:
      "Bhadeya Technical combines a professional escort fleet — certified escort vehicles, trained flagmen, and on-site technicians — with our industry-leading Proceq GS8000 GPR scanning equipment. This unique combination means we can assess the structural capacity of bridges and roads along your route before the load moves, ensuring no surprises on the day. It is the most comprehensive oversized cargo support service available in the UAE.",
    specs: [
      { label: "Coverage", value: "All UAE Emirates" },
      { label: "Compliance", value: "RTA & UAE Authorities" },
      { label: "Route scanning", value: "Proceq GS8000" },
      { label: "Support", value: "24/7 Emergency" },
    ],
    whyBest:
      "No other UAE provider combines oversized cargo escort with GPR road and bridge scanning. This means your load can move with verified infrastructure data — not just assumptions — protecting your cargo, your schedule, and the public infrastructure.",
  },
  features: [
    {
      title: "Route Survey & Planning",
      description:
        "Pre-movement survey of roads, bridges, and clearances along the entire transport route.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Assistance with RTA permits and oversized load documentation across all UAE emirates.",
    },
    {
      title: "Escort & Flagging Services",
      description:
        "Professional escort vehicles and certified flagmen ensuring safe passage of the load.",
    },
    {
      title: "Infrastructure Protection",
      description:
        "GPR scanning of roads and bridge decks along the route to verify structural capacity before the load passes.",
    },
    {
      title: "On-Site Technical Support",
      description:
        "Trained Bhadeya technicians present on-site throughout the entire movement operation.",
    },
    {
      title: "24/7 Emergency Assistance",
      description:
        "Round-the-clock support for unexpected issues, breakdowns, or route changes during transport.",
    },
  ],
  applications: [
    { title: "Heavy machinery transport" },
    { title: "Industrial equipment relocation" },
    { title: "Construction material haulage" },
    { title: "Oil & gas equipment movement" },
    { title: "Large prefabricated structure transport" },
    { title: "Project cargo logistics support" },
  ],
  process: {
    title: "Our Oversized Cargo Movement Process",
    steps: [
      {
        number: 1,
        title: "Initial consultation & scope review",
        description:
          "We discuss the cargo dimensions, weight, origin, destination, and timeline. We identify critical route sections, authority requirements, and whether GPR scanning of bridges or roads is needed.",
      },
      {
        number: 2,
        title: "Route survey",
        description:
          "Our team physically surveys the proposed route, documenting road widths, bridge clearances, overhead obstructions, and turning points. We identify any sections that require authority coordination or infrastructure assessment.",
      },
      {
        number: 3,
        title: "Permit application & authority coordination",
        description:
          "We prepare and submit all required RTA permit applications and coordinate with relevant UAE authorities on your behalf. We ensure full compliance before any movement begins.",
      },
      {
        number: 4,
        title: "GPR infrastructure scanning (where required)",
        description:
          "For bridges or road sections where structural capacity needs to be verified, our GPR team conducts a pre-movement scan using the Proceq GS8000. Results are documented and reviewed before the load moves.",
      },
      {
        number: 5,
        title: "Escorted movement",
        description:
          "On the day of movement, our escort vehicles and flagmen guide the load along the approved route. Our on-site technical team monitors the operation and handles any unexpected developments.",
      },
      {
        number: 6,
        title: "Completion & documentation",
        description:
          "We confirm successful completion, provide all documentation including permits and GPR reports, and remain available for any post-movement queries or follow-up inspections.",
      },
    ],
  },
  seoParagraphs: [
    {
      title: "Oversized Cargo Movement in Dubai",
      content:
        "Dubai's dense urban infrastructure and high construction activity make oversized cargo movement particularly complex. Road closures, bridge weight limits, and strict RTA regulations require experienced coordination. Bhadeya Technical Services provides professional oversized cargo movement support across Dubai, including route surveys, RTA permit assistance, and GPR scanning of road and bridge infrastructure. We work with logistics companies, construction contractors, and project managers to ensure every movement is planned, permitted, and executed safely.",
    },
    {
      title: "Oversized Cargo Movement in Abu Dhabi & UAE",
      content:
        "Across Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain, Bhadeya Technical Services delivers the same high standard of oversized cargo movement support. Whether it is oil & gas equipment moving through industrial zones, heavy machinery being relocated between construction sites, or large prefabricated structures being transported for infrastructure projects, our team has the expertise and equipment to manage the operation safely and in full compliance with UAE regulations.",
    },
    {
      title: "The Bhadeya Advantage: GPR Scanning for Heavy Load Routes",
      content:
        "What makes Bhadeya Technical unique among UAE oversized cargo support providers is our GPR scanning capability. Before a heavy load passes over a bridge or section of road, we can assess the subsurface structural condition using our Proceq GS8000 ground penetrating radar. This gives clients and logistics teams verified confidence that the infrastructure can safely support the load — something no other UAE provider can offer as part of an integrated cargo movement service.",
    },
  ],
  peopleAlsoAsk: [
    {
      question: "What permits are needed for oversized cargo movement in UAE?",
      answer:
        "Oversized cargo movements in the UAE require permits from the RTA (Roads and Transport Authority) and, depending on the route and emirates covered, from local municipality or traffic authorities. Bhadeya Technical assists with all permit applications and authority coordination as part of our oversized cargo movement service.",
    },
    {
      question: "Do I need an escort vehicle for oversized loads in Dubai?",
      answer:
        "Yes. UAE regulations require certified escort vehicles and flagmen for oversized and heavy loads. Bhadeya Technical provides professional escort vehicles and trained flagmen as part of our comprehensive oversized cargo movement support service.",
    },
    {
      question: "Can bridges handle oversized or heavy cargo loads in UAE?",
      answer:
        "Bridge load capacity must be verified before heavy cargo movements. Bhadeya Technical offers GPR scanning of bridge decks to assess subsurface structural condition before the load moves — a unique capability that gives logistics teams and clients verified confidence in route safety.",
    },
    {
      question: "Which UAE emirates do you cover for oversized cargo movement?",
      answer:
        "Bhadeya Technical provides oversized cargo movement support across all UAE emirates including Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain.",
    },
  ],
  relatedServices: [
    { href: "/services/gpr-scanning", label: "GPR Concrete Scanning" },
    { href: "/services/excavation", label: "Excavation" },
  ],
  faq: {
    title: "Frequently Asked Questions About Oversized Cargo Movement",
    items: [
      {
        question: "What counts as an oversized load in the UAE?",
        answer:
          "In the UAE, a load is generally classified as oversized when it exceeds standard road dimensions or weight limits set by the RTA. This typically includes loads wider than 2.5m, taller than 4.2m, longer than 12m, or exceeding axle weight limits. Bhadeya Technical can advise on whether your specific cargo requires permits and escort services.",
      },
      {
        question: "How far in advance should I plan an oversized cargo movement?",
        answer:
          "For straightforward movements, 3–5 business days may be sufficient for permit processing. For complex routes, multi-emirate movements, or cargo requiring GPR bridge scanning, we recommend allowing 7–14 days. Contact Bhadeya Technical as early as possible so we can assess the full requirements.",
      },
      {
        question: "Can Bhadeya handle international or cross-border cargo movements?",
        answer:
          "Our primary expertise is UAE domestic oversized cargo movement support including route surveys, RTA permits, escort, and GPR scanning. For cross-border requirements, please contact us to discuss your specific needs.",
      },
      {
        question: "What is GPR scanning and why is it used for cargo routes?",
        answer:
          "GPR (Ground Penetrating Radar) scanning uses radar pulses to assess the condition of road and bridge structures. For heavy cargo movements, Bhadeya Technical uses GPR to verify that bridges and road sections along the route are structurally sound enough to bear the load — reducing the risk of infrastructure damage or incidents during the movement.",
      },
      {
        question: "Do you provide 24/7 support during cargo movements?",
        answer:
          "Yes. Bhadeya Technical provides round-the-clock emergency support throughout oversized cargo movements. If unexpected issues arise during transport — route blockages, equipment issues, or authority queries — our team is reachable and ready to respond.",
      },
      {
        question: "What areas of UAE do you serve for oversized cargo movement?",
        answer:
          "We provide oversized cargo movement support across all UAE emirates: Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain. Our team is mobile and can reach any project location across the Emirates.",
      },
    ],
  },
  ctaTitle: "Planning an Oversized Load Movement? Get Expert Support from Bhadeya.",
  ctaDescription:
    "Get a free consultation and quote for your oversized cargo movement. We respond within 1 hour during business hours.",
};

export default function OversizedCargoPage() {
  return <ServicePageTemplate data={oversizedCargoPageData} />;
}
