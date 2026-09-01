const BASE_URL = "https://www.bhadeya.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Bhadeya Technical Services LLC",
  description:
    "Leading GPR scanning, core cutting and excavation services in UAE",
  url: BASE_URL,
  telephone: "+971556926286",
  email: "Bhadeyatechnical@gmail.com",
  image: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/bts_logo.png`,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "City", name: "Fujairah" },
    { "@type": "City", name: "Al Ain" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technical Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GPR Concrete Scanning",
          description:
            "Ground Penetrating Radar concrete scanning using Proceq GP8000, up to 1 m depth in concrete",
          url: `${BASE_URL}/services/gpr-scanning`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GPR Ground Scanning",
          description:
            "Ground scanning with Proceq GS8000 to locate buried utilities before excavation, 5-10 m depth depending on soil",
          url: `${BASE_URL}/services/gs8000-scanning`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Core Cutting",
          description:
            "Diamond core cutting from 12mm to 500mm using professional equipment",
          url: `${BASE_URL}/services/core-cutting`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Excavation Services",
          description:
            "Professional excavation services for construction and infrastructure projects",
          url: `${BASE_URL}/services/excavation`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Oversized Cargo Movement",
          description:
            "Specialised oversized and heavy cargo transport across the UAE",
          url: `${BASE_URL}/services/oversized-cargo`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interlock & Road Pavement",
          description:
            "Interlock paving, repair and re-levelling, plus road pavement and hardstanding works across the UAE",
          url: `${BASE_URL}/services/interlock-road-pavement`,
        },
      },
    ],
  },
  foundingDate: "2019",
  knowsAbout: [
    "GPR Scanning",
    "Ground Penetrating Radar",
    "Core Cutting",
    "Excavation",
    "Rebar Detection",
    "Utility Detection",
    "Post-Tension Cable Detection",
    "Non-Destructive Testing",
    "Underground Utility Mapping",
    "Pre-Excavation Utility Surveys",
    "Interlock Paving",
    "Road Pavement",
  ],
  slogan: "Precision Scanning. Safe Construction.",
  // `address` is required for LocalBusiness rich results. streetAddress and
  // postalCode are intentionally omitted rather than guessed — add them once
  // the registered trade-licence address is confirmed, and keep them identical
  // to the Google Business Profile listing (NAP consistency).
  address: {
    "@type": "PostalAddress",
    addressLocality: "Business Bay",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  priceRange: "$$",
  sameAs: [],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Bhadeya Technical Services LLC",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/bts_logo.png`,
    width: 180,
    height: 52,
  },
  description:
    "Leading GPR scanning, core cutting and excavation services in UAE",
  foundingDate: "2019",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971556926286",
    email: "Bhadeyatechnical@gmail.com",
    contactType: "customer service",
    areaServed: ["AE"],
    availableLanguage: ["English", "Arabic"],
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Bhadeya Technical Services LLC",
  description:
    "GPR scanning, core cutting and excavation services across the UAE",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  inLanguage: "en-AE",
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GPR scanning and why is it needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GPR (Ground Penetrating Radar) scanning is a non-destructive testing method that uses radar pulses to image the subsurface of concrete and other materials. It is needed to detect rebar, post-tension cables, utilities, and voids before drilling, cutting, or coring to prevent damage and ensure structural integrity. In Dubai and across the UAE, GPR scanning is a standard requirement for safe construction and renovation projects.",
      },
    },
    {
      "@type": "Question",
      name: "How deep can GPR scanning detect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the material. In concrete, our Proceq GP8000 scans up to 1 metre deep, which covers slabs, walls, beams and columns where rebar and post-tension cables typically sit within the first 10-30cm. In ground and soil, our Proceq GS8000 reaches 5-10 metres depending on soil conditions: dry sand allows deeper penetration, while wet ground or heavy clay reduces it. The GS8000 is the system we use to locate buried utilities before excavation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you scan the ground before excavation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, always. Every excavation job begins with a GPR survey of the dig area using our Proceq GS8000 ground scanner, which reads 5-10 metres into the soil depending on ground conditions. We locate and mark buried power cables, water and sewer lines, telecom ducts, gas pipes and voids on the surface, and agree safe dig limits with you before any machine breaks ground. Scanning and excavation are both carried out in-house by Bhadeya Technical.",
      },
    },
    {
      "@type": "Question",
      name: "What sizes of core holes can you cut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide diamond core cutting in sizes from 12mm to 500mm diameter using professional equipment. Common sizes include 50mm, 75mm, 100mm, 150mm, and 200mm for structural testing and utility installations. All core cutting is preceded by GPR scanning to confirm safe drilling zones.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in UAE do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bhadeya Technical Services serves all six UAE emirates: Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain. We provide GPR scanning, core cutting, and excavation services across the entire UAE with same-day or next-day response for most locations.",
      },
    },
    {
      "@type": "Question",
      name: "What equipment do you use for GPR scanning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate two Proceq ground penetrating radar systems. The GP8000 is our concrete scanner, with real-time 3D visualization and scanning depth up to 1 metre in concrete, used before core cutting and drilling. The GS8000 is our ground scanner, used to map buried utilities before excavation at 5-10 metres depending on soil conditions. Both are Swiss-manufactured, industry-leading non-destructive testing instruments trusted by contractors and consultants worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a GPR scan take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical GPR scan takes 1-4 hours depending on the area size and complexity. A standard slab scan of 20-30 m² takes 1-2 hours including setup, scanning, and surface marking. Larger commercial projects may require a full day or more. We provide same-day or next-day service for urgent projects across Dubai and the UAE.",
      },
    },
    {
      "@type": "Question",
      name: "Is GPR scanning safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, GPR scanning is completely safe and non-destructive. It uses low-power electromagnetic waves that pose no health risk to people, pets, or the environment. Unlike X-ray, it requires no radiation shielding and the area does not need to be cleared during scanning. It leaves no damage to the scanned surface.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide reports after scanning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide comprehensive reports after every scan including annotated maps showing rebar locations, post-tension cables, utilities, and safe drilling zones. Reports are delivered in PDF format with high-resolution imagery. For GP8000 scans we can also provide 3D rendered output via the Proceq Link app.",
      },
    },
  ],
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GPR Concrete Scanning",
    description:
      "Ground Penetrating Radar concrete scanning using Proceq GP8000 for rebar detection, post-tension cable location, conduit and void detection up to 1 m depth in concrete across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain.",
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Al Ain" },
    ],
    url: `${BASE_URL}/services/gpr-scanning`,
    serviceType: "GPR Scanning",
    category: "Non-Destructive Testing",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Core Cutting",
    description:
      "Diamond core cutting services from 12mm to 500mm diameter using professional equipment for structural testing and utility installations.",
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Al Ain" },
    ],
    url: `${BASE_URL}/services/core-cutting`,
    serviceType: "Core Cutting",
    category: "Construction Services",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Excavation Services",
    description:
      "Professional excavation services for construction, infrastructure, and ground works across UAE. Every dig preceded by GPR ground scanning to 5-10 m depending on soil conditions.",
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Al Ain" },
    ],
    url: `${BASE_URL}/services/excavation`,
    serviceType: "Excavation",
    category: "Construction Services",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Oversized Cargo Movement",
    description:
      "Specialised oversized and heavy cargo transport and logistics across all UAE emirates.",
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Al Ain" },
    ],
    url: `${BASE_URL}/services/oversized-cargo`,
    serviceType: "Cargo Transport",
    category: "Logistics",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GPR Ground Scanning",
    description:
      "Underground utility locating and subsurface mapping with the Proceq GS8000 ground penetrating radar. Pre-excavation surveys to 5-10 m depending on soil conditions, with on-site marking and survey reports.",
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Al Ain" },
    ],
    url: `${BASE_URL}/services/gs8000-scanning`,
    serviceType: "Underground Utility Scanning",
    category: "Non-Destructive Testing",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interlock & Road Pavement",
    description:
      "Interlock tile laying, repair and re-levelling, sub-base preparation, kerbstones, and road pavement and hardstanding works across the UAE.",
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Al Ain" },
    ],
    url: `${BASE_URL}/services/interlock-road-pavement`,
    serviceType: "Paving Contractor",
    category: "Construction Services",
  },
];

// Entity-level schemas describe the business itself, so they belong on every
// page. Service schemas describe one offering each and are emitted only by the
// page that offering belongs to — see ServiceJsonLd.
const globalSchemas = [localBusinessSchema, organizationSchema, websiteSchema];

const serviceSchemaBySlug: Record<string, object> = Object.fromEntries(
  serviceSchemas.map((schema) => [
    schema.url.split("/").pop()!,
    { ...schema, "@id": `${schema.url}#service` },
  ])
);

export { faqPageSchema };

export function JsonLd() {
  return (
    <>
      {globalSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

/** Emits the Service schema for a single service page, keyed by its slug. */
export function ServiceJsonLd({ slug }: { slug: string }) {
  const schema = serviceSchemaBySlug[slug];
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
