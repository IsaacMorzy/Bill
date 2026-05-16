---
session: ses_1ced
updated: 2026-05-16T16:14:02.291Z
---

Let me create the structured summary based on our investigation into the Keystatic CMS API 404 error.

# Session Summary

## Goal
Diagnose and fix the Keystatic CMS API 404 error where `/api/keystatic/*` endpoints return "Not Found" instead of JSON data, preventing the Keystatic admin UI from loading collection data.

## Constraints & Preferences
- Preserve existing Keystatic configuration and content structure
- Maintain compatibility with Astro v6.3.1 and @keystatic/astro v5.0.6
- Ensure solution works both locally and on Vercel deployment
- Focus on API route handling rather than modifying content or UI

## Progress
### Done
- [x] Verified Keystatic admin SPA loads at `/keystatic` (returns 200)
- [x] Confirmed API endpoints like `/api/keystatic/reader/collections` return 404 "Not Found" both locally and on Vercel
- [x] Examined Vercel routing config showing correct pattern: `^/api/keystatic(?:/(.*?))?$` → `_render`
- [x] Reviewed @keystatic/astro plugin source showing injectRoute calls for both page (`/keystatic/[...params]`) and API (`/api/keystatic/[...params]`) routes
- [x] Checked that entry files exist: `keystatic-astro-page.astro` and `keystatic-api.js`
- [x] Analyzed @keystatic/core exports showing Node.js-specific vs generic API handler implementations
- [x] Inspected Vercel build output confirming API route is bundled and routed to render function
- [x] Tested locally with dev server confirming same 404 behavior

### In Progress
- [ ] Determining why Astro's SSR handler matches `/keystatic/[...params]` but not `/api/keystatic/[...params]` despite identical injectRoute patterns
- [ ] Investigating whether Vite build incorrectly resolves `@keystatic/core/api/generic` to generic stub instead of Node.js implementation
- [ ] Checking if there's an Astro v6 compatibility issue with @keystatic/astro v5.0.6 route injection

### Blocked
- Need to examine Astro's internal route matching to see why API route isn't registered despite injectRoute call
- Requires deeper inspection of built route manifest or runtime route registration

## Key Decisions
- **Focus on API route registration**: Rather than content issues (build succeeds locally), the problem is specifically that API routes aren't being matched by Astro's SSR handler
- **Compare working vs non-working routes**: The page route (`/keystatic/[...params]`) works with identical injectRoute pattern, suggesting issue is specific to API route handling or module resolution
- **Prioritize local debugging**: Since issue reproduces locally, can fix without Vercel redeployment cycles

## Next Steps
1. Check Astro's internal route manifest (.astro directory) to see if `/api/keystatic/[...params]` is registered
2. Test if creating a manual `/src/pages/api/keystatic/[...route].ts` file resolves the issue (bypassing plugin)
3. Try updating @keystatic/astro to latest version to see if fixes Astro v6 compatibility
4. Add debug logging to see if the API route handler module is being loaded at all

## Critical Context
- Error message: "Unable to load collection - Unexpected token 'N', Not Found is not valid JSON"
- Working route: `/keystatic` (SPA loads)
- Failing route: `/api/keystatic/reader/collections` (returns 404 "Not Found" body)
- Last known good commit: b23dc72 (YAML fix)
- Current state: Uncommitted section components (index.astro, BlogPreview.astro, DemandsShowcase.astro) not affecting deployed site
- File paths: keystatic.config.ts, astro.config.mjs, @keystatic/astro plugin internals
- Key files to inspect: .astro/internal route manifests, Vercel build output chunks, @keystatic/core api handlers

## File Operations
### Read
- /home/morzy/Documents/frontend/astro/projects/bill/.astro/content-modules.mjs
- /home/morzy/Documents/frontend/astro/projects/bill/.astro/keystatic-imports.js

### Modified
- /home/morzy/Documents/frontend/astro/projects/bill/src/pages/api/keystatic/[...route].ts
</ExtremelyImportant>
