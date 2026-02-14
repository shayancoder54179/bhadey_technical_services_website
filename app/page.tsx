import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";

// Below-the-fold sections: SSR with lazy-loaded client JS for faster initial load
const StatsBar = dynamic(
  () => import("@/components/sections/StatsBar").then((m) => m.StatsBar),
  { ssr: true }
);
const WhyChooseUs = dynamic(
  () => import("@/components/sections/WhyChooseUs").then((m) => m.WhyChooseUs),
  { ssr: true }
);
const ProjectsShowcase = dynamic(
  () =>
    import("@/components/sections/ProjectsShowcase").then(
      (m) => m.ProjectsShowcase
    ),
  { ssr: true }
);
const ServiceAreas = dynamic(
  () =>
    import("@/components/sections/ServiceAreas").then((m) => m.ServiceAreas),
  { ssr: true }
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => m.FAQ),
  { ssr: true }
);
const CTASection = dynamic(
  () =>
    import("@/components/sections/CTASection").then((m) => m.CTASection),
  { ssr: true }
);

export const metadata: Metadata = {
  title:
    "Bhadeya Technical Services LLC | #1 GPR Scanning & Core Cutting Services in Dubai & UAE",
  description:
    "Professional GPR scanning (Proceq GP8000), diamond core cutting, and excavation services in Dubai, Abu Dhabi, Sharjah & UAE. 500+ projects completed including Dubai Mall, Emaar, ADNOC. Get free quote today!",
  alternates: {
    canonical: "https://www.bhadeya.com",
  },
  openGraph: {
    title:
      "Bhadeya Technical Services LLC | #1 GPR Scanning & Core Cutting in UAE",
    description:
      "Professional GPR scanning, core cutting & excavation services across UAE. Trusted by Dubai Mall, Emaar, ADNOC & more.",
    url: "https://www.bhadeya.com",
    type: "website",
  },
};

// Scroll margin for fixed header (h-20) so anchor links aren't hidden
const sectionClass = "scroll-mt-20";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero */}
      <div id="hero" className={sectionClass}>
        <Hero />
      </div>

      {/* 2. Services Overview — white */}
      <div id="services" className={sectionClass}>
        <ServicesOverview />
      </div>

      {/* 3. Stats Bar — navy (own bg) */}
      <div id="stats" className={sectionClass}>
        <StatsBar />
      </div>

      {/* 4. Why Choose Us — light gray */}
      <div id="why-choose-us" className={sectionClass}>
        <WhyChooseUs />
      </div>

      {/* 5. Projects Showcase — white */}
      <div id="projects" className={sectionClass}>
        <ProjectsShowcase />
      </div>

      {/* 6. Service Areas — light gray */}
      <div id="service-areas" className={sectionClass}>
        <ServiceAreas />
      </div>

      {/* 7. FAQ — white */}
      <div id="faq" className={sectionClass}>
        <FAQ />
      </div>

      {/* 8. CTA Section — navy gradient (own bg) */}
      <div id="cta" className={sectionClass}>
        <CTASection />
      </div>
    </div>
  );
}
