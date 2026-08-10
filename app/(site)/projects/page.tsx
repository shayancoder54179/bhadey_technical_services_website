import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { GetQuoteLink, WhatsAppLink } from "@/components/seo/TrackedCtaLinks";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";
import { ProjectsFilterGrid } from "@/components/projects/ProjectsFilterGrid";

export const metadata: Metadata = {
  title: "Our Projects Across the UAE",
  description:
    "GPR scanning, core cutting and excavation delivered on UAE landmark projects including The Dubai Mall, ADNOC Headquarters and Kempinski Hotel.",
  alternates: { canonical: "https://www.bhadeya.com/projects" },
  openGraph: {
    title: "Our Projects | Bhadeya Technical Services UAE",
    description:
      "Portfolio of GPR scanning and core cutting projects. Trusted by Dubai Mall, Emaar, ADNOC & more.",
    url: "https://www.bhadeya.com/projects",
    type: "website",
  },
};

const NOTABLE_CLIENTS = [
  "Dubai Mall",
  "Emaar",
  "ADNOC",
  "Kempinski",
  "Yas Mall",
  "Mediclinic",
  "Nakheel Mall",
  "Al Dar",
  "Edition Hotel",
  "Dubai Properties",
];

const whatsappUrl = `${company.socialLinks.whatsapp}?text=${encodeURIComponent(
  "Hello, I would like to discuss a project for GPR scanning, core cutting, or excavation."
)}`;

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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }]} />

      {/* Page Hero */}
      <section
        className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
        aria-labelledby="projects-hero-title"
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
          <header className="max-w-3xl">
            <h1
              id="projects-hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold leading-tight text-paper mb-4 tracking-tight"
            >
              Our Projects & Portfolio
            </h1>
            <p className="text-lg text-paper/80">
              Trusted across UAE&apos;s most prestigious developments
            </p>
          </header>
        </div>
      </section>

      {/* Filter + Projects Grid */}
      <section
        className="bg-paper py-16 md:py-20 lg:py-24 scroll-mt-20"
        aria-labelledby="projects-grid-heading"
      >
        <h2 id="projects-grid-heading" className="sr-only">
          Filter and browse our project portfolio
        </h2>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <ProjectsFilterGrid />
        </div>
      </section>

      {/* Stats Banner */}
      <section
        className="border-y border-white/10 bg-ink py-8 md:py-10"
        aria-label="Portfolio statistics"
      >
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12 xl:px-16">
          <p className="font-mono text-lg md:text-xl font-semibold text-paper">
            <span className="text-signal-orange">7+</span> Years &middot; <span className="text-signal-orange">6+</span> Cities &middot; Trusted by UAE&apos;s Best
          </p>
        </div>
      </section>

      {/* Notable Clients */}
      <section
        className="bg-concrete py-16 md:py-20"
        aria-labelledby="trusted-by-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="trusted-by-heading"
            className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-10 tracking-tight"
          >
            Trusted By
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {NOTABLE_CLIENTS.map((client) => (
              <span
                key={client}
                className="inline-flex items-center border border-steel/20 bg-paper px-5 py-3 text-sm md:text-base font-semibold text-foreground"
              >
                {client}
              </span>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            And hundreds of residential buildings, commercial properties, banks,
            and interior companies across UAE
          </p>
        </div>
      </section>

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
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-paper mb-4 max-w-2xl mx-auto tracking-tight"
          >
            Have a project? Let&apos;s discuss how we can help.
          </h2>
          <p className="text-lg md:text-xl text-paper/80 max-w-2xl mx-auto mb-10">
            Get a free quote for GPR scanning, core cutting, or excavation. We
            respond within 1 hour during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-none border border-transparent bg-signal-orange text-ink hover:border-paper hover:bg-signal-orange font-semibold text-base px-8 py-6"
            >
              <GetQuoteLink href="/contact" className="inline-flex items-center gap-2">
                Get Quote
              </GetQuoteLink>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-none bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold text-base px-8 py-6"
            >
              <WhatsAppLink href={whatsappUrl} className="inline-flex items-center gap-2">
                <WhatsAppIcon aria-hidden />
                WhatsApp
              </WhatsAppLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
