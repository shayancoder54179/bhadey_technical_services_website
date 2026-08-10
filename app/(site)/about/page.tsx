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
  title: { absolute: "About Bhadeya Technical Services LLC | UAE" },
  description:
    "Bhadeya Technical Services LLC has provided GPR scanning, core cutting and excavation across the UAE since 2019. Proceq GP8000 and GS8000 operators.",
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
                  available—the Proceq GP8000 for concrete, the Proceq GS8000 for
                  ground scanning, and professional core cutting systems—because
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
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="border border-steel/20 bg-concrete/40 p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Radio className="size-6" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                Proceq GP8000
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1" role="list">
                <li>• Concrete scanning radar</li>
                <li>• Up to 1m depth in concrete</li>
                <li>• Real-time 3D visualization</li>
                <li>• Used before cutting &amp; drilling</li>
              </ul>
            </div>
            <div className="border border-steel/20 bg-concrete/40 p-6">
              <div className="mb-3 flex size-12 items-center justify-center bg-signal-orange/10 text-signal-orange">
                <Radio className="size-6" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                Proceq GS8000
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1" role="list">
                <li>• Ground scanning radar</li>
                <li>• 3–5m in soil, depending on ground</li>
                <li>• Buried utility mapping</li>
                <li>• Used before excavation</li>
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

      {/* How we work — the operating principles behind the service, written
          out because they are what actually differentiate the work. */}
      <section
        className="py-16 md:py-20 lg:py-24"
        aria-labelledby="how-we-work-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="how-we-work-heading"
            className="mb-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            How we work
          </h2>
          <p className="mb-12 max-w-2xl text-muted-foreground">
            Four things decide whether subsurface work is done properly. They
            are not complicated, but they are easy to skip under programme
            pressure, and skipping them is what causes incidents.
          </p>

          <div className="grid gap-10 md:grid-cols-2 md:gap-x-14">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                We never cut blind
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Every core we cut is scanned first. Not a sample of them, not
                the ones that look risky — every one. Because we run both the
                scanning and the cutting, there is no gap in responsibility
                between the survey and the cut, and nobody is waiting on a third
                party in between.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                The right radar for the job
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Concrete and ground are different problems and need different
                instruments. We operate the Proceq GP8000 for concrete, reading
                up to 1 m, and the Proceq GS8000 for ground, reading 3–5 m
                depending on soil. Running both means neither machine gets
                stretched across a job it was not built for.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Honest depth, not best-case depth
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Depth in ground is decided by the soil, not by marketing. Dry
                sand can let the GS8000 read past 5 m; saline sabkha can pull it
                below 3 m. We quote 3–5 m as the realistic working range and
                tell you on site what your ground actually allows. If your
                excavation goes deeper than we can read, you will know before
                you dig.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Findings you can act on
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Results are marked directly on the surface where the crew will
                see them, and issued as a PDF report with annotated layouts for
                the consultant or the permit file. If we find something where
                you need the hole, you hear it before the cut — including when
                that is the inconvenient answer.
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-steel/20 pt-10">
            <h3 className="text-lg font-semibold tracking-tight">
              Where we work
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
              We cover all six emirates, and the work looks different in each.
              Dubai is largely tower fit-outs on post-tensioned slabs, often out
              of hours in occupied buildings. Abu Dhabi runs on permit-to-work
              culture, with government and oil and gas projects that expect the
              survey to stand up in a safety file. Sharjah is mostly older
              industrial stock where the drawings are long gone and the scan
              becomes the as-built. Since 2019 we have delivered work on
              projects including The Dubai Mall, ADNOC Headquarters, Kempinski
              Hotel and Sheikh Khalifa Hospital.
            </p>
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
