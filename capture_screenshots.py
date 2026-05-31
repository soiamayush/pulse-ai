"""Capture 5 showcase screenshots for PulseAI lead capture site."""

from __future__ import annotations

import time
import urllib.request
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "assets" / "screenshots"
BASE_URL = "http://127.0.0.1:5173"
VIEWPORT = {"width": 1440, "height": 900}


def wait_for_server(url: str, timeout: float = 30) -> bool:
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            urllib.request.urlopen(url, timeout=2)
            return True
        except Exception:
            time.sleep(0.4)
    return False


def scroll_to(page, selector: str) -> None:
    page.locator(selector).scroll_into_view_if_needed()
    page.wait_for_timeout(600)


def capture_all() -> None:
    if not wait_for_server(BASE_URL):
        raise RuntimeError(
            f"Dev server not running at {BASE_URL}. Run: npm run dev"
        )

    OUT.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport=VIEWPORT, device_scale_factor=2)

        # 1 — Hero landing
        page.goto(BASE_URL, wait_until="networkidle")
        page.wait_for_timeout(1200)
        page.screenshot(path=str(OUT / "01-hero-landing.png"))
        print(f"Saved {OUT / '01-hero-landing.png'}")

        # 2 — Features grid
        scroll_to(page, "#features")
        page.screenshot(path=str(OUT / "02-features-grid.png"))
        print(f"Saved {OUT / '02-features-grid.png'}")

        # 3 — How it works + dashboard banner
        scroll_to(page, "#how-it-works")
        page.screenshot(path=str(OUT / "03-how-it-works.png"))
        print(f"Saved {OUT / '03-how-it-works.png'}")

        # 4 — Pricing plans
        scroll_to(page, "#plans")
        page.screenshot(path=str(OUT / "04-pricing-plans.png"))
        print(f"Saved {OUT / '04-pricing-plans.png'}")

        # 5 — AI chat widget (lead capture)
        page.goto(BASE_URL, wait_until="networkidle")
        page.wait_for_timeout(800)
        page.get_by_label("Open chat").click()
        page.wait_for_timeout(900)
        page.screenshot(path=str(OUT / "05-ai-chat-widget.png"))
        print(f"Saved {OUT / '05-ai-chat-widget.png'}")

        browser.close()

    print(f"\nDone — 5 screenshots in {OUT}")


if __name__ == "__main__":
    capture_all()
