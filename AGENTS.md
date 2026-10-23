# Architecture rules

- Keep the homepage audiology introduction and its section anchor in the existing Audiology component; navigation and footer link directly to the language-prefixed centre page so the centre is discoverable without scrolling through individual services.
- Keep the audiology centre's six service links in its existing page, using language-prefixed destinations and the shared ServiceLayout; this provides a complete service directory without new routes or duplicated layouts.
- Keep shared hero backgrounds readable: leave open space behind the centred headline (no signage lettering under the title), and pass a square `imageMobile` crop to ServiceLayout whenever the desktop hero is a wide banner, so phones show the subject instead of an over-cropped strip.
- Keep each legal page's single H1 outside ScrollReveal and its sanitized document headings subordinate to it, so the main heading is visible independently of animation.
- Keep a service page's specialist introduction immediately after its opening text, above the detailed sections, so the fitting professional is seen before the reader scrolls into service detail.
