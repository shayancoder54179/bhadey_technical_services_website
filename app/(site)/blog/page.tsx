import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "GPR & Concrete Scanning Guides",
  description:
    "Practical guides on GPR concrete scanning, core cutting and pre-excavation utility surveys in the UAE, written by the team that does the work.",
  alternates: { canonical: "https://www.bhadeya.com/blog" },
  openGraph: {
    title: "GPR & Concrete Scanning Guides | Bhadeya Technical",
    description:
      "Practical guides on GPR scanning, core cutting and utility surveys in the UAE.",
    url: "https://www.bhadeya.com/blog",
    type: "website",
  },
};

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/blog" },
        ]}
      />

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-ink" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,130,15,0.10) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
              Guides from the site, not the brochure
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              What we have learned scanning concrete and ground across the UAE
              since 2019 — written for the people who have to make the call
              before something gets cut.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <li key={post.slug} className="flex">
                <article className="flex flex-1 flex-col rounded-lg border bg-card p-6 transition-colors hover:border-signal-orange/50">
                  <span className="text-xs font-semibold tracking-wide uppercase text-signal-orange">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold tracking-tight text-balance">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0 hover:underline"
                    >
                      {post.heading}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <time dateTime={post.datePublished}>
                      {dateFormat.format(new Date(post.datePublished))}
                    </time>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5" aria-hidden="true" />
                      {post.readingMinutes} min read
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t bg-muted/40 py-14">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">
            Need scanning on a live job?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Tell us the site and what you need done. We will give you a clear
            quote and a realistic date.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-signal-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-orange/90"
          >
            Get a free quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
