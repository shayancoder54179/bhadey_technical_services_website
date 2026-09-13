"use client";

import { QaAccordion } from "@/components/ui/qa-accordion";
import type { FAQItem } from "@/lib/service-page-types";

interface ServicePageFAQProps {
  title: string;
  items: FAQItem[];
}

export function ServicePageFAQ({ title, items }: ServicePageFAQProps) {
  return (
    <section
      className="section-y border-t border-hairline bg-surface"
      aria-labelledby="service-faq-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <header className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="service-faq-heading" className="display-lg text-graphite">
              {title}
            </h2>
          </header>
          <QaAccordion items={items} idPrefix="service-faq" />
        </div>
      </div>
    </section>
  );
}
