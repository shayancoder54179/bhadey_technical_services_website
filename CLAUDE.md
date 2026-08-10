# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build (next build --turbopack)
npm run start      # Start production server
npm run lint       # ESLint check
```

## Stack

- **Next.js 15 App Router** with React 19, TypeScript 5
- **Tailwind CSS v4** (PostCSS integration, no tailwind.config.js — configured via CSS)
- **shadcn/ui** (New York style, components in `components/ui/`)
- **Framer Motion** for animations, **Embla Carousel** for carousels
- **Google Analytics 4** (G-6FWYL6PN3Q) via gtag.js in root layout
- **Vercel Analytics + Speed Insights**

## Architecture

### Content Data Layer (`data/`)
All static content lives in centralized data files — avoid hardcoding content in components:
- `data/company.ts` — contact info, hours, service areas, stats
- `data/services.ts` — 4 services (GPR scanning, core cutting, excavation, oversized cargo)
- `data/projects.ts` — project portfolio entries
- `data/faqs.ts` — FAQ entries

### Service Pages
Service detail pages use a shared template pattern:
- `components/services/ServicePageTemplate.tsx` — reusable layout for all service pages
- `lib/service-page-types.ts` — TypeScript types (`ServicePageData`)
- Each `/app/services/[slug]/page.tsx` passes data to the template

### Homepage Sections
Sections below the fold are **dynamically imported with `next/dynamic`** (no SSR) to reduce initial bundle. Sections live in `components/sections/`.

### Analytics & Tracking
- GA4 event tracking via `lib/tracking.ts` and `lib/googleAds.ts`
- `components/seo/TrackedCtaLinks.tsx` — CTA links with built-in GA4 event firing
- WhatsApp button tracks click source label (`floating_button`, `header`, `footer`, `contact_form`)

### SEO
- `components/seo/JsonLd.tsx` — JSON-LD schema markup
- `components/seo/Breadcrumbs.tsx` — breadcrumb nav with schema
- `components/seo/OptimizedImage.tsx` — lazy-loaded images with proper alt text
- `app/sitemap.ts` and `app/robots.ts` are the single source of truth for both files — they pull location pages from `data/locations.ts` and articles from `data/posts.ts`, so new entries appear automatically. Do not add generated copies under `public/`; static files there shadow these routes in local dev.
- Location pages live at `/services/[service]/[city]`, built from `data/locations.ts` via `lib/location-route.tsx`. Content is hand-written per service/city pair — near-identical location pages read as doorway pages and get filtered from the index.

### Layout Components
Global UI: `Header.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`, `CallButton.tsx`, `BackToTop.tsx`, `PageTransition.tsx` — all in `components/layout/`.

## Styling Notes
- Tailwind v4: use CSS custom properties and the `@theme` directive, not `tailwind.config.js`
- Brand colors: Navy `#0a2540`, Blue `#0066ff`, Orange `#ff6b00`
- `cn()` utility from `lib/utils.ts` (clsx + tailwind-merge)
- shadcn components added via `npx shadcn@latest add <component>`

## Path Aliases
`@/*` maps to the project root (e.g., `@/components/ui/button`, `@/data/company`).
