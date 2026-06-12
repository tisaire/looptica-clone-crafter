## Context

GSC's URL Inspection tool says the Orto-K URL is "not in sitemap." This is a **stale reading**, not a real problem:

- `public/sitemap.xml` already contains all 4 language variants (`/ca`, `/es`, `/en`, `/de`) of `/services/orto-k`, each with full `hreflang` annotations.
- The live file at `https://looptica.com/sitemap.xml` confirms this (24 `orto-k` matches).

Google's URL Inspection "Sitemaps" field updates only after Googlebot re-fetches and re-parses the sitemap. Until then it still shows the previous snapshot. Our job is to nudge that refresh.

## Plan

### 1. Bump `lastmod` on Orto-K entries in `public/sitemap.xml`
Update the 4 Orto-K `<url>` blocks (ca/es/en/de) to today's date (`2026-06-12`). A newer `lastmod` is the strongest signal that tells Google to re-process those entries.

### 2. Bump `lastmod` on the contact-lens pages too
The recent internal links we added live on these pages, so their `lastmod` should also reflect today:
- `/ca/services/lents-contacte`
- `/es/services/contact-lenses`
- `/en/services/contact-lenses`
- `/de/services/contact-lenses` (if present)

### 3. Re-submit the sitemap to GSC
After deploy, call the Search Console API to re-submit `https://looptica.com/sitemap.xml`. This puts the sitemap back into Google's priority queue.

### 4. Confirm via API what Google currently knows
Call the Sitemaps GET endpoint after submission to read back Google's `lastSubmitted` / `lastDownloaded` / warnings. Surface that to you so you can see when Google actually re-fetches.

### 5. Re-check URL Inspection in 24–48 h
The "not in sitemap" line should flip to listing `/sitemap.xml` once Google re-processes. No further code action needed.

## What I will NOT do
- Re-architect the sitemap (it's already correct).
- Add a sitemap-generator script (current static file is fine for this site's size).
- Touch `robots.txt` (already allows everything and references the sitemap correctly).

## Files to edit
- `public/sitemap.xml` — update `<lastmod>` on the 4 Orto-K entries + the contact-lens entries.

## Post-deploy actions (run after publish)
- `POST .../webmasters/v3/sites/https%3A%2F%2Flooptica.com%2F/sitemaps/https%3A%2F%2Flooptica.com%2Fsitemap.xml`
- `GET` the same path to read back Google's state.
