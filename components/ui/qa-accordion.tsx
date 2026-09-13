"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

/** One question/answer pair. */
export type QaItem = { question: string; answer: string };

/**
 * The single accordion treatment used for every Q&A block on the site — the
 * homepage FAQ, service page FAQs and the "People Also Ask" sections. Having
 * one component keeps them from drifting into three different looks.
 */
export function QaTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-start justify-between gap-5 rounded-lg px-4 py-5 text-left",
          "text-base font-semibold text-graphite outline-none transition-colors",
          "hover:bg-mist focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "data-[state=open]:text-safety disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors",
            "border-hairline bg-surface text-slate-soft",
            "group-hover:border-safety group-hover:text-safety",
            "group-data-[state=open]:border-safety group-data-[state=open]:bg-safety group-data-[state=open]:text-white"
          )}
          aria-hidden
        >
          <Plus className="size-4 group-data-[state=open]:hidden" />
          <Minus className="hidden size-4 group-data-[state=open]:block" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function QaAccordion({
  items,
  idPrefix = "qa",
  className,
}: {
  items: QaItem[];
  idPrefix?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "divide-y divide-hairline border-y border-hairline",
        className
      )}
    >
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`${idPrefix}-${index}`}
            className="border-none"
          >
            <QaTrigger>{item.question}</QaTrigger>
            <AccordionContent className="px-4 pb-5 pr-12 text-[0.9375rem] leading-relaxed text-slate-deep">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
