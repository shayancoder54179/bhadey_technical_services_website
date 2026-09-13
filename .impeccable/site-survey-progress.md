# "Site Survey" redesign — rollout progress

Second redesign, replacing "The Depth Gauge" (see `redesign-progress.md` for the
previous system — that file is now historical). Read this before touching any page.

## The system

- **Palette:** graphite `#0B1220` / graphite-raised `#0F172A` / graphite-soft `#1E293B`,
  safety orange `#EA580C` (+ `safety-bright #FB923C` for accents ON dark),
  mist `#E9EEF5` (alternating light band), mist-tint `#DBE3EC`, surface `#FFFFFF`,
  slate-deep `#334155` (body), slate-soft `#64748B` (muted), hairline `#E2E8F0`.
- **Type:** Barlow Condensed (display) / Barlow (body) / JetBrains Mono (specs).
  Utilities: `.display-xl`, `.display-lg`, `.display-sm`, `.eyebrow`, `.eyebrow-dark`,
  `.spec-label`, `.section-y` — all in `app/globals.css`.
- **Shape:** 4–10px radius, `shadow-panel` / `shadow-lift` / `shadow-deep`.
  This is a deliberate break from the old flat 0px, no-shadow system.
- Old token names (`ink`, `signal-orange`, `paper`, `concrete`, `steel`) are **aliased**
  to the new values in `globals.css`, so un-migrated pages already pick up the new
  palette. Migration is about layout, rhythm and the rules below — not colour swaps.

## Hard rules learned from user feedback (do not violate)

1. **Never put a dark card/panel on a dark background.** A `graphite-raised` panel on
   a `graphite` band is invisible. On dark bands use **white plates** (see Hero spec
   strip, StatsBar, CTASection contact panel). The user rejected this twice.
2. **Adjacent sections must not share a background.** Alternate
   surface (white) → graphite (dark) → mist (tinted) → surface … Two adjacent
   `bg-mist` sections make their padding stack into a dead gap. `mist` is `#E9EEF5`,
   deliberately tinted enough to read against white — do not weaken it back to `#F8FAFC`.
3. **Eyebrows must carry information the heading does not.** No "Our Services" above
   "Everything that keeps a UAE site safe…". Use facts: `6 services · one crew`,
   `Dubai Mall · Emaar · ADNOC`, `7+ years in the UAE`. Delete the eyebrow rather
   than write a filler one. Never invent numbers.
4. **No type below 12px.** `.spec-label` (0.75rem) is the floor. On dark surfaces use
   `safety-bright`, not `safety` — base orange is only ~4.5:1 on graphite.
5. **Don't centre every section.** Asymmetric headers (heading left / context right).
6. Scroll-reveal observers use `rootMargin: "300px 0px 300px 0px"`, `threshold: 0`.
   Negative rootMargin previously left grids stuck at `opacity: 0`.
7. **One Q&A accordion per page.** Service pages used to render "People Also Ask"
   AND "Frequently Asked Questions" as two identical-looking accordions with ~60%
   duplicate questions. `ServicePageTemplate` now merges the unique PAA items into
   the single FAQ list. Every Q&A block uses `components/ui/qa-accordion.tsx`.
8. **No BackToTop button** — removed at the user's request.
9. The per-service **city SEO paragraph block** (`seoParagraphs`) was removed from
   the service template: it duplicated the dedicated `/services/<service>/<city>`
   location pages, which are the canonical home for city content. The data is still
   in the page files if it needs restoring.

### Layout gotchas fixed (don't reintroduce)
- The services dropdown uses `top-full`, which only anchors to the header bottom if
  `h-full` chains all the way down: header inner div -> `nav` -> the relative wrapper.
  Without `h-full` on the `nav` the panel overlaps the logo.
- `Logo` at `size="lg"` with a `whitespace-nowrap` subline is wider than the wordmark
  and will overflow a grid column. Footer uses `size="md"` and the brand column has
  `min-w-0`.

### Dev-server gotcha
Running `npm run build` clobbers the dev server's CSS cache, so `bg-mist` etc. can
still resolve to old values in the browser. Touch `app/globals.css` to force a
recompile before trusting a screenshot.

## Verified equipment specs (checked against Screening Eagle, do not revert)

- **Proceq GP8000:** up to **1.5 m / 150 cm** in standard concrete (GP app 5.3+, June 2024).
  Depth accuracy ±5 mm.
- **Proceq GS8000:** **10 m maximum**. The manufacturer quotes ~3.7 m typical, but that
  is for *average* soil; UAE ground is predominantly dry sand, which favours penetration.
  The site's existing prose already argues this carefully, so the agreed line is
  **"up to 10 m, typically 5-10 m in UAE ground, less in wet/clay/reclaimed"**.
  Do not "correct" this down to 3-5 m — that contradicts the location pages.
- This replaces the old "1 m concrete / 5–10 m ground" claims. Commit `210c2bc` had
  deliberately set 5–10 m; that is superseded.

## Assets

- `public/images/bts-eagle.png` — eagle mark extracted from `bts_logo.png`
  (transparent, halo pixels cleared). Wordmark is now **real text** in
  `components/layout/Logo.tsx` (`tone="dark"|"light"`, `size="sm"|"md"|"lg"`).
- `components/icons/WhatsAppIcon.tsx` — the real WhatsApp glyph. Use this, never
  lucide's `MessageCircle`.
- Stock photos (Pexels, free for commercial use): `svc-ground-scanning.webp`,
  `svc-oversized-cargo.webp`, `svc-interlock-paving.webp`.
  **The ground-scanning one is a generic earthworks site, not a GS8000 —
  swap it as soon as the client supplies a real field photo.**

## Status — COMPLETE

Every page has been migrated. Nothing is committed to git; the whole redesign is in
the working tree.


### Done
- [x] `app/globals.css` — full token layer, section primitives
- [x] `app/layout.tsx` — Barlow / Barlow Condensed / JetBrains Mono
- [x] `components/layout/Logo.tsx` — new
- [x] `components/layout/Header.tsx` — **white** header (the logo's black eagle needs
      a light background; it previously sat on a bolted-on white plate)
- [x] `components/layout/Footer.tsx` — rebuilt: 4-col, grouped service-area chips
      instead of a wall of 16 sentence links, hours table
- [x] `components/layout/WhatsAppButton.tsx` — round FAB, real glyph
- [x] Homepage sections: Hero, ServicesOverview, StatsBar, WhyChooseUs,
      ProjectsShowcase, ServiceAreas, FAQ (6 shown + expander, was 19), CTASection
- [x] `data/services.ts`, `data/faqs.ts` — depth specs corrected

### Remaining
- [x] `components/services/ServicePageTemplate.tsx` + `ServicePageFAQ.tsx` — done;
      hero stat chips are now white plates, CTA has a light contact panel, FAQ is
      the two-column sticky layout
- [x] Per-service custom children — only `core-cutting` had any (`CoreCuttingExtras`)
- [x] `components/services/LocationServicePage.tsx`
- [x] `app/(site)/about`, `projects`
- [x] `contact` — rebuilt (the `bg-steel/20` + `gap-px` container was showing as dark
      notches between the cards, and `-mt-10` straddled them across the hero seam)
- [x] `blog` index + `blog/[slug]` — dark masthead on articles, card grid with
      display titles, related-reading cards, dark closing CTA
- [x] `components/contact/ContactForm.tsx`, `components/projects/ProjectsFilterGrid.tsx`
- [x] `not-found.tsx`, `error.tsx`, `loading.tsx`
- [x] Header services menu — photo thumbnails instead of generic lucide glyphs;
      photo maps now shared via `lib/service-photos.ts`
- [x] `app/(landing)/gpr-scanning-dubai` — done. Retokened to Site Survey, **white
      header** (black eagle needs a light bar), lead form is a **light plate**, and the
      page now follows the site's light/dark rhythm instead of being wall-to-wall dark:
      dark hero -> mist -> white -> mist -> white -> mist -> white -> dark CTA.
      **Trimmed from 13 sections to 8** at the user's request ("keep it simple so it
      converts better"): `ServiceAreas` cut (coverage already stated in hero + FAQ) and
      the standalone `BottomLeadForm` folded into the final CTA. GP8000 photo added to
      the equipment block. All orange fills rounded — the flat sharp rectangles read as
      harsh.
- [x] Stale depth claims in page files — swept

## Photography status

Every service page now has a hero, and all but oversized-cargo have a gallery.
`equipment.image` (added to `ServicePageData`) shows the device beside the equipment copy.

**We have no photo of the Proceq GS8000.** Every one of the client's photos was
checked: they show the GP8000, the core rig, cores, a scan grid, a finished core hole
and a tablet. The GS8000 pages therefore show *surveyed ground* with captions that say
exactly that — never a stock machine captioned as their equipment. Screening Eagle's
product renders are copyrighted and there is no press kit granting reuse, so they are
not used. Fix by either (a) a GS8000 field photo from the client, or (b) written
permission / a partner asset pack from Screening Eagle.

Oversized cargo has one genuine image; the stock alternatives were generic trucks.

## Preserve always

GA4 tracking calls and props, WhatsApp/CTA hrefs, SEO metadata exports, JSON-LD
schema, routing and slugs. Visual/markup layer only unless asked.

`lib/tracking.ts` has pre-existing lint errors (`no-explicit-any`) — not ours.
