import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home, Wrench, Mail, Phone } from "lucide-react";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Page Not Found | Bhadeya Technical Services LLC",
  description:
    "The page you are looking for could not be found. Return to Bhadeya Technical Services homepage or contact us for GPR scanning and core cutting in UAE.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.bhadeya.com/404" },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center sm:px-8 lg:px-12 xl:px-16"
        role="region"
        aria-label="Page not found"
      >
        <div
          className="absolute inset-0 bg-[#0A2540]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 102, 255, 0.12) 0%, transparent 50%)
            `,
          }}
          aria-hidden
        />
        <div className="relative max-w-lg mx-auto">
          <Link href="/" className="mb-8 inline-block">
            <Image
              src="/images/bts_logo.png"
              alt="Bhadeya Technical Services LLC - GPR scanning and diamond core cutting Dubai UAE"
              width={200}
              height={70}
              className="h-14 w-auto md:h-16 object-contain"
            />
          </Link>
          <p className="text-6xl sm:text-7xl font-bold text-[#0066FF]/30 mb-2">
            404
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for does not exist or has been moved.
          </p>

          <nav
            className="flex flex-wrap justify-center gap-4 mb-10"
            aria-label="Navigation to get back"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0066FF] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#0052cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]"
            >
              <Home className="size-4" aria-hidden />
              Homepage
            </Link>
            <Link
              href="/services/gpr-scanning"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0A2540] px-5 py-2.5 font-semibold text-[#0A2540] transition-colors hover:bg-[#0A2540]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540]"
            >
              <Wrench className="size-4" aria-hidden />
              Our Services
            </Link>
          </nav>

          <section
            className="rounded-xl bg-muted/50 p-6 text-left"
            aria-labelledby="contact-heading"
          >
            <h2 id="contact-heading" className="text-lg font-semibold text-foreground mb-3">
              Need help? Contact us
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${company.phoneClean}`}
                  className="inline-flex items-center gap-2 text-[#0066FF] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] rounded"
                  aria-label={`Call ${company.phone}`}
                >
                  <Phone className="size-4 shrink-0" aria-hidden />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 text-[#0066FF] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] rounded"
                  aria-label={`Email ${company.email}`}
                >
                  <Mail className="size-4 shrink-0" aria-hidden />
                  {company.email}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
