## Add looptica.com as the Primary Search Console Property

The verification went to the lovable.app domain, but the production site is `https://looptica.com`. Add it as a separate, verified Search Console property and submit its sitemap. Google Search Console treats each origin as its own property — there is no "primary" toggle, so we register `looptica.com` alongside (and you can ignore/remove the lovable.app one later if desired).

### Steps

1. **Reuse the existing meta tag** — `index.html` already contains `<meta name="google-site-verification" content="-nMtu4oyn2pnGw1ABZfXtfdPfFe8sEAp-EyvMhJ_vFI" />`. The same site is served at `looptica.com`, so the tag will validate that origin too. No code changes required.
2. **Get a new META token for looptica.com** — Google issues a per-origin token. POST `/siteVerification/v1/token` with identifier `https://looptica.com/`.
3. **Add the new token to `index.html`** alongside the existing one (Google accepts multiple verification meta tags). User publishes.
4. **Verify ownership** — POST `/siteVerification/v1/webResource?verificationMethod=META` for `https://looptica.com/`.
5. **Register property** — PUT `/webmasters/v3/sites/https%3A%2F%2Flooptica.com%2F`.
6. **Submit sitemap** — PUT `/webmasters/v3/sites/.../sitemaps/https%3A%2F%2Flooptica.com%2Fsitemap.xml`.
7. **Optional** — also submit a `www.looptica.com` property if that hostname is canonical.

### Notes

- Step 3 requires a publish before step 4 succeeds; I'll pause and ask you to publish, then continue.
- If you want, after looptica.com is verified I can also unregister the lovable.app property so only the production domain shows in Search Console.