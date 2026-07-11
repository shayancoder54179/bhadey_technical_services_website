import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, Check, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { GetQuoteLink, PhoneLink, WhatsAppLink } from "@/components/seo/TrackedCtaLinks";
import { company } from "@/data/company";
import { ServicePageFAQ } from "./ServicePageFAQ";
import type { ServicePageData } from "@/lib/service-page-types";
import { cn } from "@/lib/utils";

const whatsappUrl = (message: string) =>
  `${company.socialLinks.whatsapp}?text=${encodeURIComponent(message)}`;

function WhatsAppIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5", className)}
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface ServicePageTemplateProps {
  data: ServicePageData;
  /** Optional extra section(s) to render before Related Services (e.g. GPR vs Concrete comparison) */
  children?: React.ReactNode;
}

export function ServicePageTemplate({ data, children }: ServicePageTemplateProps) {
  const {
    breadcrumb,
    hero,
    overview,
    equipment,
    features,
    applications,
    process,
    galleryImages,
    galleryTitle,
    seoParagraphs,
    peopleAlsoAsk,
    relatedServices,
    faq,
    ctaTitle,
    ctaDescription,
  } = data;

  return (
    <div className="min-h-screen bg-background">
      <div className="scroll-mt-20">
        <Breadcrumbs items={breadcrumb} />

        {/* Hero */}
        <section
          className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
          aria-labelledby="service-hero-title"
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
            <div
              className={cn(
                "flex flex-col gap-10",
                hero.image && "lg:flex-row lg:items-center lg:gap-12"
              )}
            >
              <header className={hero.image ? "max-w-3xl lg:flex-1" : "max-w-3xl"}>
                <h1
                  id="service-hero-title"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold leading-tight text-paper mb-4 tracking-tight"
                >
                  {hero.title}
                </h1>
                <p className="text-lg text-paper/80 mb-8">
                  {hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto rounded-none border border-transparent bg-signal-orange text-ink hover:border-ink hover:bg-signal-orange font-semibold px-8 py-6"
                  >
                    <GetQuoteLink href={hero.ctaPrimaryHref ?? "/contact"}>{hero.ctaPrimaryLabel}</GetQuoteLink>
                  </Button>
                  {hero.ctaSecondaryLabel && hero.ctaSecondaryHref && (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto rounded-none border-2 border-white/25 text-paper bg-transparent hover:bg-white/5 hover:text-paper hover:border-white/40 font-semibold px-6 py-6"
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
                <div className="flex flex-wrap gap-4 sm:gap-6" role="list">
                  {hero.stats.map((stat, i) => (
                    <div
                      key={i}
                      role="listitem"
                      className="border border-white/15 bg-white/[0.04] px-4 py-3"
                    >
                      <span className="font-mono text-xl md:text-2xl font-semibold text-paper tabular-nums block">
                        {stat.value}
                      </span>
                      <span className="text-sm text-paper/70">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </header>
              {hero.image && (
                <div className="flex-shrink-0 w-full lg:w-[42%] overflow-hidden border border-white/10">
                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={true}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Overview / What Is */}
        <section className="bg-paper py-16 md:py-20 lg:py-24" aria-labelledby="overview-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="overview-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
              {overview.title}
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none mb-10">
              <p className="leading-relaxed">{overview.description}</p>
            </div>
            {overview.howItWorks && overview.howItWorks.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-foreground mb-6 tracking-tight">How It Works</h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {overview.howItWorks.map((step) => (
                    <div key={step.step} className="border border-steel/20 bg-paper p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="flex size-9 shrink-0 items-center justify-center bg-signal-orange/10 font-mono font-semibold text-signal-orange">
                          {step.step}
                        </span>
                        <h4 className="text-lg font-semibold text-foreground tracking-tight">{step.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {overview.benefits && overview.benefits.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Benefits</h3>
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
                  {overview.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-muted-foreground"
                      role="listitem"
                    >
                      <Check className="size-5 shrink-0 text-signal-orange mt-0.5" aria-hidden />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Equipment */}
        <section className="bg-concrete py-16 md:py-20 lg:py-24" aria-labelledby="equipment-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="equipment-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
              {equipment.title}
            </h2>
            <p className="text-lg font-semibold text-foreground mb-2">{equipment.name}</p>
            <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
              {equipment.description}
            </p>
            {equipment.specs && equipment.specs.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">Technical Specifications</h3>
                <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {equipment.specs.map((spec, i) => (
                    <div key={i} className="border border-steel/20 bg-paper px-4 py-3">
                      <dt className="font-mono text-xs uppercase tracking-wide text-steel">{spec.label}</dt>
                      <dd className="font-semibold text-foreground">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {equipment.whyBest && (
              <div className="border border-steel/20 bg-paper p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">Why This Equipment</h3>
                <p className="text-muted-foreground leading-relaxed">{equipment.whyBest}</p>
              </div>
            )}
          </div>
        </section>

        {/* Features / Benefits grid */}
        <section className="bg-paper py-16 md:py-20 lg:py-24" aria-labelledby="features-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-10 tracking-tight">
              Features &amp; Benefits
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, i) => (
                <div key={i} className="flex flex-row items-start gap-4 border border-steel/20 bg-paper p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center bg-signal-orange/10">
                    <Check className="size-5 text-signal-orange" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
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
        <section className="bg-concrete py-16 md:py-20 lg:py-24" aria-labelledby="applications-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="applications-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-10 tracking-tight">
              Applications
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {applications.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border border-steel/20 bg-paper px-4 py-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center bg-signal-orange/10 text-signal-orange">
                    <Grid3X3 className="size-5" aria-hidden />
                  </span>
                  <span className="font-medium text-foreground">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-paper py-16 md:py-20 lg:py-24" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="process-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-10 tracking-tight">
              {process.title}
            </h2>
            <div className="space-y-8 max-w-3xl">
              {process.steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center bg-ink font-mono text-lg font-semibold text-paper">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery: project / service photos */}
        {galleryImages && galleryImages.length > 0 && (
          <section className="bg-concrete py-16 md:py-20 lg:py-24" aria-labelledby="gallery-heading">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
              <h2 id="gallery-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-10 tracking-tight">
                {galleryTitle ?? "Gallery"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden border border-steel/20 bg-paper"
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

        {/* AEO: People Also Ask style Q&A */}
        {peopleAlsoAsk && peopleAlsoAsk.length > 0 && (
          <section className="bg-paper py-16 md:py-20 lg:py-24 border-t border-steel/20" aria-labelledby="people-also-ask-heading">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
              <div className="max-w-3xl mx-auto">
                <h2 id="people-also-ask-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-tight">
                  People Also Ask
                </h2>
                <div className="space-y-6">
                  {peopleAlsoAsk.map((item, i) => (
                    <article key={i} className="border-b border-steel/20 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">{item.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Optional: City-specific SEO paragraphs */}
        {seoParagraphs && seoParagraphs.length > 0 && (
          <section className="bg-concrete py-16 md:py-20 lg:py-24" aria-label="Service information by location">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
              <div className="max-w-3xl mx-auto space-y-8 prose prose-lg text-muted-foreground max-w-none">
                {seoParagraphs.map((block, i) => (
                  <div key={i}>
                    {block.title && (
                      <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">{block.title}</h3>
                    )}
                    <p className="leading-relaxed">{block.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Optional extra content (e.g. GPR vs Concrete comparison) */}
        {children}

        {/* Related Services */}
        <section className="bg-paper py-16 md:py-20 lg:py-24 border-t border-steel/20" aria-labelledby="related-heading">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 id="related-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-tight">
              Related Services
            </h2>
            <ul className="flex flex-wrap gap-4" role="list">
              {relatedServices.map((link, i) => (
                <li key={i} role="listitem">
                  <Button asChild variant="outline" size="lg" className="rounded-none border-steel/30">
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
        <ServicePageFAQ title={faq.title} items={faq.items} />

        {/* CTA */}
        <section
          className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
          aria-labelledby="cta-heading"
        >
          <div className="absolute inset-0 bg-ink" aria-hidden />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,130,15,0.10) 0%, transparent 55%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12 xl:px-16">
            <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-paper mb-4 max-w-2xl mx-auto tracking-tight">
              {ctaTitle}
            </h2>
            <p className="text-lg md:text-xl text-paper/80 max-w-2xl mx-auto mb-10">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-none border border-transparent bg-signal-orange text-ink hover:border-paper hover:bg-signal-orange font-semibold text-base px-8 py-6"
              >
                <GetQuoteLink href={whatsappUrl(ctaDescription)} className="inline-flex items-center gap-2">
                  Get Free Quote via WhatsApp
                </GetQuoteLink>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-none bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold text-base px-8 py-6"
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
            <p className="text-paper/70 text-sm">
              <PhoneLink href={`tel:${company.phoneClean}`} className="hover:text-signal-orange font-medium">
                {company.phone}
              </PhoneLink>
              {" · "}
              <a href={`mailto:${company.email}`} className="hover:text-signal-orange font-medium">
                {company.email}
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
