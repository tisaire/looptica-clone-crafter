"""Live regression tests; run with python3 -m unittest discover -s tests -p '*_test.py'."""
import unittest
from pathlib import Path
from xml.etree import ElementTree

from playwright.sync_api import sync_playwright


class ContactLensRedirectTests(unittest.TestCase):
    def test_legacy_service_keeps_language_and_opens_canonical_page(self):
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1280, "height": 1800})
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            for language in ("ca", "es", "en", "de"):
                for suffix in ("", "/"):
                    with self.subTest(language=language, suffix=suffix):
                        page.goto(f"http://localhost:8080/{language}/services/contact-lenses{suffix}")
                        destination = f"http://localhost:8080/{language}/services/lents-contacte"
                        page.wait_for_url(destination)
                        heading = page.locator("main h1")
                        heading.wait_for()
                        self.assertEqual(page.url, destination)
                        self.assertNotEqual(heading.inner_text(), "404")
                        canonical = page.locator('link[rel="canonical"]')
                        self.assertEqual(canonical.get_attribute("href"),
                                         f"https://looptica.com/{language}/services/lents-contacte")
            self.assertEqual(errors, [])
            browser.close()

    def test_sitemap_has_only_canonical_contact_lens_destinations(self):
        root = ElementTree.parse(Path(__file__).resolve().parents[1] / "public/sitemap.xml").getroot()
        ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        locations = [node.text for node in root.findall("s:url/s:loc", ns)]
        for language in ("ca", "es", "en", "de"):
            with self.subTest(language=language):
                self.assertNotIn(f"https://looptica.com/{language}/services/contact-lenses", locations)
                self.assertEqual(locations.count(f"https://looptica.com/{language}/services/lents-contacte"), 1)


if __name__ == "__main__":
    unittest.main()