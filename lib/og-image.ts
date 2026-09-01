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
    url: "/images/bts_logo.png",
    width: 1200,
    height: 630,
    alt: "Bhadeya Technical Services LLC - GPR Scanning & Core Cutting UAE",
  },
];
