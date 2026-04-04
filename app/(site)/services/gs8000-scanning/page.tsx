import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";

export const metadata: Metadata = {
  title: "GS8000 Ground Scanning Dubai & UAE | Large-Scale Utility Mapping | Bhadeya Technical Services",
  description:
    "Professional Proceq GS8000 ground scanning services in Dubai & UAE. Large-scale utility mapping, road scanning, bridge deck assessment up to 10m depth. Trusted by leading UAE contractors.",
  keywords: [
    "GS8000 scanning Dubai",
    "GS8000 ground scanning UAE",
    "large scale utility mapping Dubai",
    "Proceq GS8000 UAE",
    "underground utility mapping Dubai",
    "road scanning UAE",
    "subsurface mapping Dubai",
    "ground penetrating radar large scale UAE",
  ],
  alternates: { canonical: "https://www.bhadeya.com/services/gs8000-scanning" },
  openGraph: {
    title: "GS8000 Ground Scanning Dubai & UAE | Large-Scale Utility Mapping | Bhadeya Technical Services",
    description:
      "Professional Proceq GS8000 ground scanning in Dubai & UAE. Large-scale utility mapping, road scanning, bridge deck assessment up to 10m depth.",
    url: "https://www.bhadeya.com/services/gs8000-scanning",
    type: "website",
  },
};

const gs8000PageData: ServicePageData = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "GS8000 Ground Scanning", href: "/services/gs8000-scanning" },
  ],
  hero: {
    title: "Professional GS8000 Ground Scanning Services in Dubai & UAE",
    subtitle:
      "The Proceq GS8000 is Bhadeya's large-scale ground penetrating radar system for subsurface utility mapping, road scanning, and infrastructure inspection. With scanning depths up to 10 meters and speeds up to 80km/h, we deliver fast, accurate underground mapping for major civil and infrastructure projects across UAE.",
    stats: [
      { value: "10m", label: "Scanning Depth" },
      { value: "Proceq GS8000", label: "Technology" },
    ],
    ctaPrimaryLabel: "Get Free Quote",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
  },
  overview: {
    title: "What is GS8000 Scanning?",
    description:
      "The Proceq GS8000 is a large-scale pushcart GPR system designed for ground and subsurface scanning — entirely different from handheld concrete scanners like the GP8000. It uses Stepped Frequency Continuous Wave (SFCW) technology with an ultra-wide 0.2–3.4GHz bandwidth to deliver exceptional resolution at all depths. Scan data is visualised in real-time as 2D and 3D maps via iPad, with GNSS geolocation tagging every detected object. The entire process is non-destructive — no excavation, no damage to existing infrastructure.",
    howItWorks: [
      {
        step: 1,
        title: "Site Assessment & Planning",
        description:
          "We assess the scan area, define the grid, and plan the survey route based on your project requirements.",
      },
      {
        step: 2,
        title: "High-Speed Ground Scanning",
        description:
          "Our GS8000 pushcart scans the area at up to 80km/h, capturing real-time subsurface data up to 10m deep with GNSS geolocation.",
      },
      {
        step: 3,
        title: "Data Processing & Reporting",
        description:
          "Scan data is processed into detailed 2D/3D maps with GPS coordinates, delivered as a professional report for your engineering team.",
      },
    ],
    benefits: [
      "Cover vast areas rapidly at up to 80km/h",
      "Detect utilities and structures up to 10m depth",
      "GNSS geolocation on every detected object",
      "CAD and GIS export for engineering teams",
      "Non-destructive — no excavation needed",
      "Real-time 2D and 3D visualization on iPad",
    ],
  },
  equipment: {
    title: "Equipment We Use",
    name: "Proceq GS8000",
    description:
      "The Proceq GS8000 is a large-scale pushcart ground penetrating radar system using SFCW technology. Unlike handheld concrete scanners, it is engineered for wide-area ground surveys — covering large sites rapidly while maintaining precision at depth. It provides real-time 2D and 3D subsurface visualization with integrated GNSS for accurate geolocation of all detected objects.",
    specs: [
      { label: "Max Scanning Depth", value: "Up to 10m (33ft)" },
      { label: "Typical Depth (average soil)", value: "3.7m (12ft)" },
      { label: "Technology", value: "SFCW (Stepped Frequency Continuous Wave)" },
      { label: "Frequency Range", value: "0.2–3.4GHz" },
      { label: "Scan Speed", value: "Up to 80km/h" },
      { label: "Min Object Detection", value: "10mm metallic at 300mm depth" },
      { label: "Max Grid Scan", value: "80x80m" },
      { label: "Positioning", value: "Integrated GNSS geolocation" },
      { label: "Display", value: "Real-time 2D + 3D via iPad" },
      { label: "Output", value: "CAD, GIS, AR visualization" },
    ],
    whyBest:
      "The GS8000 is Proceq's most advanced large-scale GPR system. Unlike handheld concrete scanners, it covers vast areas rapidly while maintaining precision. SFCW technology delivers superior resolution at all depths — no compromises between depth and clarity. GNSS integration means every detected object is accurately geolocated for your engineering team.",
  },
  features: [
    {
      title: "Underground Utility Mapping",
      description:
        "Locate and map buried pipes, cables, and utilities before excavation. Prevent strikes and costly delays on civil projects.",
    },
    {
      title: "Road & Pavement Scanning",
      description:
        "Assess pavement layers, detect voids, and evaluate base/sub-base conditions without lane closures.",
    },
    {
      title: "Bridge Deck Assessment",
      description:
        "Inspect bridge decks for delamination, rebar corrosion, and structural voids non-destructively.",
    },
    {
      title: "Pre-Excavation Surveys",
      description:
        "Map all subsurface hazards before any digging begins. Essential for safe excavation across UAE.",
    },
    {
      title: "Infrastructure Asset Inspection",
      description:
        "Assess condition of underground infrastructure for maintenance planning and asset management.",
    },
    {
      title: "Geophysical Investigations",
      description:
        "Detailed subsurface profiling for geotechnical and environmental investigations.",
    },
  ],
  applications: [
    { title: "Civil Contractors" },
    { title: "Municipalities & Government" },
    { title: "MEP Contractors" },
    { title: "Developers" },
    { title: "Engineering Consultants" },
    { title: "Oil & Gas Companies" },
  ],
  process: {
    title: "Our GS8000 Scanning Process",
    steps: [
      {
        number: 1,
        title: "Consultation & project scoping",
        description:
          "We discuss your project requirements, scan area, depth targets, and deliverables. We confirm site access, grid dimensions, and any specific concerns before mobilising.",
      },
      {
        number: 2,
        title: "Site assessment & grid planning",
        description:
          "Our team assesses the scan area on-site, defines the survey grid, and plans the route to ensure full coverage with no gaps.",
      },
      {
        number: 3,
        title: "High-speed ground scanning",
        description:
          "The GS8000 pushcart scans the site at up to 80km/h, capturing subsurface data to 10m depth in real time with GNSS position tagging.",
      },
      {
        number: 4,
        title: "Data processing & reporting",
        description:
          "Scan data is processed into 2D/3D maps with GPS coordinates and delivered as a professional report — in CAD, GIS, or AR formats — ready for your engineering team.",
      },
    ],
  },
  seoParagraphs: [
    {
      title: "GS8000 Ground Scanning in Dubai",
      content:
        "Large-scale ground scanning in Dubai is essential for major civil works, road projects, and infrastructure upgrades across the emirate. Before any excavation or utility installation, project teams rely on GS8000 scanning to accurately map what lies beneath — preventing utility strikes, delays, and costly damage. Bhadeya Technical provides professional GS8000 scanning services in Dubai using the Proceq GS8000 pushcart system, with up to 10m depth capability and engineering-ready data output.",
    },
    {
      title: "GS8000 Scanning Across UAE",
      content:
        "We provide GS8000 ground scanning services across all UAE emirates — Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain. Our team is fully mobile and equipped to deploy on large civil, infrastructure, and municipal projects anywhere in the UAE. Data is delivered in CAD and GIS formats compatible with your project team's workflow.",
    },
  ],
  peopleAlsoAsk: [
    {
      question: "What is the difference between GP8000 and GS8000?",
      answer:
        "The GP8000 is a handheld concrete scanner designed for scanning slabs, walls, and ceilings before drilling or cutting. The GS8000 is a large pushcart system designed for large-scale ground scanning — utility mapping, road scanning, and infrastructure inspection up to 10m depth.",
    },
    {
      question: "How deep can the GS8000 scan?",
      answer:
        "The GS8000 reaches up to 10m (33ft) maximum depth, with typical penetration of 3.7m (12ft) in average soil conditions.",
    },
    {
      question: "How fast can the GS8000 scan an area?",
      answer:
        "The GS8000 scans at speeds up to 80km/h, making it ideal for large areas like roads, pavements, and major construction sites.",
    },
    {
      question: "Does GS8000 scanning provide GIS and CAD output?",
      answer:
        "Yes. Scan data can be exported to CAD and GIS formats with GNSS geolocation, providing engineering-ready data for your project team.",
    },
  ],
  relatedServices: [
    { href: "/services/gpr-scanning", label: "GPR Scanning (GP8000)" },
    { href: "/services/core-cutting", label: "Core Cutting" },
    { href: "/services/excavation", label: "Excavation" },
  ],
  faq: {
    title: "Frequently Asked Questions About GS8000 Ground Scanning",
    items: [
      {
        question: "What is the difference between GP8000 and GS8000?",
        answer:
          "The GP8000 is a handheld concrete scanner ideal for scanning slabs, walls, and ceilings before drilling or cutting. The GS8000 is a large pushcart system designed for large-scale ground scanning — utility mapping, road scanning, and infrastructure inspection up to 10m depth. Both are Proceq systems; Bhadeya operates both.",
      },
      {
        question: "How deep can the GS8000 scan?",
        answer:
          "The GS8000 reaches up to 10m (33ft) maximum depth, with typical penetration of 3.7m (12ft) in average soil conditions. Actual depth depends on soil type and composition.",
      },
      {
        question: "How fast can you scan an area?",
        answer:
          "The GS8000 scans at speeds up to 80km/h, making it ideal for large areas like roads, pavements, and construction sites.",
      },
      {
        question: "Do you provide GIS and CAD output?",
        answer:
          "Yes. Scan data can be exported to CAD and GIS formats with GNSS geolocation, providing engineering-ready data for your project team. AR visualization is also available.",
      },
      {
        question: "Which areas in UAE do you serve?",
        answer:
          "We cover all UAE emirates — Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain. Our team is mobile and can reach any project site across the Emirates.",
      },
      {
        question: "Is GS8000 scanning safe and non-destructive?",
        answer:
          "Completely. The GS8000 uses radar technology that is non-ionising and non-destructive — no excavation, no damage to existing infrastructure. It is safe for operators and surrounding structures.",
      },
    ],
  },
  ctaTitle: "Ready for Large-Scale Ground Scanning in UAE?",
  ctaDescription:
    "Get a free consultation for your utility mapping or infrastructure scanning project. We respond within 1 hour during business hours.",
};

// Comparison table: GS8000 vs GP8000 — passed as children to ServicePageTemplate
function ComparisonSection() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24 border-t border-border"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <h2
          id="comparison-heading"
          className="text-2xl md:text-3xl font-bold text-foreground mb-3"
        >
          Which Scanner Do You Need?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg max-w-2xl">
          Bhadeya operates both the GP8000 and GS8000 — here&apos;s how to choose the right
          tool for your project.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-[#0A2540] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Feature</th>
                <th className="px-4 py-3 text-left font-semibold w-1/3">GP8000 (Handheld)</th>
                <th className="px-4 py-3 text-left font-semibold w-1/3 bg-[#0066ff]">
                  GS8000 (Pushcart)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                {
                  feature: "Best For",
                  gp: "Concrete scanning (buildings, slabs)",
                  gs: "Large-scale ground & utility mapping",
                },
                {
                  feature: "Max Depth",
                  gp: "500cm in concrete",
                  gs: "10m underground",
                },
                {
                  feature: "Speed",
                  gp: "Handheld, methodical",
                  gs: "Up to 80km/h",
                },
                {
                  feature: "Coverage",
                  gp: "Small to medium areas",
                  gs: "Large areas, roads, pavements",
                },
                {
                  feature: "Output",
                  gp: "Rebar maps, PT cable detection",
                  gs: "Utility maps, GIS data, CAD files",
                },
                {
                  feature: "Typical Projects",
                  gp: "Core cutting prep, renovation scans",
                  gs: "Civil works, roads, infrastructure",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-muted/30"}
                >
                  <td className="px-4 py-3 font-medium text-foreground">{row.feature}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.gp}</td>
                  <td className="px-4 py-3 text-muted-foreground bg-[#0066ff]/5 font-medium">
                    {row.gs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-muted-foreground">
          Not sure which scanner you need?{" "}
          <a
            href="/contact"
            className="font-medium text-[#0066ff] hover:underline"
          >
            Contact us
          </a>{" "}
          and we&apos;ll advise the right solution for your project.
        </p>
      </div>
    </section>
  );
}

export default function GS8000ScanningPage() {
  return (
    <ServicePageTemplate data={gs8000PageData}>
      <ComparisonSection />
    </ServicePageTemplate>
  );
}
