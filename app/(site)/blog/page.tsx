import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { posts } from "@/data/posts";

import { OG_IMAGES } from "@/lib/og-image";
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
    images: OG_IMAGES,
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

      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 bg-graphite" aria-hidden />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(120% 90% at 12% 20%, rgba(234,88,12,0.16) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:px-12 xl:px-16">
          <div>
            <p className="eyebrow eyebrow-dark">Field notes</p>
            <h1 className="display-xl mt-5 text-white">
              Guides from the site, not the brochure.
            </h1>
            <p className="mt-5 max-w-[54ch] text-[1.0625rem] leading-relaxed text-white/75">
              What we have learned scanning concrete and ground across the UAE
              since 2019 &mdash; written for the people who have to make the
              call before something gets cut.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-hairline shadow-deep">
            <div className="bg-white px-5 py-4">
              <dt className="spec-label text-slate-soft">Guides</dt>
              <dd className="mt-1.5 font-mono text-2xl font-bold text-graphite">
                {sorted.length}
              </dd>
            </div>
            <div className="bg-white px-5 py-4">
              <dt className="spec-label text-slate-soft">Written by</dt>
              <dd className="mt-1.5 text-[0.9375rem] font-semibold leading-snug text-graphite">
                Our scanning crew
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {sorted.map((post) => (
              <li key={post.slug} className="flex">
                <article className="group relative flex flex-1 flex-col rounded-xl border border-hairline bg-surface p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:border-safety/40 hover:shadow-lift">
                  <span className="spec-label text-safety">
                    {post.category}
                  </span>
                  <h2 className="display-sm mt-3 text-graphite">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0"
                    >
                      {post.heading}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slate-deep">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs text-slate-soft">
                    <time dateTime={post.datePublished} className="font-mono">
                      {dateFormat.format(new Date(post.datePublished))}
                    </time>
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Clock className="size-3.5" aria-hidden="true" />
                      {post.readingMinutes} min
                    </span>
                  </div>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-graphite transition-colors group-hover:text-safety"
                    aria-hidden
                  >
                    Read guide
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-graphite">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 25% 0%, rgba(234,88,12,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8">
          <h2 className="display-lg text-white">
            Need scanning on a live job?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            Tell us the site and what you need done. We will give you a clear
            quote and a realistic date.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-13 items-center gap-2 rounded-md bg-safety px-8 text-base font-semibold text-white shadow-lift transition-all hover:bg-safety/90"
          >
            Get a free quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
