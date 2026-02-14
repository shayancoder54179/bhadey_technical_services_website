import Link from "next/link";
import { ChevronRight, Phone, Check, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
          <div
            className="absolute inset-0 bg-[#0A2540]"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 102, 255, 0.12) 0%, transparent 50%),
                radial-gradient(ellipse 60% 40% at 100% 100%, rgba(0, 102, 255, 0.06) 0%, transparent 50%)
              `,
              backgroundSize: "100% 100%, 100% 100%",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative container mx-auto px-4">
            <header className="max-w-3xl">
              <h1
                id="service-hero-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold leading-tight text-white mb-4"
              >
                {hero.title}
              </h1>
              <p className="text-lg text-white/90 mb-8">
                {hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[var(--color-accent-orange)] text-white hover:bg-[var(--color-accent-orange)]/90 font-semibold px-8 py-6 rounded-lg shadow-lg"
                >
                  <GetQuoteLink href="/contact">{hero.ctaPrimaryLabel}</GetQuoteLink>
                </Button>
                {hero.ctaSecondaryLabel && hero.ctaSecondaryHref && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-white/80 text-white bg-transparent hover:bg-white/10 font-semibold px-6 py-6 rounded-lg"
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
                    className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3"
                  >
                    <span className="text-xl md:text-2xl font-bold text-white tabular-nums block">
                      {stat.value}
                    </span>
                    <span className="text-sm text-white/80">{stat.label}</span>
                  </div>
                ))}
              </div>
            </header>
          </div>
        </section>

        {/* Overview / What Is */}
        <section className="bg-white py-16 md:py-20 lg:py-24" aria-labelledby="overview-heading">
          <div className="container mx-auto px-4">
            <h2 id="overview-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {overview.title}
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none mb-10">
              <p className="leading-relaxed">{overview.description}</p>
            </div>
            {overview.howItWorks && overview.howItWorks.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-foreground mb-6">How It Works</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {overview.howItWorks.map((step) => (
                    <Card key={step.step} className="border-2">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-blue)]/15 text-[var(--color-secondary-blue)] font-bold">
                            {step.step}
                          </span>
                          <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {overview.benefits && overview.benefits.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Benefits</h3>
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
                  {overview.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-muted-foreground"
                      role="listitem"
                    >
                      <Check className="size-5 shrink-0 text-[var(--color-accent-orange)] mt-0.5" aria-hidden />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Equipment */}
        <section className="bg-muted/40 py-16 md:py-20 lg:py-24" aria-labelledby="equipment-heading">
          <div className="container mx-auto px-4">
            <h2 id="equipment-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {equipment.title}
            </h2>
            <p className="text-lg font-semibold text-foreground mb-2">{equipment.name}</p>
            <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
              {equipment.description}
            </p>
            {equipment.specs && equipment.specs.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Technical Specifications</h3>
                <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {equipment.specs.map((spec, i) => (
                    <div key={i} className="rounded-lg border bg-card px-4 py-3">
                      <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                      <dd className="font-semibold text-foreground">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {equipment.whyBest && (
              <div className="rounded-xl border-2 border-[var(--color-secondary-blue)]/20 bg-[var(--color-secondary-blue)]/5 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Why This Equipment</h3>
                <p className="text-muted-foreground leading-relaxed">{equipment.whyBest}</p>
              </div>
            )}
          </div>
        </section>

        {/* Features / Benefits grid */}
        <section className="bg-white py-16 md:py-20 lg:py-24" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <h2 id="features-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              Features &amp; Benefits
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, i) => (
                <Card key={i} className="border-2 flex flex-row items-start gap-4 p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-orange)]/15">
                    <Check className="size-5 text-[var(--color-accent-orange)]" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-muted/40 py-16 md:py-20 lg:py-24" aria-labelledby="applications-heading">
          <div className="container mx-auto px-4">
            <h2 id="applications-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              Applications
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {applications.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border bg-card px-4 py-4 shadow-sm"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Grid3X3 className="size-5" aria-hidden />
                  </span>
                  <span className="font-medium text-foreground">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-16 md:py-20 lg:py-24" aria-labelledby="process-heading">
          <div className="container mx-auto px-4">
            <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              {process.title}
            </h2>
            <div className="space-y-8 max-w-3xl">
              {process.steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-blue)] text-white font-bold text-lg">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AEO: People Also Ask style Q&A */}
        {peopleAlsoAsk && peopleAlsoAsk.length > 0 && (
          <section className="bg-white py-16 md:py-20 lg:py-24 border-t border-border" aria-labelledby="people-also-ask-heading">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 id="people-also-ask-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                People Also Ask
              </h2>
              <div className="space-y-6">
                {peopleAlsoAsk.map((item, i) => (
                  <article key={i} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Optional: City-specific SEO paragraphs */}
        {seoParagraphs && seoParagraphs.length > 0 && (
          <section className="bg-muted/40 py-16 md:py-20 lg:py-24" aria-label="Service information by location">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="space-y-8 prose prose-lg text-muted-foreground max-w-none">
                {seoParagraphs.map((block, i) => (
                  <div key={i}>
                    {block.title && (
                      <h3 className="text-xl font-semibold text-foreground mb-2">{block.title}</h3>
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
        <section className="bg-white py-16 md:py-20 lg:py-24 border-t border-border" aria-labelledby="related-heading">
          <div className="container mx-auto px-4">
            <h2 id="related-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Related Services
            </h2>
            <ul className="flex flex-wrap gap-4" role="list">
              {relatedServices.map((link, i) => (
                <li key={i} role="listitem">
                  <Button asChild variant="outline" size="lg" className="rounded-lg">
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
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0066ff] via-[#0052cc] to-[#0A2540]"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            }}
            aria-hidden
          />
          <div className="relative container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto">
              {ctaTitle}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white text-[#0066ff] hover:bg-white/95 font-semibold text-base px-8 py-6 rounded-lg shadow-lg"
              >
                <GetQuoteLink href="/contact" className="inline-flex items-center gap-2">
                  Get Free Quote
                </GetQuoteLink>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold text-base px-8 py-6 rounded-lg shadow-lg"
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
            <p className="text-white/80 text-sm">
              <PhoneLink href={`tel:${company.phoneClean}`} className="hover:text-white font-medium">
                {company.phone}
              </PhoneLink>
              {" · "}
              <a href={`mailto:${company.email}`} className="hover:text-white font-medium">
                {company.email}
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
