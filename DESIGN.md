---
name: Bhadeya Technical Services
description: Instrumentation-grade UAE GPR scanning, core cutting, excavation and cargo escort site
colors:
  ink: "#0E0E0F"
  ink-raised: "#18181A"
  signal-orange: "#F5820F"
  concrete: "#EEEAE2"
  concrete-tint: "#E2DDD2"
  paper: "#FBFAF7"
  steel: "#5B6570"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "2px"
  md: "3px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.signal-orange}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "13px 26px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "26px 22px"
  stat-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "30px 32px"
---

# Design System: Bhadeya Technical Services

## 1. Overview

**Creative North Star: "The Depth Gauge"**

Bhadeya's product is literal: seeing what's hidden underground or embedded in concrete before anyone cuts, drills, or digs. The Depth Gauge takes that job and makes it the visual grammar of the site itself — depth rulers, tick marks, measured numbers (500CM, ±10MM, 12–500MM) standing in for the generic stat-card. The palette is deliberately restricted to the two colors already in the company's own eagle-and-wordmark logo: flat black and one signal orange, no gradients, no third brand color, no navy-blue-and-orange corporate-services template look. This is also, not incidentally, the universal hazard/safety-signage color pairing — apt for a company whose entire job is preventing someone from hitting a cable they couldn't see.

This system explicitly rejects the generic UAE-contractor-site look: dot-grid hero backgrounds, rounded pill buttons, soft-shadow stat cards with icon-in-circle badges, and every color decision that defaults to "corporate blue." Nothing here should look like it came from a services-business template.

**Key Characteristics:**
- Flat, high-contrast, two-color discipline (ink black + signal orange)
- Measurement/instrumentation vocabulary: mono numerals, precise stats, real spec numbers
- Zero border-radius or near-zero — sharp, engineered edges, not soft SaaS rounding
- Still and quiet by default — no grid-line textures or animated sweep/scan motifs; motion is limited to ordinary fade/slide entrances

## 2. Colors

The palette is two saturated-adjacent colors and four neutrals — restrained on purpose, matching a logo that is itself just black and orange.

### Primary
- **Signal Orange** (#F5820F): the only accent in the system. CTAs, active states, stat highlight numerals, the eagle mark's natural color. Used sparingly outside of hero/CTA moments — it should still read as *the* accent, not a background color.

### Neutral
- **Ink** (#0E0E0F): primary dark surface (hero, CTA bands, stat bands) and default text color on light surfaces. Matches the logo's black, not a navy-tinted "dark mode" black.
- **Ink Raised** (#18181A): one step up from Ink, for panel-on-panel separation on dark surfaces — the header bar and footer both use this instead of pure Ink specifically so they read as distinct layers against the Ink hero/CTA sections they sit next to, not as one undifferentiated black mass.
- **Concrete** (#EEEAE2): default light section background — warm, not cool-gray, echoes poured concrete rather than generic off-white SaaS backgrounds.
- **Concrete Tint** (#E2DDD2): recessed fills within light sections (input backgrounds, stat pill backgrounds, hairline dividers get their tint from here).
- **Paper** (#FBFAF7): card and content surfaces sitting on top of Concrete, plus text-on-dark color.
- **Steel** (#5B6570): secondary/muted text, captions, eyebrow labels, borders at low opacity.

### Named Rules
**The Two-Color Rule.** Only Ink and Signal Orange are allowed to carry brand meaning. Every other value in this palette is a neutral. If a design needs a third "brand" color, the answer is to use Signal Orange at a different weight (text vs. fill vs. border), not to introduce a new hue.

## 3. Typography

**Display Font:** Space Grotesk (with ui-sans-serif, system-ui, sans-serif fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui, sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, monospace fallback)

**Character:** Space Grotesk gives headlines a slightly technical, geometric edge without tipping into novelty; Inter stays invisible and legible for service descriptions and FAQ copy; IBM Plex Mono carries every number that represents a real measurement, so a reader's eye learns to trust mono-set digits as "this is a spec, not a marketing claim."

### Hierarchy
- **Display** (600, clamp(1.875rem, 4vw, 3rem), 1.08 line-height, -0.02em tracking): Hero headline and major section headers only.
- **Headline** (600, 1.5rem, 1.2 line-height): Section titles ("Our Services", "Why Choose Us").
- **Title** (600, 1.0625rem, 1.3 line-height): Card headings, service names.
- **Body** (400, 1rem, 1.6 line-height): Descriptions, FAQ answers, long-form copy. Cap line length at 65–75ch.
- **Label** (500, 0.75rem, 0.08em tracking, uppercase): Eyebrows, badges, stat unit suffixes, nav labels — always IBM Plex Mono.

### Named Rules
**The Mono-Number Rule.** Any digit that represents a real spec (depth, tolerance, size range, year count, phone number in a data context) is set in IBM Plex Mono. Digits inside ordinary prose sentences stay in Inter. This is what separates "500cm" as a fact from "500cm" as filler.

## 4. Elevation

Flat by default. No box-shadows anywhere in the system — the logo itself is a flat black-and-orange mark, and shadows would undercut the hard-edged, engineered feel the Depth Gauge concept is built on. Hierarchy is conveyed through flat color contrast (Ink vs. Concrete vs. Paper), 1px hairline borders at low-opacity Steel, and the Ink Raised step for subtle same-hue separation, never through blur or drop-shadow.

### Named Rules
**The Flat-by-Default Rule.** If a component needs to look "lifted," change its background tint or add a hairline border. Never reach for box-shadow, and never reach for a repeating grid-line texture as a background fill — Ink and Ink Raised are the only two dark-surface steps; use them, not decoration, to separate panels.

## 5. Components

Buttons, cards and stat bands are deliberately plain-spoken — sharp edges, flat fills, and the mono type doing the work of feeling "engineered" rather than decoration doing it.

### Buttons
- **Shape:** Near-zero radius (2px) — enough to soften a raw rectangle, not enough to read as "rounded."
- **Primary:** Signal Orange fill, Ink text, 13px/26px padding, 600-weight label. No gradient, no hover-lighten; hover uses a 1px inset border in Ink instead of a color shift.
- **Ghost/Secondary:** Transparent fill, 1px Paper/28%-opacity border, Paper text. Used on dark (Ink) surfaces for the secondary CTA (e.g. "Call Now" next to "Get Free Quote").

### Cards / Containers
- **Corner Style:** 0px (square) for service/content cards; components sit edge-to-edge inside a 1px Steel-at-8%-opacity grid line rather than each card having its own border, so a card grid reads as one instrument panel, not four separate boxes.
- **Background:** Paper on Concrete sections.
- **Shadow Strategy:** None — see Elevation.
- **Border:** Cards themselves are borderless; the 1px lines are grid gaps, not per-card borders.
- **Internal Padding:** 26px/22px (lg/md scale).

### Inputs / Fields
- **Style:** Flat Paper background, 1px Concrete Tint border, 2px radius.
- **Focus:** Border shifts to Signal Orange at full opacity plus a 2px Signal Orange outline-offset ring — no glow/blur.

### Navigation
- Ink Raised header bar (distinct from the Ink hero/page surfaces below it), Paper wordmark/eagle mark. Nav links in Body weight, active/hover state underlines in Signal Orange (never a background pill). Mobile: full-bleed Ink drawer, same type rules.

### Dark-surface transitions (footer, stacked Ink sections)
Where two Ink-background sections sit back to back (e.g. a CTA band directly above the Footer), give the lower one Ink Raised instead of Ink, plus a 1px Signal Orange top border, so the transition reads as a deliberate seam rather than one undifferentiated black block.

## 6. Do's and Don'ts

### Do:
- **Do** keep every brand-meaningful color to exactly two: Ink (#0E0E0F) and Signal Orange (#F5820F).
- **Do** set every real measurement (depths, tolerances, size ranges, years, stats) in IBM Plex Mono.
- **Do** use flat fills, hairline borders, and tint changes for hierarchy — never box-shadow.
- **Do** use Ink Raised (not pure Ink) for the header, footer, and any dark panel that sits directly against another Ink surface, so adjacent dark sections stay visually distinct.
- **Do** keep contact (WhatsApp/call) visually one tap away on every page, per PRODUCT.md.

### Don't:
- **Don't** introduce navy, electric blue, or any third brand hue — the old palette (#0A2540 navy, #0066FF blue, #FF6B00 orange) is retired in full, not partially.
- **Don't** use a dot-grid, repeating grid-line texture, or animated scan/sweep line anywhere — tried in an early pass and explicitly rejected; keep dark surfaces flat and quiet, with at most a soft single radial glow.
- **Don't** use rounded pill buttons or soft-shadow icon-in-circle stat cards — the generic corporate-services template look this redesign exists to move away from.
- **Don't** add drop-shadows or blurred glows to cards, buttons, or nav — flat by default, no exceptions.
- **Don't** stack two Ink-background sections directly on top of each other without a seam (Ink Raised step and/or hairline border) between them.
