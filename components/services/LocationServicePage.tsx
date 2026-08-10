import Link from "next/link";
import { Check, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ServicePageFAQ } from "./ServicePageFAQ";
import { GetQuoteLink, PhoneLink } from "@/components/seo/TrackedCtaLinks";
import { company } from "@/data/company";
import {
  cities,
  locationContent,
  locationRoutes,
  serviceLabels,
} from "@/data/locations";

interface LocationServicePageProps {
  service: string;
  city: string;
}

const BASE_URL = "https://www.bhadeya.com";

/**
 * A service-in-a-city page. Content comes from data/locations.ts, which holds
 * hand-written copy per service/city pair rather than a shared template string.
 */
export function LocationServicePage({ service, city }: LocationServicePageProps) {
  const content = locationContent[service]?.[city];
  const cityData = cities[city];
  if (!content || !cityData) return null;

  const serviceLabel = serviceLabels[service] ?? service;
  const url = `${BASE_URL}/services/${service}/${city}`;

  // Other cities offering this same service, and other services in this city.
  const siblingCities = locationRoutes.filter(
    (r) => r.service === service && r.city !== city
  );
  const otherServicesHere = locationRoutes.filter(
    (r) => r.city === city && r.service !== service
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${serviceLabel} in ${cityData.name}`,
    description: content.description,
    provider: { "@id": `${BASE_URL}/#localbusiness` },
    areaServed: { "@type": "City", name: cityData.name },
    url,
    serviceType: serviceLabel,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: serviceLabel, href: `/services/${service}` },
          { label: cityData.name, href: `/services/${service}/${city}` },
        ]}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        aria-labelledby="location-hero-title"
      >
        <div className="absolute inset-0 bg-ink" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,130,15,0.10) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex max-w-3xl flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white/70 uppercase">
              <MapPin className="size-3.5" aria-hidden="true" />
              {cityData.name}
            </span>
            <h1
              id="location-hero-title"
              className="text-3xl font-bold tracking-tight text-white text-balance md:text-4xl lg:text-5xl"
            >
              {content.h1}
            </h1>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <GetQuoteLink
                href="/contact"
                source="location_page_hero"
                className="inline-flex items-center justify-center rounded-md bg-signal-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-orange/90"
              >
                Get a Free Quote
              </GetQuoteLink>
              <PhoneLink
                href={`tel:${company.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="size-4" aria-hidden="true" />
                {company.phone}
              </PhoneLink>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-14 md:py-20" aria-labelledby="local-context-title">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="local-context-title"
            className="text-2xl font-bold tracking-tight text-balance md:text-3xl"
          >
            {serviceLabel} in {cityData.name}
          </h2>
          <div className="mt-8 flex flex-col gap-8 md:gap-10">
            {content.localContext.map((block) => (
              <div key={block.heading} className="max-w-3xl">
                <h3 className="text-lg font-semibold tracking-tight">
                  {block.heading}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas + ground conditions */}
      <section
        className="border-y bg-muted/40 py-14 md:py-20"
        aria-labelledby="coverage-title"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h2
                id="coverage-title"
                className="text-2xl font-bold tracking-tight md:text-3xl"
              >
                Areas we cover in {cityData.name}
              </h2>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {cityData.areas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-signal-orange"
                      aria-hidden="true"
                    />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Utility owners and permitting bodies we work alongside here:{" "}
                {cityData.authorities.join(", ")}.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Ground conditions in {cityData.name}
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {cityData.groundNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicePageFAQ
        title={`${serviceLabel} in ${cityData.name} — Common Questions`}
        items={content.faqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />

      {/* Cross-links */}
      <section className="py-14 md:py-20" aria-labelledby="related-title">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="related-title"
            className="text-2xl font-bold tracking-tight md:text-3xl"
          >
            Related pages
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {siblingCities.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                  {serviceLabel} elsewhere in the UAE
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {siblingCities.map((r) => (
                    <li key={`${r.service}-${r.city}`}>
                      <Link
                        href={`/services/${r.service}/${r.city}`}
                        className="text-signal-orange underline-offset-4 hover:underline"
                      >
                        {serviceLabels[r.service]} in {cities[r.city].name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={`/services/${service}`}
                      className="text-signal-orange underline-offset-4 hover:underline"
                    >
                      {serviceLabel} across the UAE
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {otherServicesHere.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                  Other services in {cityData.name}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {otherServicesHere.map((r) => (
                    <li key={`${r.service}-${r.city}`}>
                      <Link
                        href={`/services/${r.service}/${r.city}`}
                        className="text-signal-orange underline-offset-4 hover:underline"
                      >
                        {serviceLabels[r.service]} in {cities[r.city].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-14 md:py-20">
        <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl font-bold tracking-tight text-white text-balance md:text-3xl">
            Need {serviceLabel.toLowerCase()} in {cityData.name}?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Tell us the site and what you need done. We will give you a clear
            quote and a realistic date, usually the same day.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <GetQuoteLink
              href="/contact"
              source="location_page_footer"
              className="inline-flex items-center justify-center rounded-md bg-signal-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-orange/90"
            >
              Get a Free Quote
            </GetQuoteLink>
            <PhoneLink
              href={`tel:${company.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden="true" />
              {company.phone}
            </PhoneLink>
          </div>
        </div>
      </section>
    </div>
  );
}
