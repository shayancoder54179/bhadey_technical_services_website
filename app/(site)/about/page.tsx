import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Target, Eye, Heart, Radio, Drill, MapPin, Quote } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { company } from "@/data/company";

const StatsBar = dynamic(
  () => import("@/components/sections/StatsBar").then((m) => m.StatsBar),
  { ssr: true }
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((m) => m.CTASection),
  { ssr: true }
);

export const metadata: Metadata = {
  title:
    "About Bhadeya Technical Services LLC | GPR Scanning Experts Since 2019 | UAE",
  description:
    "Learn about Bhadeya Technical Services LLC - UAE's trusted GPR scanning and core cutting company since 2019. 7+ years experience, serving Dubai, Abu Dhabi, Sharjah & all UAE.",
  alternates: { canonical: "https://www.bhadeya.com/about" },
  openGraph: {
    title: "About Bhadeya Technical Services LLC | UAE",
    description:
      "UAE's trusted GPR scanning and core cutting company since 2019. 7+ years across Dubai, Abu Dhabi, Sharjah & UAE.",
    url: "https://www.bhadeya.com/about",
    type: "website",
  },
};

const sectionClass = "scroll-mt-20";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />

      {/* Page Hero */}
      <section
        className={`relative py-16 md:py-20 lg:py-24 overflow-hidden ${sectionClass}`}
        aria-labelledby="about-hero-title"
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
              id="about-hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold leading-tight text-paper mb-4 tracking-tight"
            >
              About Bhadeya Technical Services L.L.C
            </h1>
            <p className="text-lg text-paper/80">
              Your Trusted Partner for GPR Scanning & Technical Services in UAE
              Since 2019
            </p>
          </header>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="bg-paper py-16 md:py-20 lg:py-24"
        aria-labelledby="our-story-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2
                id="our-story-heading"
                className="text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight"
              >
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, Bhadeya Technical Services L.L.C has grown to
                  become one of the UAE&apos;s most trusted providers of GPR
                  scanning, core cutting, and excavation
                  services. With over 7 years of hands-on experience, we have built a reputation for precision,
                  reliability, and safety.
                </p>
                <p>
                  From The Dubai Mall to ADNOC Headquarters, from Kempinski Hotel
                  to Sheikh Khalifa Hospital, our team has delivered expert
                  scanning and cutting services to the UAE&apos;s most
                  prestigious projects. We invest in the best equipment
                  available—the Proceq GP8000 and professional core cutting systems—because
                  our clients deserve nothing less than the most accurate
                  results.
                </p>
                <p>
                  Our mission is simple: ensure every cut, drill, and excavation
                  is safe. We believe that proper scanning should precede every
                  construction intervention, and we&apos;re committed to making
                  that standard practice across the UAE construction industry.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] border border-steel/20 overflow-hidden">
              <Image
                src="/images/7272030 (1).jpg"
                alt="Bhadeya Technical Services GPR scanning expert at work in Dubai UAE - Proceq GP8000 ground penetrating radar on concrete"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section
        className="bg-concrete py-16 md:py-20 lg:py-24"
        aria-labelledby="mission-values-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="mission-values-heading"
            className="text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center tracking-tight"
          >
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="border border-steel/20 bg-paper p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Target className="size-6" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide the most accurate and reliable GPR scanning and
                technical services in the UAE, ensuring safety and precision in
                every project.
              </p>
            </div>
            <div className="border border-steel/20 bg-paper p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Eye className="size-6" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the UAE&apos;s first choice for non-destructive testing
                and construction technical services.
              </p>
            </div>
            <div className="border border-steel/20 bg-paper p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Heart className="size-6" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Safety, Precision, Reliability, Innovation, Integrity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Equipment */}
      <section
        className="bg-paper py-16 md:py-20 lg:py-24"
        aria-labelledby="equipment-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="equipment-heading"
            className="text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center tracking-tight"
          >
            Our Equipment
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="border border-steel/20 bg-concrete/40 p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Radio className="size-6" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                Proceq GP8000
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1" role="list">
                <li>• Industry-leading GPR scanner</li>
                <li>• 500cm maximum depth</li>
                <li>• Real-time 3D visualization</li>
                <li>• Used for GPR Scanning</li>
              </ul>
            </div>
            <div className="border border-steel/20 bg-concrete/40 p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Drill className="size-6" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                Professional Diamond Core Cutting Systems
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1" role="list">
                <li>• Professional-grade equipment</li>
                <li>• 12–500mm diameter range</li>
                <li>• Clean, precise cuts</li>
                <li>• Used for Core Cutting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers / Stats */}
      <div id="stats" className={sectionClass}>
        <StatsBar />
      </div>

      {/* Service Areas */}
      <section
        className="bg-concrete py-16 md:py-20 lg:py-24"
        aria-labelledby="service-areas-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="service-areas-heading"
            className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center tracking-tight"
          >
            Service Areas
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            We provide GPR scanning and core cutting services across the UAE.
          </p>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-mono text-xs uppercase tracking-widest text-steel mb-4 text-center">
              Cities we serve
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {company.serviceAreas.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 border border-steel/20 bg-paper px-4 py-3 text-muted-foreground"
                  role="listitem"
                >
                  <MapPin
                    className="size-4 shrink-0 text-signal-orange"
                    aria-hidden
                  />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section
        className="bg-paper py-16 md:py-20 lg:py-24"
        aria-labelledby="why-choose-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="why-choose-heading"
            className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center tracking-tight"
          >
            Why Clients Choose Us
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Trusted by leading developers, contractors, and consultants across
            the UAE.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            <blockquote className="border border-steel/20 bg-concrete/40 p-6 md:p-8">
              <Quote className="size-10 text-signal-orange/40 mb-4" aria-hidden />
              <p className="text-foreground font-medium mb-2">
                &ldquo;They showed up on time, scanned before every cut, and
                delivered clear reports. No surprises on site.&rdquo;
              </p>
              <footer className="text-sm text-muted-foreground">
                — Construction project manager, Dubai
              </footer>
            </blockquote>
            <blockquote className="border border-steel/20 bg-concrete/40 p-6 md:p-8">
              <Quote className="size-10 text-signal-orange/40 mb-4" aria-hidden />
              <p className="text-foreground font-medium mb-2">
                &ldquo;Best GPR and core cutting team we&apos;ve worked with in
                the UAE. Equipment is top-notch, results are accurate.&rdquo;
              </p>
              <footer className="text-sm text-muted-foreground">
                — MEP contractor, Abu Dhabi
              </footer>
            </blockquote>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
            <span className="font-semibold text-foreground">Trusted by:</span>
            <span>The Dubai Mall</span>
            <span>•</span>
            <span>ADNOC</span>
            <span>•</span>
            <span>Emaar</span>
            <span>•</span>
            <span>Kempinski</span>
            <span>•</span>
            <span>Sheikh Khalifa Hospital</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div id="cta" className={sectionClass}>
        <CTASection />
      </div>
    </div>
  );
}
