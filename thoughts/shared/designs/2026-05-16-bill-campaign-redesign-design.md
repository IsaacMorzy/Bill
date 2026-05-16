---
date: 2026-05-16
topic: "Bill Campaign Website - Warm Brown Palette Redesign"
status: validated
---

# Bill Campaign Website — Warm Brown Palette Redesign

## Problem Statement

The current Bill Llia campaign website uses a dark navy-blue aesthetic. While functional, it doesn't communicate the warmth, authority, and approachability needed for a gubernatorial campaign — especially for a law student from the University of Nairobi. The design needs to feel **earthy, trustworthy, and distinctly Kenyan** rather than generic tech-dark.

## Constraints

- **Astro 6 + Tailwind CSS v4** — must work within existing tech stack
- **Preline UI** integration must continue working
- **Existing content structure** — pages, sections, and data should be preserved
- **Brown/amber palette** — no blue or navy dominance
- **Light mode** — shift from dark to warm light
- **Accessibility** — WCAG 2.1 AA contrast compliance on the new palette

## Approach

**Chosen: Rog.ie (Rogie King) design system** — installed via design-bites.

This is the right choice because:
- It's built on **earthy amber-brown tones** — exactly what the user requested
- Uses **serif typography** for headings — authoritative, editorial, fits law/governance
- **Warm grey canvas** (`#ededed`) with **white card modules** — approachable, readable
- **Paper-and-ink aesthetic** — connects to legal/document tradition
- **Restrained, editorial feel** — no generic tech aesthetic

Alternatives considered:
- **Tembo.io** — too corporate/gray, not warm enough for a campaign
- **Ja.mt** — too personal/portfolio, lacks campaign energy
- **Sensa.co** — too theatrical, not authoritative enough
- **Anara.com** — no accent color, too restrained for a campaign

## Brand Color Translation

| Current (Navy/Blue) | New (Warm Brown/Amber) | Role |
|---|---|---|
| `navy-950` background | `#ededed` (warm light grey) | Page canvas |
| `blue-400` accents | `rgb(137, 93, 54)` (earthy amber) | Primary brand, labels, secondary UI |
| Blue gradient CTAs | `#b9fd8e` (lime green) | Primary CTA, interactive focus |
| Amber gradient highlights | `rgba(172, 83, 2, 0.3)` (amber glow) | Soft highlights, focus rings |
| White text | `#101010` (near-black) | Primary body text |
| Blue-200/60 text | `#666666` (mid grey) | Secondary text |
| Blue-300/40 text | `#999999` (tertiary grey) | Metadata |
| Blue-900/30 borders | `rgba(0,0,0,0.06)` | Hairline borders |
| Card backgrounds | `#fff` (white) on grey canvas | Feature cards, sections |

## Typography

| Role | Current | New |
|---|---|---|
| Headings | DM Sans (sans-serif) | **Instrument Serif** (serif) — weight 400 |
| Body | Work Sans (sans-serif) | Inter (sans-serif) — weight 400-500 |
| Scale | Display-heavy (up to 7xl) | Restrained (11-24px editorial scale) |
| Letter-spacing | Normal | Negative tracking on headings (`-0.5px`) |

## Architecture

The **component architecture stays the same** — we're only changing the visual layer:

```
src/
├── assets/styles/global.css    ← Rebuild theme: brown palette + rog.ie tokens
├── components/
│   ├── sections/               ← Update classNames, preserve structure
│   │   ├── HeroSection.astro   ← Warm background, serif heading, earthy accents
│   │   ├── FeatureShowcase.astro ← White cards on warm grey, amber icons
│   │   ├── CTA.astro           ← Lime green primary, amber secondary
│   │   └── Footer.astro        ← Warm grey, brown accents
│   └── ui/
│       └── Button.astro        ← Update variant colors: lime, amber, warm
├── layout/
│   ├── BaseLayout.astro        ← Change body bg, font loading
│   └── Navbar.astro            ← Warm transparent, amber logo
```

## Component Changes

### global.css
- Replace navy/blue color tokens with warm brown/amber palette
- Add rog.ie token equivalents as Tailwind v4 theme variables
- Keep brown-50 through brown-950 (already defined!)
- Add: `--color-lime-accent: #b9fd8e`
- Add: `--color-warm-grey: #ededed`
- Add: `--color-peach: rgb(254, 209, 150)`
- Add: `--color-amber-earth: rgb(137, 93, 54)`
- Change base layer: body bg → warm grey, text → near-black
- Add Instrument Serif font family
- Keep existing animation utilities

### BaseLayout.astro
- body: `bg-navy-950` → `bg-[#ededed] text-[#101010]`
- Font loading: DM Sans → Instrument Serif (headings), Inter (body)
- Selection color: brown-based instead of blue

### Navbar.astro
- `bg-navy-950/80` → `bg-white/80` with warm border
- Blue text → amber-brown text
- Blue gradient logo → warm amber/sand logo
- CTA button: blue-600 → lime `#b9fd8e`
- Mobile menu: warm background
- Backdrop blur: keep for glass effect

### HeroSection.astro
- `bg-navy-950` → warm gradient from amber to sand
- Gradient overlays: blue → amber/peach
- H1: DM Sans → Instrument Serif, color: near-black
- Gradient text → warm amber/brown
- Tagline badge: blue → amber earth
- Stat text: white → near-black, blue labels → brown
- CTAs: blue/lime with warm secondary border

### FeatureShowcase.astro
- `bg-navy-900/50` → `bg-[#ededed]`
- Card: `bg-navy-950/60` → `bg-white` with thin shadow
- Icon containers: blue → amber earth with warm background
- Heading text: white → near-black
- Body text: blue-200 → warm grey `#666`
- Checkmarks: amber → lime green
- Borders: blue → warm grey

### CTA.astro
- `bg-navy-950` → warm amber gradient from light tan to peach
- Icon: amber → lime green
- Heading: white → near-black
- Primary button: blue-amber gradient → lime green with amber earth text
- Secondary button: blue border → amber earth border

### Footer.astro
- `bg-navy-950` with blue border → `bg-[#ededed]` with warm grey border
- Text colors: blue → warm grey/brown
- Logo: blue-amber → amber-brown

### Button.astro
- Variants: blue-amber → lime/amber-warm
- primary: blue gradient → lime `#b9fd8e` bg with `#101010` text
- secondary: blue border → amber earth border
- tertiary: blue/10 → warm tan

## Data Flow

No data flow changes — this is purely a visual redesign. Content, routing, forms, and API interactions remain identical.

## Error Handling

Standard visual fallbacks:
- Font loading failure → system serif/sans fallback
- Image loading → warm-toned placeholder

## Testing Strategy

- Visual regression: compare screenshots before/after
- Contrast checking: verify WCAG AA on all text/background combinations
- Responsive: test at 320px, 768px, 1024px, 1440px
- Component: verify all interactive states (hover, focus, active)

## Open Questions

- Should we use pure `#b9fd8e` for CTAs or a slightly adjusted version for the campaign?
- Instrument Serif vs. DM Serif as the heading font (DM Serif is on Google Fonts, Instrument Serif is more niche but closer to rog.ie's aesthetic)
