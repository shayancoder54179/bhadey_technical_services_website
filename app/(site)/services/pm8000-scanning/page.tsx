import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import type { ServicePageData } from "@/lib/service-page-types";

export const metadata: Metadata = {
  title: "PM8000 Rebar Cover Mapping Dubai & UAE | Profometer Scanning | Bhadeya Technical Services",
  description:
    "Professional Profometer PM8000 rebar cover mapping in Dubai & UAE. Non-destructive electromagnetic scanning to locate rebars, measure concrete cover depth to ±1mm, and identify safe drilling points. Trusted by UAE contractors.",
  keywords: [
    "PM8000 rebar scanning Dubai",
    "Profometer PM8000 UAE",
    "rebar cover measurement Dubai",
    "concrete cover meter UAE",
    "rebar detection before drilling Dubai",
    "electromagnetic cover meter UAE",
    "rebar mapping Dubai",
    "concrete scanning before core cutting UAE",
  ],
  alternates: { canonical: "https://www.bhadeya.com/services/pm8000-scanning" },
  openGraph: {
    title: "PM8000 Rebar Cover Mapping Dubai & UAE | Profometer Scanning | Bhadeya Technical Services",
    description:
      "Professional Profometer PM8000 rebar cover mapping in Dubai & UAE. Locate rebars, measure concrete cover to ±1mm, and identify safe drilling points before any core cutting.",
    url: "https://www.bhadeya.com/services/pm8000-scanning",
    type: "website",
  },
};

const pm8000PageData: ServicePageData = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "PM8000 Rebar Cover Mapping", href: "/services/pm8000-scanning" },
  ],
  hero: {
    title: "Profometer PM8000 Rebar Cover Mapping",
    subtitle:
      "Precision Rebar Detection & Concrete Cover Measurement Across UAE. Non-destructive electromagnetic scanning to locate rebars, measure concrete cover depth, and estimate rebar diameter — essential before any core cutting or drilling.",
    stats: [
      { value: "±1mm", label: "Cover Accuracy" },
      { value: "Proceq PM8000", label: "Technology" },
      { value: "8h", label: "Battery Life" },
    ],
    ctaPrimaryLabel: "Get Free Quote",
    ctaSecondaryLabel: "Call Now: +971 55 692 6286",
    ctaSecondaryHref: "tel:+971556926286",
  },
  overview: {
    title: "What is the Profometer PM8000?",
    description:
      "The Profometer PM8000 uses electromagnetic pulse induction technology to detect reinforcement bars inside concrete structures. It is the world's most compact and lightweight cover meter — locating rebar position and spacing, measuring concrete cover depth to ±1mm accuracy, and estimating rebar diameter, all without breaking the surface. It works equally well on floors, walls, ceilings, columns, and beams, with 8 hours of battery autonomy for full-day operation on-site.",
    howItWorks: [
      {
        step: 1,
        title: "Surface Scan",
        description:
          "Our technician passes the PM8000 over the concrete surface. The device uses pulse induction to sense embedded steel rebars and instantly displays their position, depth, and estimated diameter.",
      },
      {
        step: 2,
        title: "Cover Mapping",
        description:
          "The PM8000 maps concrete cover across the scan area, identifying zones where cover is insufficient or where rebar is too close to the surface for safe drilling.",
      },
      {
        step: 3,
        title: "Safe Point Identification & Reporting",
        description:
          "Safe drilling or core cutting points are marked on-site. Data is exported via CSV and Screening Eagle Workspace for your project records.",
      },
    ],
    benefits: [
      "Prevent hitting rebar during core cutting or drilling",
      "Protect structural integrity on every job",
      "Ensure worker safety before any penetration work",
      "±1mm concrete cover accuracy",
      "Non-destructive — no surface damage",
      "Digital data export for project documentation",
    ],
  },
  equipment: {
    title: "Equipment We Use",
    name: "Proceq Profometer PM8000",
    description:
      "The Proceq Profometer PM8000 is the world's most compact and lightweight electromagnetic cover meter. Using pulse induction technology, it detects rebar position and spacing, measures concrete cover to ±1mm accuracy, and estimates rebar diameter — all in a single handheld device. With 8 hours of battery autonomy and cloud connectivity via Screening Eagle Workspace, it is the benchmark instrument for rebar cover mapping on modern construction and renovation projects.",
    specs: [
      { label: "Technology", value: "Electromagnetic Pulse Induction" },
      { label: "Cover Depth Accuracy", value: "±1mm" },
      { label: "Max Cover Measurement", value: "Up to 120mm (configuration dependent)" },
      { label: "Rebar Diameter Estimation", value: "Yes — without surface damage" },
      { label: "Battery Life", value: "8 hours" },
      { label: "Form Factor", value: "World's most compact and lightweight cover meter" },
      { label: "Surfaces", value: "Floors, walls, ceilings, columns, beams" },
      { label: "Data Export", value: "CSV and Screening Eagle Workspace" },
      { label: "Manufacturer", value: "Proceq (Switzerland)" },
    ],
    whyBest:
      "The PM8000 is Proceq's most advanced handheld cover meter. Its electromagnetic pulse induction technology delivers ±1mm cover depth accuracy — far beyond the requirements of UAE construction standards. The compact form factor allows scanning in confined spaces and overhead surfaces where other instruments struggle. Swiss engineering means repeatable, reliable results on every project.",
  },
  features: [
    {
      title: "Rebar Detection",
      description:
        "Locates rebar position and spacing with pinpoint accuracy. Know exactly where the steel is before you cut or drill.",
    },
    {
      title: "Cover Depth Measurement",
      description:
        "Measures concrete cover to ±1mm accuracy — the most precise cover measurement available for on-site use.",
    },
    {
      title: "Rebar Diameter Estimation",
      description:
        "Estimates bar diameter without breaking the surface, providing critical data for structural assessments and renovation planning.",
    },
    {
      title: "Safe Drilling Points",
      description:
        "Identifies exact safe spots before any cutting or drilling, eliminating the risk of accidentally hitting reinforcement.",
    },
    {
      title: "Works on Any Surface",
      description:
        "Floors, walls, ceilings, columns, and beams — the PM8000 scans any concrete surface in any orientation.",
    },
    {
      title: "Cloud Connectivity",
      description:
        "Data exported via CSV and Screening Eagle Workspace for digital project records, reports, and team collaboration.",
    },
  ],
  applications: [
    { title: "Pre-drilling checks" },
    { title: "Pre-core cutting surveys" },
    { title: "Structural assessments" },
    { title: "Rebar mapping for renovation projects" },
    { title: "Building inspections" },
    { title: "Quality control for new construction" },
  ],
  process: {
    title: "Our PM8000 Scanning Process",
    steps: [
      {
        number: 1,
        title: "Consultation & scope definition",
        description:
          "We discuss your project requirements — the surfaces to be scanned, the planned drill or cut locations, and any structural concerns. We confirm access and plan the scan area before mobilising.",
      },
      {
        number: 2,
        title: "On-site PM8000 scanning",
        description:
          "Our technician scans the concrete surface with the Profometer PM8000, mapping rebar positions, cover depths, and estimated diameters across the planned work area.",
      },
      {
        number: 3,
        title: "Safe point marking",
        description:
          "Safe drilling or core cutting points are marked directly on the surface, clearly identifying rebar-free zones for your cutting team to proceed with confidence.",
      },
      {
        number: 4,
        title: "Data export & report",
        description:
          "Scan data is exported via CSV and Screening Eagle Workspace. A professional report is provided for your project records, documenting cover depths, rebar positions, and safe cutting locations.",
      },
    ],
  },
  seoParagraphs: [
    {
      title: "PM8000 Rebar Cover Mapping in Dubai",
      content:
        "Rebar cover mapping in Dubai is essential before any core cutting, drilling, or structural modification work in concrete buildings and infrastructure. The Profometer PM8000 allows Bhadeya's team to quickly identify rebar positions and cover depths across floors, walls, and ceilings — ensuring no reinforcement bar is accidentally struck during cutting operations. We provide PM8000 scanning services across Dubai, from commercial towers to residential developments and industrial facilities.",
    },
    {
      title: "PM8000 Scanning Across UAE",
      content:
        "We provide Profometer PM8000 rebar cover mapping across all UAE emirates — Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain. Our team is fully mobile and equipped to deploy on construction, renovation, and inspection projects of any size. PM8000 scanning is typically completed same-day, with data available immediately for your project team.",
    },
    {
      title: "Why PM8000 Scanning Before Core Cutting",
      content:
        "Every core cut or drill at Bhadeya Technical Services starts with a PM8000 scan. Accidentally hitting a rebar during core cutting can damage the diamond bit, delay the job, and — critically — compromise the structural integrity of the concrete member. The PM8000 eliminates that risk in minutes. It is the fastest, most accurate way to confirm safe drilling points before any penetration work begins, protecting both the structure and your team.",
    },
  ],
  peopleAlsoAsk: [
    {
      question: "What is the Profometer PM8000 used for?",
      answer:
        "The Profometer PM8000 is an electromagnetic cover meter used to detect rebar inside concrete, measure concrete cover depth to ±1mm accuracy, and estimate rebar diameter — all without damaging the surface. It is widely used before core cutting, drilling, and structural inspections.",
    },
    {
      question: "How accurate is the PM8000 cover measurement?",
      answer:
        "The Profometer PM8000 measures concrete cover to ±1mm accuracy, making it one of the most precise cover meters available for on-site use.",
    },
    {
      question: "What is the difference between PM8000 and GPR scanning?",
      answer:
        "The PM8000 uses electromagnetic pulse induction to detect rebar and measure cover depth — it is optimised for cover mapping and rebar location in concrete. GPR (GP8000) uses radar waves and can detect a wider range of objects at greater depths, including post-tension cables, conduits, and voids. For pre-core-cutting rebar checks, the PM8000 is fast and precise. For deeper or more complex structures, GPR is preferred.",
    },
    {
      question: "Do you scan before every core cutting job?",
      answer:
        "Yes. At Bhadeya Technical Services, every core cutting and drilling job is preceded by either a PM8000 or GPR scan to identify rebar positions and confirm safe cutting points. This protects structural integrity and ensures worker safety on every project.",
    },
  ],
  relatedServices: [
    { href: "/services/gpr-scanning", label: "GPR Scanning (GP8000)" },
    { href: "/services/core-cutting", label: "Core Cutting" },
    { href: "/services/gs8000-scanning", label: "GS8000 Ground Scanning" },
  ],
  faq: {
    title: "Frequently Asked Questions About PM8000 Rebar Cover Mapping",
    items: [
      {
        question: "What is the Profometer PM8000?",
        answer:
          "The Profometer PM8000 is an electromagnetic cover meter manufactured by Proceq (Switzerland). It uses pulse induction technology to detect rebar inside concrete, measure cover depth to ±1mm accuracy, and estimate rebar diameter — all non-destructively.",
      },
      {
        question: "How accurate is the PM8000?",
        answer:
          "The PM8000 measures concrete cover to ±1mm accuracy, making it one of the most precise on-site cover meters available. It is suitable for quality control, structural inspections, and pre-cutting safety checks.",
      },
      {
        question: "What surfaces can the PM8000 scan?",
        answer:
          "The PM8000 works on any concrete surface in any orientation — floors, walls, ceilings, columns, beams, and slabs. Its compact form factor allows scanning in confined spaces and overhead surfaces.",
      },
      {
        question: "Is PM8000 scanning required before core cutting?",
        answer:
          "At Bhadeya Technical Services, we perform PM8000 or GPR scanning before every core cutting and drilling job. Accidentally hitting rebar can damage equipment and compromise structural integrity — scanning prevents both risks.",
      },
      {
        question: "What is the difference between PM8000 and GPR scanning?",
        answer:
          "The PM8000 uses electromagnetic pulse induction, optimised for rebar detection and cover measurement in concrete. GPR (GP8000) uses radar waves and detects a broader range of objects — post-tension cables, conduits, voids — at greater depths. Both are used at Bhadeya depending on project requirements.",
      },
      {
        question: "Which areas in UAE do you serve?",
        answer:
          "We cover all UAE emirates — Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain. Our team is fully mobile and can deploy to any project site across the Emirates.",
      },
    ],
  },
  ctaTitle: "Ready to Scan Before You Cut?",
  ctaDescription:
    "Contact Bhadeya Technical Services for a free quote on PM8000 rebar cover mapping. We respond within 1 hour during business hours.",
};

function WhyPM8000Section() {
  return (
    <section
      className="bg-[#0A2540] py-16 md:py-20"
      aria-labelledby="why-pm8000-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#ff6b00] mb-3">
              Standard Practice at Bhadeya
            </p>
            <h2
              id="why-pm8000-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5"
            >
              Why We Scan With PM8000 Before Every Core Cut
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              Every core cut or drill at Bhadeya starts with a PM8000 scan. Accidentally hitting a
              rebar during core cutting can damage the diamond bit, cause costly project delays, and
              — most critically — compromise the structural integrity of the concrete member.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              The Profometer PM8000 eliminates that risk in minutes. It is the fastest, most
              accurate way to confirm safe drilling points before any penetration work begins,
              protecting both the structure and your team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                stat: "±1mm",
                label: "Cover accuracy",
                sub: "Most precise on-site cover meter available",
              },
              {
                stat: "8h",
                label: "Battery autonomy",
                sub: "Full-day scanning without recharging",
              },
              {
                stat: "100%",
                label: "Jobs pre-scanned",
                sub: "Every Bhadeya core cut is scanned first",
              },
              {
                stat: "Swiss",
                label: "Engineered precision",
                sub: "Proceq PM8000 — made in Switzerland",
              },
            ].map(({ stat, label, sub }) => (
              <div
                key={stat + label}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-3xl font-bold text-[#0066ff] mb-1">{stat}</p>
                <p className="text-sm font-semibold text-white mb-1">{label}</p>
                <p className="text-xs text-white/60">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PM8000ScanningPage() {
  return (
    <ServicePageTemplate data={pm8000PageData}>
      <WhyPM8000Section />
    </ServicePageTemplate>
  );
}
