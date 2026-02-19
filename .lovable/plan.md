
# Sitemap Update: lastmod Dates + x-default hreflang

## What Will Be Changed

Only one file is affected: `public/sitemap.xml`

### Change 1 — Update all lastmod dates to 2026-02-19

Every entry currently has either `2025-12-09` (all pages except plan-veo) or `2026-01-13` (plan-veo). All will be updated to `2026-02-19` to reflect the significant SEO improvements recently deployed (canonical fixes, hreflang, redirect updates). A fresh `lastmod` date signals Google to re-crawl these pages soon.

### Change 2 — Add x-default hreflang to all page groups

The homepage (lines 7–49) and plan-veo (lines 892–935) already have the `x-default` hreflang alternate. Every other page group is missing it. The following 21 page groups each need one line added after their `de` hreflang entry, pointing to the Catalan version as the default:

```xml
<xhtml:link rel="alternate" hreflang="x-default" href="https://www.looptica.com/ca/[path]"/>
```

Page groups to update (21 groups × 4 language variants = 84 `<url>` blocks total):

- `about`
- `services/salut-visual`
- `services/lents-contacte`
- `services/orto-k`
- `services/eyeglasses`
- `services/sunglasses`
- `services/contact-lenses`
- `services/image-consulting`
- `services/lens-consulting`
- `services/audiologia-centro`
- `services/hearing-test`
- `services/hearing-aids`
- `services/tinnitus-treatment`
- `services/ear-protection`
- `services/technical-aids`
- `services/subvenciones`
- `products/oticon-models`
- `legal/privacy-policy`
- `legal/terms-conditions`
- `legal/cookies-policy`

## Technical Approach

The sitemap is 937 lines of static XML. The edits will be applied using targeted line replacements — updating `lastmod` values and inserting the missing `x-default` line after the `de` hreflang in each URL block. No other content or structure changes.

## After Publishing

Once deployed, in Google Search Console:
1. Go to **Sitemaps** → resubmit `https://www.looptica.com/sitemap.xml`
2. Go to **URL Inspection** → click "Request Indexing" for the specific pages listed in the report (especially the German and English service pages and the legal pages that show "N/A" for last crawled)
