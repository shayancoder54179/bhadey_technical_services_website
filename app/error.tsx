"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Mail, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div
        className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center"
        role="region"
        aria-label="Error"
      >
        <div className="max-w-lg mx-auto">
          <div
            className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] mb-6"
            aria-hidden
          >
            <AlertCircle className="size-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-4">
            Something went wrong
          </h1>
          <p className="text-muted-foreground mb-8">
            We encountered an error. Please try again or contact us if it
            persists.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button
              onClick={reset}
              className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
              aria-label="Try again"
            >
              <RefreshCw className="size-4" aria-hidden />
              Try again
            </Button>
            <Button asChild variant="outline" className="border-[#0A2540]">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540]"
              >
                Contact support
              </Link>
            </Button>
          </div>

          <section
            className="rounded-xl bg-muted/50 p-6 text-left"
            aria-labelledby="support-heading"
          >
            <h2 id="support-heading" className="text-lg font-semibold text-foreground mb-3">
              Contact support
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
