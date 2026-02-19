
## Fix: "Duplicate without user-selected canonical" in Google Search Console

### Problem Summary

Google has found 11 URLs it considers duplicate content with no canonical tag telling it which is the "official" version. There are 4 distinct root causes:

**Cause 1 — Trailing slash inconsistency**
- `/ca` and `/ca/` are treated as two different URLs by Google
- `/en/` and `/en` are both reachable
- The `.htaccess` has no rule to normalize trailing slashes for language-root URLs

**Cause 2 — Query string parameters creating duplicates**
- `https://looptica.com/en/?noredirect=en-GB` is being crawled as a separate page
- `https://looptica.com/cat/orto-k-poblenou-barcelona/?noredirect=ca-ES` is also indexed
- Google treats URLs with query strings as different pages unless told otherwise

**Cause 3 — www vs non-www still leaking**
- The existing `.htaccess` www redirect uses `[NC]` (no case) but does NOT enforce HTTPS simultaneously — meaning `http://looptica.com/` and `https://looptica.com/` are handled by separate rules and Google can still crawl the non-www variants

**Cause 4 — Static canonical in `index.html` conflicts with React canonical**
- `index.html` has `<link rel="canonical" href="https://www.looptica.com/" />` hardcoded
- This is seen by all pages before React loads, so `/ca/services/orto-k` briefly has the wrong canonical pointing to the homepage root

---

### Technical Implementation Plan

#### Fix 1 — `.htaccess`: Strip `?noredirect` query parameters with a redirect

Add a rule at the top of the `mod_rewrite` block (before any other rules) that strips the `noredirect` query parameter and redirects to the clean URL:

```
# Strip noredirect query parameter - prevents duplicate indexing
RewriteCond %{QUERY_STRING} (^|&)noredirect=[^&]* [NC]
RewriteRule ^(.*)$ /$1? [R=301,L,NE]
```

The trailing `?` in the target clears the entire query string, issuing a clean 301 redirect.

#### Fix 2 — `.htaccess`: Normalize trailing slashes for language root paths

Add a rule to redirect `/ca/`, `/en/`, `/es/`, `/de/` (with trailing slash) to their without-slash equivalents consistently, OR the reverse — choose one canonical form. Since `Index.tsx` already sets canonical as `https://www.looptica.com/${language}/` (with trailing slash), we should canonicalize TO the trailing slash version:

Add a rule to redirect `/ca` (no trailing slash) to `/ca/`:

```
# Normalize language root URLs: /ca -> /ca/, /en -> /en/, etc.
RewriteRule ^(en|es|ca|de)$ /$1/ [R=301,L,NE]
```

This ensures `/ca` permanently redirects to `/ca/`, matching the canonical URL set by React.

#### Fix 3 — `.htaccess`: Combine www + HTTPS enforcement into one rule

Replace the existing www redirect rule with a combined www + HTTPS enforcement rule that handles all four cases (http non-www, https non-www, http www) in one shot:

Current rule:
```apache
RewriteCond %{HTTP_HOST} ^looptica\.com [NC]
RewriteRule ^(.*)$ https://www.looptica.com/$1 [L,R=301]
```

Replace with:
```apache
# Force HTTPS + www in one rule
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteCond %{HTTP_HOST} ^(www\.)?looptica\.com$ [NC]
RewriteRule ^(.*)$ https://www.looptica.com/$1 [R=301,L,NE]
```

This catches all four variants: `http://looptica.com`, `https://looptica.com`, `http://www.looptica.com` and redirects them all to `https://www.looptica.com`.

#### Fix 4 — `index.html`: Remove the static canonical tag

The hardcoded `<link rel="canonical" href="https://www.looptica.com/" />` in `index.html` is incorrect for every page except the root homepage. Remove it entirely — React's `react-helmet-async` will inject the correct page-specific canonical for each page.

Also update the static `<title>` tag to a neutral value so Google doesn't use the generic Spanish title for non-Spanish pages.

#### Fix 5 — `Index.tsx`: Fix canonical URL format consistency

The `Index.tsx` canonical is currently set as:
```
https://www.looptica.com/${language}/
```

This means the canonical includes a trailing slash (e.g., `https://www.looptica.com/ca/`). After Fix 2 above normalizes the URL to always have a trailing slash, this will be consistent.

Also add `hreflang` alternate links to the homepage (similar to how `ServiceLayout.tsx` already does this) so Google understands which language version is which.

---

### Files to Change

1. **`public/.htaccess`**
   - Add query string stripping rule for `?noredirect` (and any query params)
   - Add trailing slash normalization for language roots (`/ca` → `/ca/`)
   - Upgrade www redirect to also enforce HTTPS simultaneously

2. **`index.html`**
   - Remove the hardcoded `<link rel="canonical">` tag (line 16)
   - Change the static `<title>` to a neutral fallback like `Looptica`
   - Empty or remove the static `<meta name="description">` (line 12)

3. **`src/pages/Index.tsx`**
   - Add `hreflang` alternate links to the Helmet block (currently only has canonical but no `<link rel="alternate" hreflang="...">`)

---

### Expected Outcome

After deploying and after Google re-crawls:
- `http://looptica.com/ca` → 301 → `https://www.looptica.com/ca/` (one clean redirect chain)
- `https://looptica.com/ca/` → 301 → `https://www.looptica.com/ca/`
- `https://www.looptica.com/ca` → 301 → `https://www.looptica.com/ca/`
- `https://www.looptica.com/en/?noredirect=en-GB` → 301 → `https://www.looptica.com/en/`
- Google will have one clear canonical per page with no conflicting static tag

You should also manually request re-indexing of the 11 affected URLs in Google Search Console after publishing.
