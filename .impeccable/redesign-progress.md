# Redesign Progress — "The Depth Gauge"

Tracking file for the site-wide redesign. Site is fully redesigned and verified as of this update. Read this before making further changes so nothing is redone or contradicted.

## Status: complete, all pages verified (tsc clean, lint clean except pre-existing lib/tracking.ts issues)

## IMPORTANT — direction changed mid-session, read before touching hero/dark sections
The original plan included a "Scan Sweep" signature element (animated horizontal sweep line) and a repeating grid-line background texture on all dark (Ink) sections, plus a depth-ruler rail (tick marks 0-500) on the Hero. **The user explicitly rejected all of this** ("i dont want grid and scanning style line ... anywhere in section u used", "remove this measure line from the hero section"). All of it has been removed:
- No `.scan-sweep-el` / `@keyframes scan-sweep` (deleted from globals.css)
- No repeating grid-line `backgroundImage` patterns anywhere (Hero, StatsBar, CTASection, ServicePageTemplate hero+CTA, about/contact/projects heroes) — all now flat `bg-ink` + at most one soft radial orange glow
- No depth-ruler tick-mark rail in Hero
- DESIGN.md and .impeccable/design.json have been updated to reflect this — the "Do's and Don'ts" section now explicitly bans grid textures and scan/sweep lines. **Do not reintroduce these.**

## Dark-surface adjacency rule (also added mid-session)
Where two Ink-background sections sit back to back (e.g. CTA directly above Footer, or Header directly above Hero), the *upper/bar* one uses **Ink Raised** (#18181A) instead of pure Ink (#0E0E0F), so they don't blend into one undifferentiated black block:
- Header.tsx: `bg-ink-raised` always (not scroll-conditional, not pure ink)
- Footer.tsx: `bg-ink-raised` (var FOOTER_BG) + `border-t border-signal-orange/30`
- This is documented in DESIGN.md section 5 "Dark-surface transitions" and section 6 Do's/Don'ts.

## Known-fixed bugs (real, verified via screenshots — not hypothetical)
1. **StatsBar suffix text** ("+ CITIES") was rendering at the same huge font-size as the number itself — fixed with a smaller nested span.
2. **Grid gap-px trick breaks on uneven item counts.** The "seamless instrument panel" pattern (`gap-px` + `bg-steel/20` container, each cell `bg-paper`) only works when item count divides evenly into columns — otherwise empty cells show as solid gray blocks. Fixed in ServicePageTemplate (specs/applications/gallery/how-it-works) and ProjectsShowcase/ProjectsFilterGrid by switching to individually-bordered cells (`border border-steel/20` per cell + normal `gap-3`). **Use individually-bordered cells for any future data-driven grid of unpredictable length.**
3. **ProjectsFilterGrid.tsx: entire project grid was invisible** (opacity stuck at 0) — a pre-existing bug (confirmed via `git diff`, not introduced by the redesign): `motion.article` relied on inheriting variants from its parent, which doesn't reliably fire when combined with the `layout` prop + `AnimatePresence mode="popLayout"`. Fixed with explicit `initial="hidden" animate="visible" exit="hidden"` on the article.
4. **Outline-variant Button contrast bug**: shadcn's `variant="outline"` button has a built-in `hover:bg-accent hover:text-accent-foreground` — on dark (Ink) surfaces this makes the text nearly invisible on hover (accent-foreground is near-black). Fixed by adding an explicit `hover:text-paper` to every outline button on a dark surface (Hero.tsx, ServicePageTemplate.tsx related-services... actually just the two hero secondary buttons). **Any new outline button placed on an Ink background needs `hover:text-paper` added explicitly** or it will repeat this bug.
5. **Hero viewport overflow**: the original Hero used `min-h-[calc(100vh-5rem)]` stacked with separate large `py-*` padding, causing total height to exceed one viewport (CTA buttons pushed below the fold). Fixed by using `min-h-[75vh] md:min-h-[80vh]` (intentionally less than 100vh) with modest padding instead of exact-viewport math.
6. **Landing page (`/gpr-scanning-dubai`) `.hero-wa-btn` mobile CSS override**: forced the WhatsApp button to a gold/black color instead of green on mobile only — the override had no matching non-`!important` base rule, so it was a straight bug. Removed.
7. **Landing page HowItWorks connector line**: was always `display:none` inline with a comment claiming "shown via CSS below" — no such CSS existed, so it was permanently-dead code. Removed entirely rather than fixing its positioning.

## Foundation
- [x] app/globals.css — Ink/Signal Orange/Concrete/Paper/Steel tokens, flat radius scale (2-4px), TEMP aliases (--color-primary-navy/--color-accent-orange/--color-secondary-blue → new tokens) kept for safety, no grid/scan-sweep CSS remains
- [x] Fonts (app/layout.tsx) — Space Grotesk (--font-heading), Inter (--font-inter), IBM Plex Mono (--font-mono-plex)

## Global layout
- [x] Header.tsx — `bg-ink-raised` always, Paper logo plate, underline nav (no pill), flat services dropdown, mobile Sheet is full Ink drawer
- [x] Footer.tsx — **simplified** to a lean 3-column layout (Brand+description / Services links / Contact info+quick links), one-line "Serving [areas]" instead of a tag grid, minimal bottom bar. An earlier version had a CTA band + Business Hours block + tag-grid service areas — user said it felt like too much info, so that was stripped back down. Don't re-add bulk here.
- [x] WhatsAppButton.tsx / CallButton.tsx / BackToTop.tsx — flat squares, ink/signal-orange, WhatsApp green kept as functional exception

## Homepage sections (components/sections/)
- [x] Hero.tsx — flat Ink, radial glow only, no grid/ruler/scan-line, `min-h-[75vh]`/`md:min-h-[80vh]` fixed the overflow bug, outline button hover-contrast fixed
- [x] ServicesOverview.tsx, StatsBar.tsx, WhyChooseUs.tsx, ProjectsShowcase.tsx, ServiceAreas.tsx, FAQ.tsx, CTASection.tsx — all flat instrument-grid pattern, Ink/Signal Orange only, no grid textures

## Service pages
- [x] ServicePageTemplate.tsx + ServicePageFAQ.tsx — flat Ink hero/CTA (no grid), individually-bordered dynamic-length grids, outline button contrast fixed
- [x] core-cutting/page.tsx custom children (size chart, GPR safety callout, equipment showcase) recolored
- [x] excavation/page.tsx, oversized-cargo/page.tsx — no custom children, fully covered by template

## Other pages
- [x] about, contact, projects pages — flat Ink heroes (no grid), instrument-grid content sections, individually-bordered dynamic grids
- [x] ContactForm.tsx, not-found.tsx, error.tsx, loading.tsx

## Landing page — app/(landing)/gpr-scanning-dubai/page.tsx + LeadForm.tsx
Originally left out of scope, but the user asked for it to be redesigned too. Now done:
- [x] Redefined the page's own local `C` design-token object (bg/card/gold/text/muted/border) to the main site's Ink + Signal Orange values — this cascaded through ~120 usages in one edit
- [x] Fonts swapped from Barlow Condensed/DM Sans to the shared Space Grotesk/Inter (`font.barlow`/`font.dm` now point to `var(--font-heading)`/`var(--font-inter)`)
- [x] Header/Footer: **kept minimal** (logo + phone in header, logo + copyright/links in footer) per explicit user decision — NOT the full site Header/Footer with nav menus, to preserve PPC conversion focus. Just restyled to match: logo on a Paper plate, flat Signal Orange CTA, Ink Raised bars, orange top-border seam on the footer.
- [x] Removed all leftover hardcoded old-gold gradients (`#D4A017`/`#B8860B`) across page.tsx and LeadForm.tsx, flattened to solid Signal Orange (no gradients, matches main site's Flat-by-Default rule)
- [x] Removed the decorative gradient divider line above the Final CTA heading, and the dead/always-hidden step-connector line in HowItWorks
- [x] Broadened copy from Dubai-only to UAE-wide (title, meta description, H1, hero badge, JSON-LD Service name/description, FAQ answer text) — kept factual Dubai mentions where accurate (multi-city photo captions, "Based in Dubai" office location, service-area card listing Dubai as one of 6 emirates). URL/slug intentionally left as `/gpr-scanning-dubai` — user chose "broaden copy" not "rename URL"; if a URL change or a separate UAE-wide page is wanted later, ask before doing it (ads/redirects implications).
- [x] Removed the "🔒 Your details are only shared with Bhadeya. No spam, ever." line from LeadForm per explicit request.

## Notes
- Preserve: GA4 tracking calls, WhatsApp/CTA link hrefs and tracking props, SEO metadata exports, JSON-LD schema, routing/slugs. Only touch visual/markup/className layers unless explicitly asked otherwise (the landing-page copy broadening was explicitly asked).
- Working tree has unrelated pre-existing uncommitted SEO changes (service page additions/removals, sitemap, JsonLd, faqs, services data) — not part of this redesign, don't revert.
- `lib/tracking.ts` has pre-existing lint errors (`no-explicit-any`) — not touched by this redesign, not this session's concern.
- Nothing has been committed to git yet — all changes are in the working tree.
