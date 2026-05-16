# Implementation Plan: Bill Campaign Website — Warm Brown Palette Redesign

## Overview
Redesign the Bill Llia campaign website from dark navy/blue to a warm brown/amber palette inspired by **rog.ie (Rogie King)** design system.

## Task Breakdown

### Phase 1: Theme Foundation — `src/assets/styles/global.css`

**Task 1.1: Add warm brand color tokens**
- Add to `@theme` block:
  - `--color-warm-bg: #ededed` (page canvas)
  - `--color-amber-earth: rgb(137, 93, 54)` (primary brand)
  - `--color-lime-accent: #b9fd8e` (CTA/interactive)
  - `--color-peach: rgb(254, 209, 150)` (warm module bg)
  - `--color-amber-glow: rgba(172, 83, 2, 0.3)` (focus rings)
  - `--color-warm-text: #101010` (near-black primary text)
  - `--color-warm-text-secondary: #666666`
  - `--color-warm-text-tertiary: #999999`

**Task 1.2: Update font families in `@theme inline`**
- Add `--font-instrument-serif: 'Instrument Serif', serif;`
- Keep `--font-dm-sans` as a fallback for the serif

**Task 1.3: Rewrite `@layer base`**
- `body`: change `bg-navy-950` → `bg-[#ededed]`, change text to `#101010`
- `h1, h2, h3, h4`: change font to `Instrument Serif`
- Update selection color to amber/warm

**Task 1.4: Update `@utility card`**
- Change from blue-tinted gradient to thin shadow + white card on warm grey

### Phase 2: Layout — `BaseLayout.astro`

**Task 2.1: Body background**
- `bg-navy-950 selection:bg-blue-500/30 selection:text-blue-200`
- → `bg-[#ededed] selection:bg-amber-earth/20 selection:text-[#101010]`

**Task 2.2: Font loading**
- Replace DM Sans loading with Instrument Serif from Google Fonts
- Replace Work Sans with Inter (Google Fonts)
- Update selectors: headings → Instrument Serif, body → Inter

### Phase 3: Layout — `Navbar.astro`

**Task 3.1: Header container**
- `bg-navy-950/80 border-blue-900/30` → `bg-white/80 border-amber-earth/10`

**Task 3.2: Logo**
- Blue gradient → Amber-earth solid bg or warm sand gradient
- Text gradient blue-to-amber → amber-earth solid
- "For MCA" → "For Governor"

**Task 3.3: Nav links**
- `text-blue-200/80 hover:bg-blue-500/10` → `text-[#666] hover:bg-amber-earth/10 hover:text-amber-earth`
- Petition link: `text-amber-400/90 hover:bg-amber-500/10` → `text-amber-earth hover:bg-amber-earth/10`

**Task 3.4: CTA button**
- `bg-gradient-to-r from-blue-600 to-amber-600` → `bg-[#b9fd8e] text-[#101010]`

**Task 3.5: Mobile menu**
- `bg-navy-950/95 border-blue-900/30` → `bg-white/95 border-amber-earth/10`
- Links same as desktop nav colors
- Mobile CTA: lime bg

### Phase 4: Section — `HeroSection.astro`

**Task 4.1: Section container**
- `bg-navy-950` → `bg-gradient-to-br from-[#f5eadc] via-[#f0e0d0] to-[#faf0e8]`
- Remove blue/amber gradient overlays — replace with warm radial gradients

**Task 4.2: Grid pattern overlay**
- Keep subtle pattern, change dot color to warm amber

**Task 4.3: Tagline badge**
- `border-blue-500/20 bg-blue-500/10` → `border-amber-earth/20 bg-amber-earth/10`
- `text-blue-300` → `text-amber-earth`

**Task 4.4: Headline**
- `text-white` → `text-[#101010]`
- Gradient span: `from-blue-400 via-blue-200 to-amber-300` → `from-amber-earth via-amber-600 to-amber-500`

**Task 4.5: Subtitle**
- `text-blue-200/70` → `text-[#666]`

**Task 4.6: Primary CTA**
- `from-blue-600 to-blue-500` → lime green `bg-[#b9fd8e] text-[#101010]`
- Remove blue shadow → subtle warm shadow

**Task 4.7: Secondary CTA**
- `border-blue-500/30 text-blue-200 hover:bg-blue-500/10` → `border-amber-earth/30 text-amber-earth hover:bg-amber-earth/10`

**Task 4.8: Stats grid**
- `border-blue-900/30` → `border-amber-earth/20`
- Value text: `text-white` → `text-[#101010]`
- Label text: `text-blue-300/60` → `text-[#666]`

### Phase 5: Section — `FeatureShowcase.astro`

**Task 5.1: Section container**
- `bg-navy-900/50` → `bg-[#ededed]`

**Task 5.2: Section header**
- `text-white` → `text-[#101010]`
- `text-blue-200/60` → `text-[#666]`

**Task 5.3: Pillar cards**
- `border-blue-900/30 bg-navy-950/60` → `border-[rgba(0,0,0,0.06)] bg-white`
- Remove backdrop-blur, add `shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2.5px_2px_-1px_rgba(0,0,0,0.075)]`
- Hover: `hover:border-blue-700/50 hover:bg-navy-950/80` → `hover:border-amber-earth/30 hover:shadow-[0_0_0_1px_rgba(137,93,54,0.15),0_4px_8px_-2px_rgba(0,0,0,0.1)]`

**Task 5.4: Icon containers**
- `from-blue-600/20 to-amber-600/10 text-blue-400 ring-1 ring-blue-500/20`
- → `from-amber-earth/15 to-amber-600/10 text-amber-earth ring-1 ring-amber-earth/20`

**Task 5.5: Card headings**
- `text-white` → `text-[#101010]`

**Task 5.6: Card description**
- `text-blue-200/60` → `text-[#666]`

**Task 5.7: Feature list items**
- `text-blue-300/50` → `text-[#666]`
- Checkmark icon: `text-amber-400/60` → `text-[#b9fd8e]`

### Phase 6: Section — `CTA.astro`

**Task 6.1: Section container**
- `bg-navy-950` → `bg-gradient-to-br from-[#f5eadc] to-[#f0e0d0]`
- Background overlays: blue → warm peach

**Task 6.2: Icon container**
- `from-blue-600/20 to-amber-600/10 text-amber-400 ring-1 ring-amber-500/20`
- → `from-lime-accent/20 to-amber-earth/10 text-[#b9fd8e] ring-1 ring-[#b9fd8e]/30`

**Task 6.3: Heading**
- `text-white` → `text-[#101010]`

**Task 6.4: Description**
- `text-blue-200/60` → `text-[#666]`

**Task 6.5: Primary CTA**
- `from-blue-600 to-amber-600` → `bg-[#b9fd8e] text-[#101010]`
- Remove blue shadow → warm shadow

**Task 6.6: Secondary CTA**
- `border-blue-500/30 text-blue-200 hover:bg-blue-500/10` → `border-amber-earth/30 text-amber-earth hover:bg-amber-earth/10`

### Phase 7: Section — `Footer.astro`

**Task 7.1: Footer container**
- `bg-navy-950 border-blue-900/30` → `bg-[#f5f0eb] border-[rgba(0,0,0,0.06)]`

**Task 7.2: Logo section**
- Logo bg: `from-blue-500 to-amber-600` → `bg-amber-earth`
- Logo text: `from-blue-400 to-amber-400` → `text-amber-earth`
- Slogan: `text-blue-300/50` → `text-[#666]`

**Task 7.3: Nav links**
- `text-blue-300/60 hover:text-blue-200` → `text-[#666] hover:text-amber-earth`

**Task 7.4: Separator**
- `border-blue-900/30` → `border-[rgba(0,0,0,0.06)]`

**Task 7.5: Bottom section text**
- `text-blue-300/40` → `text-[#999]`
- Email/phone: `hover:text-blue-200` → `hover:text-amber-earth`

### Phase 8: UI Component — `Button.astro`

**Task 8.1: Primary variant**
- `from-blue-600 to-amber-600 hover:from-blue-500 hover:to-amber-500 shadow-blue-600/20 hover:shadow-blue-500/30`
- → `bg-[#b9fd8e] text-[#101010] hover:bg-[#a8e87d] shadow-[rgba(185,253,142,0.3)]_...`

**Task 8.2: Secondary variant**
- `hover:border-blue-600 hover:bg-blue-600/10 border-blue-700/50 text-blue-200 hover:text-blue-100`
- → `hover:border-amber-earth hover:bg-amber-earth/10 border-amber-earth/50 text-amber-earth`

**Task 8.3: Tertiary variant**
- `bg-blue-500/10 hover:bg-blue-500/20 text-blue-200`
- → `bg-amber-earth/10 hover:bg-amber-earth/20 text-amber-earth`

## Execution Order
1. Phase 1 (global.css) — foundation
2. Phase 2 (BaseLayout.astro) — layout shell
3. Phase 3 (Navbar.astro) — navigation
4. Phase 4-7 (Hero, Features, CTA, Footer) — sections (can parallelize)
5. Phase 8 (Button.astro) — UI component
