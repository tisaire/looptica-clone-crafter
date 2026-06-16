## Redirect `/ca/orto-k-poblenou-barcelona/` to Orto-K service page

Add a dual-layer redirect for the legacy Catalan Orto-K URL to the new language-prefixed route.

### Files to modify

1. **public/.htaccess**
   - Add server-side 301 redirect rule in the "Orto-K" section:
     `RewriteRule ^ca/orto-k-poblenou-barcelona/?$ /ca/services/orto-k [R=301,L,NE]`
   - With the standard `looptica.com` host condition above it.

2. **src/components/RedirectHandler.tsx**
   - Add client-side fallback entries in the `redirects` mapping:
     - `'/ca/orto-k-poblenou-barcelona': '/ca/services/orto-k'`
     - `'/ca/orto-k-poblenou-barcelona/': '/ca/services/orto-k'`

### Notes
- Follows the existing dual-layer pattern already used for other legacy Orto-K URLs (ES, EN, DE).
- The `.htaccess` rule handles server-side 301s; `RedirectHandler.tsx` catches any paths that reach the SPA fallback.