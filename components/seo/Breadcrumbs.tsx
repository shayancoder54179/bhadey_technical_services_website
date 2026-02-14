import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/service-page-types";
import { cn } from "@/lib/utils";

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Semantic breadcrumb trail with JSON-LD schema for SEO.
 * Styled to be subtle but visible.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const baseUrl = "https://www.bhadeyatechnical.com";
  const schemaItems = items.map((item, i) => {
    const url = item.href.startsWith("http") ? item.href : `${baseUrl}${item.href}`;
    return {
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.label,
      ...(i < items.length - 1 && { item: url }),
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        className={cn("border-b border-border bg-muted/30 py-3", className)}
        aria-label="Breadcrumb"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className="size-4 shrink-0 text-muted-foreground/70"
                    aria-hidden
                  />
                )}
                {i === items.length - 1 ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-foreground hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
