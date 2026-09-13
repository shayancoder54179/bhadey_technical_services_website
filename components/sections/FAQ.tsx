"use client";

import * as React from "react";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { QaTrigger } from "@/components/ui/qa-accordion";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

// The homepage shows a readable shortlist; the rest stay in the DOM behind a
// toggle so they remain crawlable and consistent with the FAQPage schema.
const VISIBLE_COUNT = 6;

export function FAQ() {
  const [showAll, setShowAll] = React.useState(false);
  const hiddenCount = faqs.length - VISIBLE_COUNT;

  return (
    <section className="section-y bg-surface" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <header className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="faq-heading" className="display-lg text-graphite">
              Questions we get on every site.
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-slate-deep">
              Still unsure whether your job needs a scan? Call us — we will tell
              you straight, even when the answer is no.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 border-b-2 border-safety pb-0.5 text-sm font-semibold text-graphite transition-colors hover:text-safety"
            >
              Ask us directly
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </header>

          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full divide-y divide-hairline border-y border-hairline"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className={cn(
                    "border-none",
                    // kept in the DOM for crawlers, hidden from the reader until expanded
                    !showAll && index >= VISIBLE_COUNT && "hidden"
                  )}
                >
                  <QaTrigger>{faq.question}</QaTrigger>
                  <AccordionContent className="px-4 pb-5 pr-12 text-[0.9375rem] leading-relaxed text-slate-deep">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {hiddenCount > 0 && (
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-hairline bg-mist px-5 py-3 text-sm font-semibold text-graphite shadow-panel transition-all hover:border-safety hover:text-safety hover:shadow-lift"
              >
                {showAll
                  ? "Show fewer questions"
                  : `Show all ${faqs.length} questions`}
                <Plus
                  className={cn(
                    "size-4 transition-transform",
                    showAll && "rotate-45"
                  )}
                  aria-hidden
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
