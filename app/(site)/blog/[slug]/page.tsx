import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
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
        <ul className="my-5 flex list-disc flex-col gap-2 pl-5 text-muted-foreground">
          {block.items.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="my-7 border-l-4 border-signal-orange bg-muted/50 py-4 pr-4 pl-5 leading-relaxed font-medium">
          {block.text}
        </p>
      );
    default:
      return (
        <p className="my-5 leading-relaxed text-muted-foreground">
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

      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <header className="border-b pb-8">
            <span className="text-xs font-semibold tracking-wide uppercase text-signal-orange">
              {post.category}
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
              {post.heading}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <time dateTime={post.datePublished}>
                {dateFormat.format(new Date(post.datePublished))}
              </time>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" aria-hidden="true" />
                {post.readingMinutes} min read
              </span>
            </div>
          </header>

          <div className="pt-8">
            {post.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </div>
      </article>

      {post.faqs?.length ? (
        <ServicePageFAQ title="Common questions" items={post.faqs} />
      ) : null}

      {post.related?.length ? (
        <section className="border-t py-12">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Related
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {post.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-signal-orange underline-offset-4 hover:underline"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-t bg-muted/40 py-14">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">
            Need this done on a live site?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We scan and cut across Dubai, Abu Dhabi and Sharjah, usually with
            same-day or next-day attendance.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-md bg-signal-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-orange/90"
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </div>
  );
}
