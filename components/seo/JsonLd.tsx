import { company } from "@/data/company";
import { faqs } from "@/data/faqs";

const BASE_URL = "https://www.bhadeya.com";

// One node describes the business. LocalBusiness and Organization were
// previously two unlinked top-level entities with the same NAP, which reads to
// a parser as two competing profiles rather than one. Merged under the
// #organization id that WebSite.publisher and Article.author already point at.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#organization`,
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
            "Ground Penetrating Radar concrete scanning using Proceq GP8000, up to 1.5 m depth in concrete",
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
          url: `${BASE_URL}/services/gpr-ground-scanning`,
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
  // `address` is required for LocalBusiness rich results. Sourced from
  // data/company.ts so the site has one NAP source of truth; streetAddress and
  // postalCode are still omitted rather than guessed (see the note there).
  address: {
    "@type": "PostalAddress",
    addressLocality: company.address.locality,
    addressRegion: company.address.region,
    addressCountry: company.address.country,
  },
  priceRange: "$$",
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/bts_logo.png`,
    width: 180,
    height: 52,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971556926286",
    email: "Bhadeyatechnical@gmail.com",
    contactType: "customer service",
    areaServed: ["AE"],
    availableLanguage: ["English", "Arabic"],
  },
  // `sameAs` is deliberately absent: an empty array is noise, and no verified
  // external profile URLs exist yet. Add real GBP/LinkedIn/Instagram URLs here
  // once confirmed — they are a cheap entity-consolidation win.
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

// Generated from data/faqs.ts — the same array <FAQ /> renders. Previously this
// was a second, hand-maintained copy of the Q&A text, and the two had drifted
// apart (different wording, and a different GS8000 depth claim under the same
// question). Schema that contradicts the visible answer is a structured-data
// violation, so it is derived rather than duplicated.
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GPR Concrete Scanning",
    description:
      "Ground Penetrating Radar concrete scanning using Proceq GP8000 for rebar detection, post-tension cable location, conduit and void detection up to 1.5 m depth in concrete across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Al Ain.",
    provider: { "@id": `${BASE_URL}/#organization` },
    telephone: "+971556926286",
    image: `${BASE_URL}/images/bts_logo.png`,
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
    provider: { "@id": `${BASE_URL}/#organization` },
    telephone: "+971556926286",
    image: `${BASE_URL}/images/bts_logo.png`,
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
    provider: { "@id": `${BASE_URL}/#organization` },
    telephone: "+971556926286",
    image: `${BASE_URL}/images/bts_logo.png`,
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
    provider: { "@id": `${BASE_URL}/#organization` },
    telephone: "+971556926286",
    image: `${BASE_URL}/images/bts_logo.png`,
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
    provider: { "@id": `${BASE_URL}/#organization` },
    telephone: "+971556926286",
    image: `${BASE_URL}/images/bts_logo.png`,
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Al Ain" },
    ],
    url: `${BASE_URL}/services/gpr-ground-scanning`,
    serviceType: "Underground Utility Scanning",
    category: "Non-Destructive Testing",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interlock & Road Pavement",
    description:
      "Interlock tile laying, repair and re-levelling, sub-base preparation, kerbstones, and road pavement and hardstanding works across the UAE.",
    provider: { "@id": `${BASE_URL}/#organization` },
    telephone: "+971556926286",
    image: `${BASE_URL}/images/bts_logo.png`,
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
const globalSchemas = [organizationSchema, websiteSchema];

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
