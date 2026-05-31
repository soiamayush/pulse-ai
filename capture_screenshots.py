"""Capture 5 Fiverr gig screenshots (1024x768, 4:3) — Skyline Estates lead capture."""

from __future__ import annotations

import time
import urllib.request
from pathlib import Path

from playwright.sync_api import Page, sync_playwright

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "assets" / "screenshots"
BASE_URL = "http://127.0.0.1:5173"
VIEWPORT = {"width": 1024, "height": 768}

DEMO_LEADS = [
    {
        "id": "demo-1",
        "name": "Sarah Chen",
        "email": "sarah.chen@gmail.com",
        "location": "Austin, TX",
        "intent": "buy",
        "score": 85,
        "createdAt": "2026-05-30T10:24:00.000Z",
        "status": "new",
    },
    {
        "id": "demo-2",
        "name": "Marcus Rivera",
        "email": "marcus@email.com",
        "location": "Denver, CO",
        "intent": "viewing",
        "score": 90,
        "createdAt": "2026-05-30T14:10:00.000Z",
        "status": "contacted",
    },
    {
        "id": "demo-3",
        "name": "Emily Watson",
        "email": "emily.w@outlook.com",
        "location": "Miami, FL",
        "intent": "rent",
        "score": 65,
        "createdAt": "2026-05-31T09:05:00.000Z",
        "status": "qualified",
    },
]

OUTPUTS = [
    "01-real-estate-site-with-chat.png",
    "02-buyer-intent-captured.png",
    "03-contact-details-collected.png",
    "04-inquiry-confirmed.png",
    "05-property-inquiries-dashboard.png",
]


def wait_for_server(url: str, timeout: float = 30) -> bool:
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            urllib.request.urlopen(url, timeout=2)
            return True
        except Exception:
            time.sleep(0.4)
    return False


def save(page: Page, filename: str) -> None:
    path = OUT / filename
    page.screenshot(path=str(path), full_page=False)
    print(f"Saved {path}")


def open_chat(page: Page) -> None:
    page.goto(BASE_URL, wait_until="networkidle")
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(800)
    page.get_by_label("Open chat").click()
    page.wait_for_timeout(1500)


def send_message(page: Page, text: str) -> None:
    field = page.locator(".chat-input-form input")
    field.fill(text)
    page.locator(".chat-input-form button[type='submit']").click()
    page.wait_for_timeout(2000)


def seed_dashboard_leads(page: Page) -> None:
    page.goto(BASE_URL, wait_until="networkidle")
    page.evaluate(
        "(leads) => localStorage.setItem('skyline_leads', JSON.stringify(leads))",
        DEMO_LEADS,
    )


def capture_all() -> None:
    if not wait_for_server(BASE_URL):
        raise RuntimeError(f"Dev server not running at {BASE_URL}. Run: npm run dev")

    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob("*.png"):
        old.unlink()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport=VIEWPORT, device_scale_factor=1)

        open_chat(page)
        save(page, OUTPUTS[0])

        page.get_by_role("button", name="Buy a home").click()
        page.wait_for_timeout(2400)
        save(page, OUTPUTS[1])

        page.wait_for_timeout(1200)
        send_message(page, "Sarah Chen")
        page.wait_for_timeout(1000)
        save(page, OUTPUTS[2])

        send_message(page, "sarah.chen@gmail.com")
        page.wait_for_timeout(1200)
        send_message(page, "Austin, TX")
        page.wait_for_timeout(2500)
        save(page, OUTPUTS[3])

        seed_dashboard_leads(page)
        page.goto(f"{BASE_URL}/dashboard", wait_until="networkidle")
        page.wait_for_timeout(1200)
        save(page, OUTPUTS[4])

        browser.close()

    print("\nDone - 5 Fiverr-ready screenshots (1024x768):\n")
    for i, name in enumerate(OUTPUTS, 1):
        print(f"  {i}. {OUT / name}")


if __name__ == "__main__":
    capture_all()
