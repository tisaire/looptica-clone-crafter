Add an external link to ortok-barcelona.com at the bottom of the Orto-K service page, just after the FAQ section and before the closing of ServiceLayout.

Changes to `src/pages/services/OrtoK.tsx`:
1. Add a new `externalLink` content block with translations for all 4 languages (EN, ES, CA, DE).
2. Insert a new `<ScrollReveal>` section after the FAQs containing the external link styled as a card or highlighted text block.
3. Use a standard `<a>` tag (not `<Link>`) with `href="https://ortok-barcelona.com"`, `target="_blank"`, and `rel="noopener noreferrer"`.

Translations:
- EN: "More information: ortok barcelona"
- ES: "Más información: ortok barcelona"
- CA: "Més informació: ortok barcelona"
- DE: "Weitere Informationen: ortok barcelona"