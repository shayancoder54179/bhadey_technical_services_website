"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

function FAQAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <Plus className="text-muted-foreground pointer-events-none size-5 shrink-0 translate-y-0.5 group-data-[state=open]:hidden" />
        <Minus className="text-muted-foreground pointer-events-none size-5 shrink-0 translate-y-0.5 hidden group-data-[state=open]:block" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function FAQ() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-orange)] mb-3"
            aria-hidden
          >
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Frequently Asked Questions About GPR Scanning & Core Cutting
          </h2>
        </header>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <FAQAccordionTrigger>{faq.question}</FAQAccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
