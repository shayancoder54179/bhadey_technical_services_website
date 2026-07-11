"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/lib/service-page-types";

function FAQTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <Plus className="text-steel pointer-events-none size-5 shrink-0 translate-y-0.5 group-data-[state=open]:hidden" />
        <Minus className="text-signal-orange pointer-events-none size-5 shrink-0 translate-y-0.5 hidden group-data-[state=open]:block" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

interface ServicePageFAQProps {
  title: string;
  items: FAQItem[];
}

export function ServicePageFAQ({ title, items }: ServicePageFAQProps) {
  return (
    <section
      className="bg-paper py-16 md:py-20 lg:py-24"
      aria-labelledby="service-faq-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p
            className="font-mono text-xs font-semibold uppercase tracking-widest text-signal-orange mb-3"
            aria-hidden
          >
            FAQ
          </p>
          <h2
            id="service-faq-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight"
          >
            {title}
          </h2>
        </header>

        <div className="max-w-3xl mx-auto border-t border-steel/20">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-steel/20">
                <FAQTrigger>{item.question}</FAQTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
