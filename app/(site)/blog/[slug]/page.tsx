import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ServicePageFAQ } from "@/components/services/ServicePageFAQ";
import { posts, postBySlug, type PostBlock } from "@/data/posts";

import { OG_IMAGES } from "@/lib/og-image";
const BASE_URL = "https://www.bhadeya.com";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: post.image
        ? [{ url: post.image, alt: post.heading }]
        : OG_IMAGES,
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-balance first:mt-0">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 mb-3 text-lg font-semibold tracking-tight">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="my-5 flex list-disc flex-col gap-2 pl-5 text-slate-deep">
          {block.items.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="my-7 border-l-4 border-safety bg-muted/50 py-4 pr-4 pl-5 leading-relaxed font-medium">
          {block.text}
        </p>
      );
    default:
      return (
        <p className="my-5 leading-relaxed text-slate-deep">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.heading,
    description: post.description,
    image: [`${BASE_URL}${post.image ?? OG_IMAGES[0].url}`],
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { "@id": `${BASE_URL}/#organization` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntityOfPage: url,
    articleSection: post.category,
    inLanguage: "en-AE",
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/blog" },
          { label: post.heading, href: `/blog/${post.slug}` },
        ]}
      />

      <header className="relative overflow-hidden bg-graphite py-14 md:py-20">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(120% 90% at 15% 20%, rgba(234,88,12,0.16) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
          <p className="eyebrow eyebrow-dark">{post.category}</p>
          <h1 className="display-lg mt-5 text-white">{post.heading}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-white/65">
            <time dateTime={post.datePublished}>
              {dateFormat.format(new Date(post.datePublished))}
            </time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {post.readingMinutes} min read
            </span>
          </div>
        </div>
      </header>

      <article className="bg-surface pb-16 pt-12 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-[68ch] px-6 sm:px-8">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {post.faqs?.length ? (
        <ServicePageFAQ title="Common questions" items={post.faqs} />
      ) : null}

      {post.related?.length ? (
        <section className="section-y border-t border-hairline bg-mist">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <h2 className="spec-label text-safety">Related reading</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {post.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group flex h-full items-start justify-between gap-3 rounded-xl border border-hairline bg-surface p-5 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:border-safety/40 hover:shadow-lift"
                  >
                    <span className="font-semibold leading-snug text-graphite group-hover:text-safety">
                      {r.label}
                    </span>
                    <ArrowRight
                      className="mt-0.5 size-4 shrink-0 text-slate-soft transition-transform group-hover:translate-x-1 group-hover:text-safety"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section-y relative overflow-hidden bg-graphite">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 25% 0%, rgba(234,88,12,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="display-lg text-white">
            Need this done on a live site?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            We scan and cut across Dubai, Abu Dhabi and Sharjah, usually with
            same-day or next-day attendance.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-13 items-center gap-2 rounded-md bg-safety px-8 text-base font-semibold text-white shadow-lift transition-all hover:bg-safety/90"
          >
            Get a free quote
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
