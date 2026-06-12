## Goal

Produce a downloadable Orto-K SEO performance report covering **June 2, 2026 → today (June 12, 2026)** for the three Orto-K pages:

- `https://looptica.com/es/services/orto-k`
- `https://looptica.com/ca/services/orto-k`
- `https://looptica.com/en/services/orto-k`

Delivered as two artifacts in `/mnt/documents`:
- `orto-k-seo-report.pdf` — narrative + charts + tables
- `orto-k-seo-report.csv` — raw daily rows for the user's own analysis

No changes to the site code.

## Data sources

**Google Search Console** (connected, via gateway `searchanalytics/query`)
- Property: `https://looptica.com/`
- Date range A: `2026-06-02 → 2026-06-12` (post-change)
- Date range B (baseline): `2026-05-22 → 2026-06-01` (11 days pre-change, same length)
- Pull 4 slices for each window:
  1. By **page** (filter: page CONTAINS `/services/orto-k`) — totals per URL
  2. By **query** (same page filter) — top queries driving impressions/clicks
  3. By **date** (same page filter) — daily trend
  4. By **query + page** — to attribute queries to the right language URL

**Semrush** (built-in tools, ES database)
- `page_analysis` on each of the 3 URLs — current ranking keywords + positions
- `keyword_research` on `ortok`, `orto-k`, `ortoqueratología`, `ortho-k`, `orto k barcelona` for context (volume, KDI)
- Note: latest Semrush snapshot is May 15, so this section is labeled "keyword universe & current positions" rather than "movement". Real movement comes from GSC's avg-position delta.

## Report structure (PDF)

1. **Executive summary** — 4-tile KPIs: clicks, impressions, CTR, avg position. Each shows post-change value + delta vs baseline.
2. **Daily trend chart** — impressions & clicks per day, June 2 onward, with a vertical marker on June 2.
3. **Per-URL breakdown table** — one row per `/es`, `/ca`, `/en` URL: clicks, impressions, CTR, avg position, delta vs baseline.
4. **Top queries table** (top 20 by impressions, post-change window) — query, page, clicks, impressions, CTR, avg position.
5. **New queries since June 2** — queries with impressions in window A but zero in window B.
6. **Lost queries** — queries with impressions in window B but zero in window A.
7. **Semrush keyword universe** — current ranking keywords per URL (positions, volume, KDI) + ranking targets not yet captured.
8. **Methodology & caveats** — GSC 2-day data lag, short window, Semrush snapshot date.

## Technical approach

```text
1. Python script /tmp/orto_k_report.py
   ├── GSC fetch via curl-equivalent (requests) to connector-gateway
   │     POST /webmasters/v3/sites/{encoded}/searchAnalytics/query
   │     ├── 4 calls × 2 windows = 8 GSC calls
   │     └── filter: { dimension: page, operator: contains, expression: /services/orto-k }
   ├── Semrush via the agent's built-in tools (called from chat, not script)
   │     └── results pasted into the script as a small JSON literal
   ├── Build pandas DataFrames + compute deltas
   ├── Write CSV (daily rows + per-URL summary + queries) → /mnt/documents/orto-k-seo-report.csv
   └── Render PDF with reportlab (Platypus) + matplotlib chart embedded as PNG
2. QA: pdftoppm the PDF, view every page, fix any layout issues, re-render
3. Emit <presentation-artifact> tags for PDF and CSV
```

Auth headers for GSC calls:
- `Authorization: Bearer $LOVABLE_API_KEY`
- `X-Connection-Api-Key: $GOOGLE_SEARCH_CONSOLE_API_KEY`

## Caveats to surface in the report

- GSC has a 2–3 day data freshness lag, so June 10–12 may be partial.
- 11-day windows are short; treat deltas as directional, not statistically significant.
- Semrush's latest snapshot (May 15) predates June 2, so its data reflects pre-change positions only — use GSC's avg-position field for actual movement.
- If GSC returns no rows for the Orto-K pages, the report will say so explicitly rather than fabricate data.

## What I will NOT do

- No code changes to the site.
- No new in-app dashboard.
- No Search Console property reverification (already verified).
- No attempt to backfill missing Semrush data — the May 15 snapshot is the latest available.
