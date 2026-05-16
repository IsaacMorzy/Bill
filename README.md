# Bill Llia for Governor — Campaign Website

Campaign website for **Dr. Bill Llia**, candidate for Governor of Nairobi County, Kenya. Built with Astro, Tailwind CSS v4, and Preline UI.

## Overview

A campaign site with:
- **Hero section** with campaign slogan and stats
- **Platform pillars** — Healthcare, Education & Youth, Economic Empowerment, Water & Sanitation
- **About** — candidate biography
- **Petition** — citizen petition with signature form
- **Contact** — campaign contact form
- **Blog** — Keystatic CMS-powered blog

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (SSR on Vercel)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Design System:** [rog.ie (Rogie King)](https://rog.ie) — warm brown/amber palette
- **UI Components:** [Preline UI](https://preline.co/)
- **CMS:** Keystatic (blog content management)
- **Database:** Astro DB (petition signatures)
- **Deployment:** Vercel (via Astro Vercel adapter)

## Getting Started

```bash
pnpm install
pnpm dev       # Start dev server at localhost:4321
pnpm build     # Production build
pnpm preview   # Preview production build
```

## Project Structure

```
src/
├── assets/styles/   # Global CSS with Tailwind theme (campaign palette)
├── components/
│   ├── sections/    # Page sections (Hero, FeatureShowcase, CTA, Footer)
│   └── ui/          # Reusable UI components (Button, ThemeToggle, icons)
├── layout/          # BaseLayout, Navbar
├── pages/           # index, about, blog, contact, petition
└── utils/           # Navigation config
```

## Campaign Brand

- **Background:** Warm sand/peach gradient (`#f5eadc` → `#f0e0d0`)
- **Primary brand:** Amber Earth (`rgb(137, 93, 54)`)
- **CTA accent:** Lime Green (`#b9fd8e`)
- **Text:** Near-black (`#101010`) on warm backgrounds
- **Card surface:** White on warm grey (`#ededed` canvas)
- **Fonts:** Instrument Serif (headings), Inter (body)
- **Logo:** "BL" monogram in amber-earth on solid bg
