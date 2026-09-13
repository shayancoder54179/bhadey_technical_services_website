import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, Mail, Check, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { cities, locationRoutes, serviceLabels } from "@/data/locations";
import { GetQuoteLink, PhoneLink, WhatsAppLink } from "@/components/seo/TrackedCtaLinks";
import { company } from "@/data/company";
import { ServicePageFAQ } from "./ServicePageFAQ";
import type { ServicePageData } from "@/lib/service-page-types";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { cn } from "@/lib/utils";

const whatsappUrl = (message: string) =>
  `${company.socialLinks.whatsapp}?text=${encodeURIComponent(message)}`;

interface ServicePageTemplateProps {
  data: ServicePageData;
  /** Optional extra section(s) to render before Related Services (e.g. GPR vs Concrete comparison) */
  children?: React.ReactNode;
}

export function ServicePageTemplate({ data, children }: ServicePageTemplateProps) {
  const {
    slug,
    breadcrumb,
    hero,
    overview,
    equipment,
    features,
    applications,
    process,
    galleryImages,
    galleryTitle,
    peopleAlsoAsk,
    relatedServices,
    faq,
    ctaTitle,
    ctaDescription,
  } = data;

  const cityPages = locationRoutes.filter((r) => r.service === slug);

  // "People Also Ask" used to render as a second, separate Q&A accordion, which
  // meant two identical-looking FAQ blocks on the same page (and ~60% of the
  // questions were duplicates). The unique ones are merged into the one FAQ.
  const faqQuestions = new Set(
    faq.items.map((item) => item.question.trim().toLowerCase())
  );
  const faqItems = [
    ...faq.items,
    ...(peopleAlsoAsk ?? []).filter(
      (item) => !faqQuestions.has(item.question.trim().toLowerCase())
    ),
  ];

  return (
    <div className="min-h-screen bg-background">
      <ServiceJsonLd slug={slug} />
      <div className="scroll-mt-20">
        <Breadcrumbs items={breadcrumb} />

        {/* Hero */}
        <section
          className="section-y relative overflow-hidden"
          aria-labelledby="service-hero-title"
        >
          <div className="absolute inset-0 bg-graphite" aria-hidden />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(120% 90% at 12% 20%, rgba(234,88,12,0.16) 0%, transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <div
              className={cn(
                "flex flex-col gap-10",
                hero.image && "lg:flex-row lg:items-center lg:gap-12"
              )}
            >
              <header className={hero.image ? "max-w-3xl lg:flex-1" : "max-w-3xl"}>
                <h1 id="service-hero-title" className="display-xl text-white">
                  {hero.title}
                </h1>
                <p className="mt-5 max-w-[54ch] text-[1.0625rem] leading-relaxed text-white/75">
                  {hero.subtitle}
                </p>
                <div className="mt-7 mb-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-13 w-full rounded-md bg-safety px-8 text-base font-semibold text-white shadow-lift transition-all hover:bg-safety/90 sm:w-auto"
                  >
                    <GetQuoteLink href={hero.ctaPrimaryHref ?? "/contact"}>{hero.ctaPrimaryLabel}</GetQuoteLink>
                  </Button>
                  {hero.ctaSecondaryLabel && hero.ctaSecondaryHref && (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="h-13 w-full rounded-md border border-white/25 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-white/10 hover:text-white sm:w-auto"
                    >
                      <PhoneLink
                        href={hero.ctaSecondaryHref}
                        className="inline-flex items-center gap-2"
                      >
                        <Phone className="size-5" aria-hidden />
                        {hero.ctaSecondaryLabel}
                      </PhoneLink>
                    </Button>
                  )}
                </div>
                <div
                  className="inline-grid gap-px overflow-hidden rounded-lg bg-hairline shadow-deep"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(hero.stats.length, 3)}, minmax(0, 1fr))`,
                  }}
                  role="list"
                >
                  {hero.stats.map((stat, i) => (
                    <div key={i} role="listitem" className="bg-white px-5 py-4">
                      <span className="block font-mono text-2xl font-bold tabular-nums text-graphite">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-sm text-slate-deep">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </header>
              {hero.image && (
                <div className="w-full flex-shrink-0 overflow-hidden rounded-xl shadow-deep ring-1 ring-white/10 lg:w-[42%]">
                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    width={800}
                    height={500}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={true}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Overview / What Is */}
        <section className="section-y border-t border-hairline bg-surface" aria-labelledby="overview-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="overview-heading" className="display-lg mb-6 text-graphite">
              {overview.title}
            </h2>
            <div className="mb-10 max-w-[70ch]">
              <p className="leading-relaxed">{overview.description}</p>
            </div>
            {overview.howItWorks && overview.howItWorks.length > 0 && (
              <div className="mb-10">
                <h3 className="display-sm mb-6 text-graphite">How It Works</h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {overview.howItWorks.map((step) => (
                    <div key={step.step} className="rounded-xl border border-hairline bg-surface p-5 shadow-panel">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-safety/10 font-mono font-semibold text-safety">
                          {step.step}
                        </span>
                        <h4 className="display-sm text-graphite">{step.title}</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-deep">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {overview.benefits && overview.benefits.length > 0 && (
              <div>
                <h3 className="display-sm mb-4 text-graphite">Benefits</h3>
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
                  {overview.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-deep"
                      role="listitem"
                    >
                      <Check className="mt-0.5 size-5 shrink-0 text-safety" aria-hidden />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Equipment */}
        <section className="section-y border-t border-hairline bg-mist" aria-labelledby="equipment-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="equipment-heading" className="display-lg mb-4 text-graphite">
              {equipment.title}
            </h2>
            <p className="spec-label mb-3 text-safety">{equipment.name}</p>

            <div
              className={cn(
                "mb-8 gap-8",
                equipment.image ? "grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start" : ""
              )}
            >
              <p className="max-w-[70ch] leading-relaxed text-slate-deep">
                {equipment.description}
              </p>

              {equipment.image && (
                <figure className="overflow-hidden rounded-xl border border-hairline bg-graphite shadow-lift">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={equipment.image.src}
                      alt={equipment.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  {equipment.image.caption && (
                    <figcaption className="bg-surface px-4 py-3 text-sm text-slate-deep">
                      {equipment.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
            {equipment.specs && equipment.specs.length > 0 && (
              <div className="mb-8">
                <h3 className="display-sm mb-4 text-graphite">Technical Specifications</h3>
                <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {equipment.specs.map((spec, i) => (
                    <div key={i} className="rounded-lg border border-hairline bg-surface px-4 py-3 shadow-panel">
                      <dt className="spec-label text-slate-soft">{spec.label}</dt>
                      <dd className="mt-1 font-mono font-semibold text-graphite">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {equipment.whyBest && (
              <div className="rounded-xl border border-hairline bg-surface p-6 shadow-panel">
                <h3 className="display-sm mb-2 text-graphite">Why This Equipment</h3>
                <p className="leading-relaxed text-slate-deep">{equipment.whyBest}</p>
              </div>
            )}
          </div>
        </section>

        {/* Features / Benefits grid */}
        <section className="section-y border-t border-hairline bg-surface" aria-labelledby="features-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="features-heading" className="display-lg mb-10 text-graphite">
              Features &amp; Benefits
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, i) => (
                <div key={i} className="flex flex-row items-start gap-4 rounded-xl border border-hairline bg-surface p-5 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-safety/10">
                    <Check className="size-5 text-safety" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-graphite">{item.title}</h3>
                    {item.description && (
                      <p className="mt-1 text-sm leading-relaxed text-slate-deep">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="section-y border-t border-hairline bg-mist" aria-labelledby="applications-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="applications-heading" className="display-lg mb-10 text-graphite">
              Applications
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {applications.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-hairline bg-surface px-4 py-4 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-safety/10 text-safety">
                    <Grid3X3 className="size-5" aria-hidden />
                  </span>
                  <span className="font-medium text-graphite">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-y border-t border-hairline bg-surface" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="process-heading" className="display-lg mb-10 text-graphite">
              {process.title}
            </h2>
            <div className="space-y-8 max-w-3xl">
              {process.steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-graphite font-mono text-lg font-semibold text-white">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="display-sm mb-2 text-graphite">{step.title}</h3>
                    <p className="leading-relaxed text-slate-deep">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery: project / service photos */}
        {galleryImages && galleryImages.length > 0 && (
          <section className="section-y border-t border-hairline bg-mist" aria-labelledby="gallery-heading">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
              <h2 id="gallery-heading" className="display-lg mb-10 text-graphite">
                {galleryTitle ?? "Gallery"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl border border-hairline bg-graphite shadow-panel"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Optional extra content (e.g. GPR vs Concrete comparison) */}
        {children}

        {/* Where this service has a dedicated location page */}
        {cityPages.length > 0 && (
          <section
            className="section-y border-t border-hairline bg-surface"
            aria-labelledby="service-areas-heading"
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
              <h2
                id="service-areas-heading"
                className="display-lg mb-3 text-graphite"
              >
                Where We Work
              </h2>
              <p className="mb-8 max-w-2xl text-slate-deep">
                Local pages covering the areas, ground conditions and site
                requirements specific to each emirate.
              </p>
              <ul className="flex flex-wrap gap-4" role="list">
                {cityPages.map(({ city }) => (
                  <li key={city} role="listitem">
                    <Link
                      href={`/services/${slug}/${city}`}
                      className="inline-flex items-center gap-2 rounded-md border border-hairline bg-surface px-4 py-2.5 text-sm font-medium text-graphite shadow-panel transition-all hover:border-safety hover:text-safety hover:shadow-lift"
                    >
                      {serviceLabels[slug] ?? "This service"} in{" "}
                      {cities[city].name}
                      <ChevronRight className="size-4" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Related Services */}
        <section className="section-y border-t border-hairline bg-mist" aria-labelledby="related-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="related-heading" className="display-lg mb-8 text-graphite">
              Related Services
            </h2>
            <ul className="flex flex-wrap gap-4" role="list">
              {relatedServices.map((link, i) => (
                <li key={i} role="listitem">
                  <Button asChild variant="outline" size="lg" className="rounded-md border-hairline bg-surface font-semibold text-graphite shadow-panel transition-all hover:border-safety hover:bg-surface hover:text-safety hover:shadow-lift">
                    <Link href={link.href} className="inline-flex items-center gap-2">
                      {link.label}
                      <ChevronRight className="size-4" aria-hidden />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <ServicePageFAQ title={faq.title} items={faqItems} />

        {/* CTA */}
        <section
          className="section-y relative overflow-hidden"
          aria-labelledby="cta-heading"
        >
          <div className="absolute inset-0 bg-graphite" aria-hidden />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(ellipse 70% 60% at 25% 0%, rgba(234,88,12,0.18) 0%, transparent 60%)",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-12 xl:px-16">
            <div>
              <h2 id="cta-heading" className="display-lg text-white">
                {ctaTitle}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                {ctaDescription}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-13 w-full rounded-md bg-safety px-8 text-base font-semibold text-white shadow-lift transition-all hover:bg-safety/90 sm:w-auto"
                >
                  <GetQuoteLink
                    href={whatsappUrl(ctaDescription)}
                    className="inline-flex items-center gap-2"
                  >
                    Get Free Quote
                  </GetQuoteLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="h-13 w-full rounded-md bg-[#25D366] px-8 text-base font-semibold text-white shadow-lift transition-colors hover:bg-[#20BD5A] sm:w-auto"
                >
                  <WhatsAppLink
                    href={whatsappUrl(ctaDescription)}
                    className="inline-flex items-center gap-2"
                  >
                    <WhatsAppIcon className="size-5" aria-hidden />
                    WhatsApp Us
                  </WhatsAppLink>
                </Button>
              </div>
            </div>

            {/* Light contact plate — never a dark panel on the dark band */}
            <div className="rounded-xl bg-white p-6 shadow-deep md:p-8">
              <p className="spec-label text-safety">Direct lines</p>
              <PhoneLink
                href={`tel:${company.phoneClean}`}
                className="mt-5 flex items-center gap-3 font-mono text-lg font-semibold text-graphite transition-colors hover:text-safety"
              >
                <Phone className="size-5 shrink-0 text-safety" aria-hidden />
                {company.phone}
              </PhoneLink>
              <a
                href={`mailto:${company.email}`}
                className="mt-3 flex items-center gap-3 break-all text-[0.9375rem] font-medium text-slate-deep transition-colors hover:text-safety"
              >
                <Mail className="size-5 shrink-0 text-safety" aria-hidden />
                {company.email}
              </a>
              <p className="mt-5 border-t border-hairline pt-5 text-sm text-slate-soft">
                We respond within 1 hour during business hours.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
