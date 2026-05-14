## Complete Google Search Console Setup

Now that the site is published with the verification meta tag live, run the remaining Search Console steps via the connector gateway.

### Steps

1. **Verify ownership** — POST to `/siteVerification/v1/webResource?verificationMethod=META` with identifier `https://looptica-clone-crafter.lovable.app/`. Google fetches the homepage and confirms the `google-site-verification` meta tag.
2. **Register the site in Search Console** — PUT `/webmasters/v3/sites/https%3A%2F%2Flooptica-clone-crafter.lovable.app%2F` so the property appears in the user's GSC property list.
3. **Submit the sitemap** — PUT `/webmasters/v3/sites/.../sitemaps/https%3A%2F%2Flooptica-clone-crafter.lovable.app%2Fsitemap.xml`.
4. **Report results** — confirm verification, registration, and sitemap submission. If verification fails (e.g. publish not propagated), retry once and otherwise surface the exact Google error.

### Notes

- No code changes required; all actions are external API calls.
- If publish hasn't propagated yet and verification fails with `failedToFindMetaTag`, I'll wait briefly and retry once before reporting back.