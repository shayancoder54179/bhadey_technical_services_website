const BASE_URL = "https://www.bhadeyatechnical.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bhadeya Technical Services LLC",
  description:
    "Leading GPR scanning, core cutting and excavation services in UAE",
  url: BASE_URL,
  telephone: "+971556926286",
  email: "Bhadeyatechnical@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressRegion: "Dubai",
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
            "Ground Penetrating Radar scanning using Proceq GP8000 with up to 200cm depth",
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
          description: "Professional excavation services for construction and infrastructure projects",
          url: `${BASE_URL}/services/excavation`,
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
  ],
  slogan: "Precision Scanning. Safe Construction.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bhadeya Technical Services LLC",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description:
    "Leading GPR scanning, core cutting and excavation services in UAE",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
    addressRegion: "Dubai",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971556926286",
    email: "Bhadeyatechnical@gmail.com",
    areaServed: ["AE"],
    availableLanguage: "English, Arabic",
  },
  sameAs: [],
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
        text: "GPR (Ground Penetrating Radar) scanning is a non-destructive testing method that uses radar pulses to image the subsurface of concrete and other materials. It's needed to detect rebar, post-tension cables, utilities, and voids before drilling, cutting, or coring to prevent damage and ensure structural integrity.",
      },
    },
    {
      "@type": "Question",
      name: "How deep can GPR scanning detect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Proceq GP8000 GPR system can detect subsurface features up to 200cm (2 meters) deep, depending on the material composition and conditions. For concrete slabs, typical detection depth is 40-80cm.",
      },
    },
    {
      "@type": "Question",
      name: "What sizes of core holes can you cut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide diamond core cutting in sizes from 12mm to 500mm diameter using professional equipment. Common sizes include 50mm, 75mm, 100mm, 150mm, and 200mm for structural testing and utility installations.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in UAE do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bhadeya Technical Services serves Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and Fujairah. We provide GPR scanning, core cutting, and excavation services across the entire UAE.",
      },
    },
    {
      "@type": "Question",
      name: "What equipment do you use for GPR scanning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use the Proceq GP8000 ground penetrating radar system for subsurface scanning. It is an industry-leading, non-destructive testing instrument trusted worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a GPR scan take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical GPR scan takes 1-4 hours depending on the area size and complexity. Small slabs may be completed in under an hour, while large commercial projects may require a full day. We provide same-day or next-day service for urgent projects.",
      },
    },
    {
      "@type": "Question",
      name: "Is GPR scanning safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, GPR scanning is completely safe and non-destructive. It uses low-power electromagnetic waves that pose no health risk to people, pets, or the environment. Unlike X-ray, it requires no radiation shielding.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide reports after scanning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide comprehensive reports after every scan including annotated maps showing rebar locations, post-tension cables, utilities, and safe drilling zones. Reports are delivered in PDF format with high-resolution imagery.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GPR Scanning",
    description:
      "Ground Penetrating Radar scanning using Proceq GP8000 for subsurface imaging, rebar detection, utility mapping, and post-tension cable location up to 200cm depth.",
    provider: {
      "@type": "LocalBusiness",
      name: "Bhadeya Technical Services LLC",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
    ],
    url: `${BASE_URL}/services/gpr-scanning`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Core Cutting",
    description:
      "Diamond core cutting services from 12mm to 500mm diameter using professional equipment for structural testing and utility installations.",
    provider: {
      "@type": "LocalBusiness",
      name: "Bhadeya Technical Services LLC",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
    ],
    url: `${BASE_URL}/services/core-cutting`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Excavation Services",
    description:
      "Professional excavation services for construction, infrastructure, and ground works across UAE.",
    provider: {
      "@type": "LocalBusiness",
      name: "Bhadeya Technical Services LLC",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
    ],
    url: `${BASE_URL}/services/excavation`,
  },
];

const allSchemas = [
  localBusinessSchema,
  organizationSchema,
  faqPageSchema,
  breadcrumbSchema,
  ...serviceSchemas,
];

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
