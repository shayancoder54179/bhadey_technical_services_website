/**
 * Shared Open Graph image.
 *
 * Next.js does NOT deep-merge `openGraph` — a page-level `openGraph` object
 * replaces the one in app/layout.tsx wholesale. Any page that defines its own
 * `openGraph` must therefore spread this in explicitly, or it will render with
 * no og:image at all.
 */
export const OG_IMAGES = [
  {
    url: "/images/og-card.png",
    width: 1200,
    height: 630,
    alt: "Bhadeya Technical Services L.L.C - GPR Scanning & Core Cutting across the UAE",
  },
];

/**
 * Open Graph properties that must be repeated on every page.
 *
 * Because `openGraph` is replaced rather than merged (see above), `siteName`
 * and `locale` set in app/layout.tsx are dropped from every page that defines
 * its own `openGraph`. Spread this first in each page's `openGraph` so those
 * survive, then override title/description/url per page.
 */
export const OG_DEFAULTS = {
  siteName: "Bhadeya Technical Services L.L.C",
  locale: "en_AE",
  images: OG_IMAGES,
} as const;

/**
 * Per-page Twitter card.
 *
 * `twitter` is inherited from app/layout.tsx when a page does not set it, so
 * without this every page shared to X renders the same generic site-level card
 * instead of its own title and description.
 */
export function twitterCard(title: string, description: string) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [OG_IMAGES[0].url],
  };
}
