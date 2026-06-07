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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2048,
    longitude: 55.2708,
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
          name: "GPR Scanning",
          description:
            "Ground Penetrating Radar scanning using Proceq GP8000 with up to 500cm depth",
          url: `${BASE_URL}/services/gpr-scanning`,
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
          name: "PM8000 Rebar Scanning",
          description:
            "Profometer PM8000 rebar cover measurement and mapping with ±1mm accuracy",
          url: `${BASE_URL}/services/pm8000-scanning`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GS8000 Ground Scanning",
          description:
            "Proceq GS8000 large-scale ground scanning up to 10m depth for infrastructure projects",
          url: `${BASE_URL}/services/gs8000-scanning`,
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
  ],
  slogan: "Precision Scanning. Safe Construction.",
  priceRange: "AED",
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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
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
        text: "Our Proceq GP8000 GPR system can detect subsurface features up to 500cm (5 meters) deep, depending on the material composition and conditions. For concrete slabs, typical detection depth is 40-80cm. The GP8000's wide frequency range (200 MHz – 4 GHz) allows it to resolve both shallow rebar and deep embedded utilities in a single pass.",
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
        text: "We use the Proceq GP8000 ground penetrating radar system for subsurface scanning. It is an industry-leading, non-destructive testing instrument with real-time 3D visualization, trusted by leading contractors and consultants worldwide. For rebar cover measurement we use the Profometer PM8000, and for large-scale infrastructure scanning the Proceq GS8000.",
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
    name: "GPR Scanning",
    description:
      "Ground Penetrating Radar scanning using Proceq GP8000 for subsurface imaging, rebar detection, utility mapping, and post-tension cable location up to 500cm depth.",
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
      "Professional excavation services for construction, infrastructure, and ground works across UAE.",
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
    name: "PM8000 Rebar Scanning",
    description:
      "Profometer PM8000 rebar cover measurement and mapping with ±1mm accuracy, CSV and cloud export for structural documentation.",
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Al Ain" },
    ],
    url: `${BASE_URL}/services/pm8000-scanning`,
    serviceType: "Rebar Cover Measurement",
    category: "Non-Destructive Testing",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GS8000 Ground Scanning",
    description:
      "Proceq GS8000 large-scale SFCW ground penetrating radar scanning up to 10m depth at 80km/h scan speed with GNSS geolocation for infrastructure projects.",
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
    serviceType: "Ground Scanning",
    category: "Non-Destructive Testing",
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
];

const allSchemas = [
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  ...serviceSchemas,
];

export { faqPageSchema };

export function JsonLd() {
  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
