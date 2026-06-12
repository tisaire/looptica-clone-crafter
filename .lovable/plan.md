# Plan: Option A — Strip duplicate static meta from `index.html`, ensure every page has Helmet

## Goal

Stop serving the same `<title>` and `<meta description>` on every URL. Let `react-helmet-async` (already wired up) be the single source of per-route meta. Googlebot executes JS and reads Helmet output; the duplicate static head was masking that.

## Changes

### 1. `index.html` — keep only sitewide tags

Remove from `<head>`:
- `<title>` (Helmet sets it per route)
- `<meta name="description">`
- `<meta name="keywords">`
- All `<meta property="og:title|og:description|og:url">` (kept generic ones are fine as social-crawler fallback, but currently they're optical-shop-specific — replace with neutral brand-level fallback)
- `<meta name="twitter:title|twitter:description">`

Keep:
- charset, viewport, robots, author, google-site-verification
- favicon, font preloads, preconnects, critical CSS
- `og:image`, `og:type`, `twitter:card`, `twitter:image` (sitewide fallback for social crawlers)
- `<meta property="og:title">` and `og:description` replaced with **brand-level** generic text ("Looptica") so social previews on un-rendered pages still look sane
- Organization JSON-LD (sitewide)
- GA loader

Set a neutral brand `<title>` like `Looptica` as fallback only.

### 2. Audit pages for `<Helmet>` coverage

`ServiceLayout` already injects per-route Helmet — all 16 service pages are covered. Verify and add Helmet to:
- `src/pages/Index.tsx` (home)
- `src/pages/About.tsx`
- `src/pages/products/OticonModels.tsx`
- `src/pages/products/OticonModelPage.tsx` (per-model title/description)
- `src/pages/legal/PrivacyPolicy.tsx`
- `src/pages/legal/TermsConditions.tsx`
- `src/pages/legal/CookiesPolicy.tsx`
- `src/pages/NotFound.tsx` (with `<meta name="robots" content="noindex">`)

Each Helmet block: `<title>`, `<meta name="description">`, `<link rel="canonical">`, `og:title`, `og:description`, `og:url`, hreflang alternates (same pattern as `ServiceLayout`).

### 3. Verification

After build, `curl https://looptica.com/en/services/orto-k` should show distinct `<title>` in raw HTML (from Helmet hydration in static HTML it won't — but at least no conflicting one). Then request re-indexing in GSC.

## Honest caveat

With pure SPA + Helmet, Googlebot still has to render JS to see the per-route title. That works (Google does render), but slower than SSG. If after 3 weeks Orto-K is still "Discovered – not indexed," fall back to Option B (`vite-react-ssg`).

## Files touched

- `index.html` (trim)
- `src/pages/Index.tsx`, `src/pages/About.tsx`, `src/pages/NotFound.tsx`
- `src/pages/products/OticonModels.tsx`, `src/pages/products/OticonModelPage.tsx` (+ `src/components/products/OticonModelDetail.tsx` if needed)
- `src/pages/legal/PrivacyPolicy.tsx`, `TermsConditions.tsx`, `CookiesPolicy.tsx`

No new dependencies, no build pipeline changes, no `.htaccess` changes.
