import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Target, Eye, Heart, Radio, Box, Drill, MapPin, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    "Learn about Bhadeya Technical Services LLC - UAE's trusted GPR scanning and core cutting company since 2019. 5+ years experience, 500+ projects, serving Dubai, Abu Dhabi, Sharjah & all UAE.",
  alternates: { canonical: "https://www.bhadeyatechnical.com/about" },
  openGraph: {
    title: "About Bhadeya Technical Services LLC | UAE",
    description:
      "UAE's trusted GPR scanning and core cutting company since 2019. 5+ years, 500+ projects across Dubai, Abu Dhabi, Sharjah & UAE.",
    url: "https://www.bhadeyatechnical.com/about",
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
              id="about-hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold leading-tight text-white mb-4"
            >
              About Bhadeya Technical Services L.L.C
            </h1>
            <p className="text-lg text-white/90">
              Your Trusted Partner for GPR Scanning & Technical Services in UAE
              Since 2019
            </p>
          </header>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="bg-white py-16 md:py-20 lg:py-24"
        aria-labelledby="our-story-heading"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2
                id="our-story-heading"
                className="text-2xl md:text-3xl font-bold text-foreground mb-6"
              >
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, Bhadeya Technical Services L.L.C has grown to
                  become one of the UAE&apos;s most trusted providers of GPR
                  scanning, core cutting, and excavation
                  services. With over 5 years of hands-on experience and 500+
                  completed projects, we have built a reputation for precision,
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
            <div
              className="aspect-[4/3] rounded-xl bg-muted border border-border overflow-hidden flex items-center justify-center"
              aria-hidden
            >
              <div
                className="w-full h-full flex items-center justify-center text-muted-foreground/50 text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,102,255,0.06) 0%, rgba(255,107,0,0.04) 100%)",
                }}
              >
                Image placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section
        className="bg-muted/50 py-16 md:py-20 lg:py-24"
        aria-labelledby="mission-values-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="mission-values-heading"
            className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
          >
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 hover:border-[var(--color-secondary-blue)]/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="inline-flex size-12 rounded-full items-center justify-center bg-[var(--color-secondary-blue)]/15 text-[var(--color-secondary-blue)] mb-2">
                  <Target className="size-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-foreground">Mission</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide the most accurate and reliable GPR scanning and
                  technical services in the UAE, ensuring safety and precision in
                  every project.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-[var(--color-secondary-blue)]/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="inline-flex size-12 rounded-full items-center justify-center bg-[var(--color-secondary-blue)]/15 text-[var(--color-secondary-blue)] mb-2">
                  <Eye className="size-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-foreground">Vision</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the UAE&apos;s first choice for non-destructive testing
                  and construction technical services.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-[var(--color-secondary-blue)]/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="inline-flex size-12 rounded-full items-center justify-center bg-[var(--color-accent-orange)]/15 text-[var(--color-accent-orange)] mb-2">
                  <Heart className="size-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-foreground">Values</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Safety, Precision, Reliability, Innovation, Integrity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Equipment */}
      <section
        className="bg-white py-16 md:py-20 lg:py-24"
        aria-labelledby="equipment-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="equipment-heading"
            className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
          >
            Our Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 hover:border-[var(--color-secondary-blue)]/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="inline-flex size-12 rounded-full items-center justify-center bg-[var(--color-secondary-blue)]/15 text-[var(--color-secondary-blue)] mb-2">
                  <Radio className="size-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Proceq GP8000
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="text-muted-foreground text-sm space-y-1" role="list">
                  <li>• Industry-leading GPR scanner</li>
                  <li>• 200cm maximum depth</li>
                  <li>• Real-time 3D visualization</li>
                  <li>• Used for GPR Scanning</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-[var(--color-secondary-blue)]/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="inline-flex size-12 rounded-full items-center justify-center bg-[var(--color-accent-orange)]/15 text-[var(--color-accent-orange)] mb-2">
                  <Drill className="size-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Professional Diamond Core Cutting Systems
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="text-muted-foreground text-sm space-y-1" role="list">
                  <li>• Professional-grade equipment</li>
                  <li>• 12–500mm diameter range</li>
                  <li>• Clean, precise cuts</li>
                  <li>• Used for Core Cutting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Numbers / Stats */}
      <div id="stats" className={sectionClass}>
        <StatsBar />
      </div>

      {/* Service Areas */}
      <section
        className="bg-muted/50 py-16 md:py-20 lg:py-24"
        aria-labelledby="service-areas-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="service-areas-heading"
            className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center"
          >
            Service Areas
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            We provide GPR scanning and core cutting services across the UAE.
          </p>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Cities we serve
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {company.serviceAreas.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 text-muted-foreground"
                  role="listitem"
                >
                  <MapPin
                    className="size-4 shrink-0 text-[var(--color-accent-orange)]"
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
        className="bg-white py-16 md:py-20 lg:py-24"
        aria-labelledby="why-choose-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="why-choose-heading"
            className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center"
          >
            Why Clients Choose Us
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Trusted by leading developers, contractors, and consultants across
            the UAE.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <blockquote className="rounded-xl border-2 border-border bg-muted/30 p-6 md:p-8">
              <Quote className="size-10 text-[var(--color-secondary-blue)]/30 mb-4" aria-hidden />
              <p className="text-foreground font-medium mb-2">
                &ldquo;They showed up on time, scanned before every cut, and
                delivered clear reports. No surprises on site.&rdquo;
              </p>
              <footer className="text-sm text-muted-foreground">
                — Construction project manager, Dubai
              </footer>
            </blockquote>
            <blockquote className="rounded-xl border-2 border-border bg-muted/30 p-6 md:p-8">
              <Quote className="size-10 text-[var(--color-secondary-blue)]/30 mb-4" aria-hidden />
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
