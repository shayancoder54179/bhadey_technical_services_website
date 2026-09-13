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
        className="section-y relative overflow-hidden"
        aria-labelledby="location-hero-title"
      >
        <div className="absolute inset-0 bg-graphite" aria-hidden />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,130,15,0.10) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex max-w-3xl flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-safety-bright/40 bg-safety/10 px-3.5 py-1.5 spec-label text-safety-bright">
              <MapPin className="size-3.5" aria-hidden="true" />
              {cityData.name}
            </span>
            <h1
              id="location-hero-title"
              className="display-xl text-white"
            >
              {content.h1}
            </h1>
            <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-white/75">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <GetQuoteLink
                href="/contact"
                source="location_page_hero"
                className="inline-flex h-13 items-center justify-center rounded-md bg-safety px-8 text-base font-semibold text-white shadow-lift transition-all hover:bg-safety/90"
              >
                Get a Free Quote
              </GetQuoteLink>
              <PhoneLink
                href={`tel:${company.phoneClean}`}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-white/10"
              >
                <Phone className="size-4" aria-hidden="true" />
                {company.phone}
              </PhoneLink>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="section-y bg-surface" aria-labelledby="local-context-title">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="local-context-title"
            className="display-lg text-graphite"
          >
            {serviceLabel} in {cityData.name}
          </h2>
          <div className="mt-8 flex flex-col gap-8 md:gap-10">
            {content.localContext.map((block) => (
              <div key={block.heading} className="max-w-3xl">
                <h3 className="display-sm text-graphite">
                  {block.heading}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-deep">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas + ground conditions */}
      <section
        className="section-y bg-mist"
        aria-labelledby="coverage-title"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h2
                id="coverage-title"
                className="display-lg text-graphite"
              >
                Areas we cover in {cityData.name}
              </h2>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {cityData.areas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-slate-deep">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-safety"
                      aria-hidden="true"
                    />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-soft">
                Utility owners and permitting bodies we work alongside here:{" "}
                {cityData.authorities.join(", ")}.
              </p>
            </div>
            <div>
              <h2 className="display-lg text-graphite">
                Ground conditions in {cityData.name}
              </h2>
              <p className="mt-6 leading-relaxed text-slate-deep">
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
      <section className="section-y bg-surface" aria-labelledby="related-title">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="related-title"
            className="display-lg text-graphite"
          >
            Related pages
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {siblingCities.length > 0 && (
              <div>
                <h3 className="spec-label text-safety">
                  {serviceLabel} elsewhere in the UAE
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {siblingCities.map((r) => (
                    <li key={`${r.service}-${r.city}`}>
                      <Link
                        href={`/services/${r.service}/${r.city}`}
                        className="font-medium text-graphite underline decoration-safety decoration-2 underline-offset-4 transition-colors hover:text-safety"
                      >
                        {serviceLabels[r.service]} in {cities[r.city].name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={`/services/${service}`}
                      className="font-medium text-graphite underline decoration-safety decoration-2 underline-offset-4 transition-colors hover:text-safety"
                    >
                      {serviceLabel} across the UAE
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {otherServicesHere.length > 0 && (
              <div>
                <h3 className="spec-label text-safety">
                  Other services in {cityData.name}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {otherServicesHere.map((r) => (
                    <li key={`${r.service}-${r.city}`}>
                      <Link
                        href={`/services/${r.service}/${r.city}`}
                        className="font-medium text-graphite underline decoration-safety decoration-2 underline-offset-4 transition-colors hover:text-safety"
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
      <section className="section-y relative overflow-hidden bg-graphite">
        <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12 xl:px-16">
          <h2 className="display-lg text-white">
            Need {serviceLabel.toLowerCase()} in {cityData.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            Tell us the site and what you need done. We will give you a clear
            quote and a realistic date, usually the same day.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <GetQuoteLink
              href="/contact"
              source="location_page_footer"
              className="inline-flex h-13 items-center justify-center rounded-md bg-safety px-8 text-base font-semibold text-white shadow-lift transition-all hover:bg-safety/90"
            >
              Get a Free Quote
            </GetQuoteLink>
            <PhoneLink
              href={`tel:${company.phoneClean}`}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-white/10"
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
