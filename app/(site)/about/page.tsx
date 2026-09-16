import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Target, Eye, Heart, Radio, Drill, MapPin, Quote } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { company } from "@/data/company";

import { OG_DEFAULTS, OG_IMAGES, twitterCard } from "@/lib/og-image";
const StatsBar = dynamic(
  () => import("@/components/sections/StatsBar").then((m) => m.StatsBar),
  { ssr: true }
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((m) => m.CTASection),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "About Us: GPR Scanning Team Since 2019",
  description:
    "Bhadeya Technical Services has run GPR scanning and core cutting across the UAE since 2019. DED Dubai trade licence 844806, with Proceq radar owned in house.",
  alternates: { canonical: "https://www.bhadeya.com/about" },
  openGraph: {
    ...OG_DEFAULTS,
    title: `About ${company.name}: GPR Scanning Since 2019`,
    description:
      "GPR scanning and core cutting across the UAE since 2019. DED Dubai trade licence 844806, Proceq GP8000 and GS8000 radar owned in house.",
    url: "https://www.bhadeya.com/about",
    type: "website",
    images: OG_IMAGES,
  },
  twitter: twitterCard(
    `About ${company.name}: GPR Scanning Since 2019`,
    "GPR scanning and core cutting across the UAE since 2019. DED Dubai trade licence 844806, Proceq GP8000 and GS8000 radar owned in house."
  ),
};

const sectionClass = "scroll-mt-20";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />

      {/* Page Hero */}
      <section
        className={`relative section-y overflow-hidden ${sectionClass}`}
        aria-labelledby="about-hero-title"
      >
        <div className="absolute inset-0 bg-graphite" />
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold leading-tight text-white mb-4 tracking-tight"
            >
              About Bhadeya Technical Services &mdash; GPR Scanning Across the
              UAE Since 2019
            </h1>
            <p className="text-lg text-white/75">
              A Dubai company licensed by the {company.license.issuerShort}{" "}
              (trade licence {company.license.number}), running GPR concrete
              scanning, GPR ground scanning and core cutting across{" "}
              {company.serviceAreas.length} UAE cities.
            </p>
          </header>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="section-y border-t border-hairline bg-surface"
        aria-labelledby="our-story-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2
                id="our-story-heading"
                className="display-lg mb-6 text-graphite"
              >
                Our Story: GPR Scanning in the UAE Since 2019
              </h2>
              <div className="space-y-4 text-slate-deep leading-relaxed">
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

              {/* Company facts a buyer checks before appointing a subcontractor
                  — licence, age, coverage and whether the radar is owned. */}
              <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
                <div className="bg-surface px-5 py-4">
                  <dt className="font-mono text-xs uppercase tracking-widest text-slate-soft">
                    Trade licence
                  </dt>
                  <dd className="mt-1.5 font-semibold text-graphite">
                    {company.license.number} &middot;{" "}
                    {company.license.issuerShort}
                  </dd>
                </div>
                <div className="bg-surface px-5 py-4">
                  <dt className="font-mono text-xs uppercase tracking-widest text-slate-soft">
                    Operating since
                  </dt>
                  <dd className="mt-1.5 font-semibold text-graphite">
                    {company.foundingYear}
                  </dd>
                </div>
                <div className="bg-surface px-5 py-4">
                  <dt className="font-mono text-xs uppercase tracking-widest text-slate-soft">
                    Cities served
                  </dt>
                  <dd className="mt-1.5 font-semibold text-graphite">
                    {company.serviceAreas.join(", ")}
                  </dd>
                </div>
                <div className="bg-surface px-5 py-4">
                  <dt className="font-mono text-xs uppercase tracking-widest text-slate-soft">
                    Radar owned in house
                  </dt>
                  <dd className="mt-1.5 font-semibold text-graphite">
                    Proceq GP8000 &amp; GS8000
                  </dd>
                </div>
              </dl>
            </div>
            <div className="aspect-[4/3] border border-hairline overflow-hidden">
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
        className="section-y border-t border-hairline bg-mist"
        aria-labelledby="mission-values-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="mission-values-heading"
            className="display-lg mb-10 text-center text-graphite"
          >
            What We Stand For as a UAE GPR Contractor
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-hairline bg-surface p-6 shadow-panel">
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety">
                <Target className="size-6" aria-hidden />
              </div>
              <h3 className="display-sm mb-2 text-graphite">Mission</h3>
              <p className="text-slate-deep leading-relaxed">
                To provide the most accurate and reliable GPR scanning and
                technical services in the UAE, ensuring safety and precision in
                every project.
              </p>
            </div>
            <div className="rounded-xl border border-hairline bg-surface p-6 shadow-panel">
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety">
                <Eye className="size-6" aria-hidden />
              </div>
              <h3 className="display-sm mb-2 text-graphite">Vision</h3>
              <p className="text-slate-deep leading-relaxed">
                To be the UAE&apos;s first choice for non-destructive testing
                and construction technical services.
              </p>
            </div>
            <div className="rounded-xl border border-hairline bg-surface p-6 shadow-panel">
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety">
                <Heart className="size-6" aria-hidden />
              </div>
              <h3 className="display-sm mb-2 text-graphite">Values</h3>
              <p className="text-slate-deep leading-relaxed">
                Safety, Precision, Reliability, Innovation, Integrity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Equipment */}
      <section
        className="section-y border-t border-hairline bg-surface"
        aria-labelledby="equipment-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="equipment-heading"
            className="display-lg mb-10 text-center text-graphite"
          >
            Our GPR Scanning and Core Cutting Equipment
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="rounded-xl border border-hairline bg-mist p-6 shadow-panel">
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety">
                <Radio className="size-6" aria-hidden />
              </div>
              <h3 className="display-sm mb-3 text-graphite">
                Proceq GP8000
              </h3>
              <ul className="text-slate-deep text-sm space-y-1" role="list">
                <li>• Concrete scanning radar</li>
                <li>• Up to 1.5 m depth in concrete</li>
                <li>• Real-time 3D visualization</li>
                <li>• Used before cutting &amp; drilling</li>
              </ul>
            </div>
            <div className="rounded-xl border border-hairline bg-mist p-6 shadow-panel">
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety">
                <Radio className="size-6" aria-hidden />
              </div>
              <h3 className="display-sm mb-3 text-graphite">
                Proceq GS8000
              </h3>
              <ul className="text-slate-deep text-sm space-y-1" role="list">
                <li>• Ground scanning radar</li>
                <li>• Up to 10m in soil, depending on ground</li>
                <li>• Buried utility mapping</li>
                <li>• Used before excavation</li>
              </ul>
            </div>
            <div className="rounded-xl border border-hairline bg-mist p-6 shadow-panel">
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-safety/10 text-safety">
                <Drill className="size-6" aria-hidden />
              </div>
              <h3 className="display-sm mb-3 text-graphite">
                Professional Diamond Core Cutting Systems
              </h3>
              <ul className="text-slate-deep text-sm space-y-1" role="list">
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
        className="section-y border-t border-hairline bg-mist"
        aria-labelledby="service-areas-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="service-areas-heading"
            className="display-lg mb-6 text-center text-graphite"
          >
            Where We Provide GPR Scanning in the UAE
          </h2>
          <p className="text-center text-slate-deep max-w-2xl mx-auto mb-10">
            We provide GPR scanning and core cutting services across the UAE.
          </p>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-soft mb-4 text-center">
              Cities we serve
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {company.serviceAreas.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 border border-hairline bg-surface px-4 py-3 text-slate-deep"
                  role="listitem"
                >
                  <MapPin
                    className="size-4 shrink-0 text-safety"
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
        className="section-y border-t border-hairline bg-surface"
        aria-labelledby="why-choose-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="why-choose-heading"
            className="display-lg mb-4 text-center text-graphite"
          >
            Why Clients Choose Our GPR Scanning Team
          </h2>
          <p className="text-center text-slate-deep max-w-2xl mx-auto mb-12">
            Trusted by leading developers, contractors, and consultants across
            the UAE.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            <blockquote className="rounded-xl border border-hairline bg-mist p-6 shadow-panel md:p-8">
              <Quote className="size-10 text-safety/40 mb-4" aria-hidden />
              <p className="text-graphite font-medium mb-2">
                &ldquo;They showed up on time, scanned before every cut, and
                delivered clear reports. No surprises on site.&rdquo;
              </p>
              <footer className="text-sm text-slate-deep">
                — Construction project manager, Dubai
              </footer>
            </blockquote>
            <blockquote className="rounded-xl border border-hairline bg-mist p-6 shadow-panel md:p-8">
              <Quote className="size-10 text-safety/40 mb-4" aria-hidden />
              <p className="text-graphite font-medium mb-2">
                &ldquo;Best GPR and core cutting team we&apos;ve worked with in
                the UAE. Equipment is top-notch, results are accurate.&rdquo;
              </p>
              <footer className="text-sm text-slate-deep">
                — MEP contractor, Abu Dhabi
              </footer>
            </blockquote>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-deep text-sm">
            <span className="font-semibold text-graphite">Trusted by:</span>
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
        className="section-y"
        aria-labelledby="how-we-work-heading"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2
            id="how-we-work-heading"
            className="display-lg mb-4 text-graphite"
          >
            How We Run a GPR Scanning Job
          </h2>
          <p className="mb-12 max-w-2xl text-slate-deep">
            Four things decide whether subsurface work is done properly. They
            are not complicated, but they are easy to skip under programme
            pressure, and skipping them is what causes incidents.
          </p>

          <div className="grid gap-10 md:grid-cols-2 md:gap-x-14">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                We scan every core before it is cut
              </h3>
              <p className="mt-2 leading-relaxed text-slate-deep">
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
              <p className="mt-2 leading-relaxed text-slate-deep">
                Concrete and ground are different problems and need different
                instruments. We operate the Proceq GP8000 for concrete, reading
                up to 1.5 m, and the Proceq GS8000 for ground, reading 5–10 m
                depending on soil. Running both means neither machine gets
                stretched across a job it was not built for.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Honest depth, not best-case depth
              </h3>
              <p className="mt-2 leading-relaxed text-slate-deep">
                Depth in ground is decided by the soil, not by marketing. Dry
                sand can let the GS8000 read to the full 10 m; saline sabkha can pull it
                below 5 m. We quote 5–10 m as the realistic working range and
                tell you on site what your ground actually allows. If your
                excavation goes deeper than we can read, you will know before
                you dig.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                GPR findings you can act on
              </h3>
              <p className="mt-2 leading-relaxed text-slate-deep">
                Results are marked directly on the surface where the crew will
                see them, and issued as a PDF report with annotated layouts for
                the consultant or the permit file. If we find something where
                you need the hole, you hear it before the cut — including when
                that is the inconvenient answer.
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-hairline pt-10">
            <h3 className="text-lg font-semibold tracking-tight">
              Where we work across the UAE
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate-deep">
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
