---
date: 2026-05-16
topic: "Bill Llia Campaign Site — Content & Design Rewrite"
status: validated
---

## Problem Statement

The existing site is a DataNova AI/SaaS platform with teal branding, mega menus, and tech-focused content (AI data quality, platforms, resources). We need to convert it to a campaign website for **Bill Llia, MD** — a gubernatorial candidate for Tana River County, Kenya.

**What's needed:**
- New color palette (kenyan politics/professional)
- Campaign-focused content (platform, bio, call to action)
- Simplified navigation (remove mega menus, add Blog + Petition)
- Remove all DataNova-specific pages and content
- Clean, authoritative, approachable campaign tone

## Color Palette

| Role | Hex | Purpose |
|------|-----|---------|
| Primary | `#1E3A8A` (Deep Blue) | Authority, trust, law — anchors the campaign |
| Secondary | `#D97706` (Kenyan Gold) | Warmth, optimism, connection to Kenya |
| Dark | `#1F2937` (Charcoal) | Body text, serious tone |
| Light | `#FEFCE8` (Warm Off-White) | Background, approachability |

The existing gradient system is preserved but re-themed from teal→violet→blue to blue→gold→amber.

## Navigation Structure

**Before (DataNova):** Home | Features | Resources (mega) | Pricing | Blog | Downloads | Contact  
**After (Bill Llia):** Home | Platform | About | Blog | Petition | Contact

Mega menu dropdowns removed. Simple single-level nav with mobile hamburger.

## Page Inventory

| File | Action | Notes |
|------|--------|-------|
| `src/pages/index.astro` | Rewrite | Campaign homepage composition |
| `src/pages/about.astro` | Rewrite | Bill Llia bio |
| `src/pages/blog.astro` | Rewrite | Campaign blog listing |
| `src/pages/blog/*.astro` | Replace content | Campaign posts replace AI posts |
| `src/pages/contact.astro` | Rewrite | Campaign contact form/ info |
| `src/pages/downloads.astro` | Remove | DataNova-specific |
| `src/pages/pricing.astro` | Remove | Not applicable |
| `src/pages/resources/*` | Remove | DataNova knowledge base |
| `src/layouts/BaseLayout.astro` | Rewrite SEO/defaults | New meta tags, OG image, title format |
| `src/components/Navbar.astro` | Simplify | Flat links, new logo, new CTA |
| `src/components/Footer.astro` | Rewrite | Campaign footer, social links |
| `src/components/sections/HeroContent.astro` | Rewrite | Campaign hero |
| `src/components/sections/FeatureShowcase.astro` | Rewrite | Campaign platform pillars |
| `src/components/sections/CTA.astro` | Rewrite | Join/volunteer CTA |
| `src/data/navigation.ts` | Update | New link structure |
| `src/styles/global.css` | Update colors | CSS custom properties |
| `src/components/common/AnnouncementBanner.astro` | Rewrite or remove | Campaign announcement |
| `public/favicon.ico` | Replace | Campaign logo |

## Homepage Section Composition

1. **Hero** — Full-width: photo/visual, headline ("The Doctor Tana River County Needs"), "Meet Bill" + "Join the Movement" CTAs
2. **Platform Pillars** — 5 key issues as styled cards: Healthcare, Education, Water & Sanitation, Roads & Infrastructure, Jobs & Enterprise
3. **About/Lede** — Short bio: Harvard-trained MD, born in Meru, dedicated to Tana River
4. **CTA** — "The campaign needs you" — volunteer signup, contribution link, social follow

## Content Tone

Authoritative but warm. Campaign messaging. Focus on:
- Bill's credentials (MD, Harvard, local roots)
- Tana River's potential
- Specific platform planks
- Call to action / community involvement

## Implementation Order

1. global.css (colors) + navigation.ts (links)
2. Navbar.astro (simplify)
3. BaseLayout.astro (SEO)
4. HeroContent.astro (hero rewrite)
5. FeatureShowcase.astro (platform pillars)
6. CTA.astro (campaign CTA)
7. Footer.astro (campaign footer)
8. about.astro (bio page)
9. index.astro (homepage composition)
10. contact.astro (campaign contact)
11. Remove irrelevant pages
12. Build & verify
