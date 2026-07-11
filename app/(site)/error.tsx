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
        className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center sm:px-8 lg:px-12 xl:px-16"
        role="region"
        aria-label="Error"
      >
        <div className="max-w-lg mx-auto">
          <div
            className="mx-auto flex size-16 items-center justify-center bg-signal-orange/10 text-signal-orange mb-6"
            aria-hidden
          >
            <AlertCircle className="size-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-ink mb-4 tracking-tight">
            Something went wrong
          </h1>
          <p className="text-muted-foreground mb-8">
            We encountered an error. Please try again or contact us if it
            persists.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-none bg-signal-orange hover:bg-signal-orange/90 text-ink focus-visible:ring-2 focus-visible:ring-signal-orange focus-visible:ring-offset-2"
              aria-label="Try again"
            >
              <RefreshCw className="size-4" aria-hidden />
              Try again
            </Button>
            <Button asChild variant="outline" className="rounded-none border-ink">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Contact support
              </Link>
            </Button>
          </div>

          <section
            className="border border-steel/20 bg-paper p-6 text-left"
            aria-labelledby="support-heading"
          >
            <h2 id="support-heading" className="text-lg font-semibold text-foreground mb-3 tracking-tight">
              Contact support
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${company.phoneClean}`}
                  className="inline-flex items-center gap-2 font-mono text-foreground hover:text-signal-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-orange"
                  aria-label={`Call ${company.phone}`}
                >
                  <Phone className="size-4 shrink-0" aria-hidden />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 text-foreground hover:text-signal-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-orange"
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
