"""Resize user screenshots to Fiverr spec: 1024x768 (4:3)."""

from pathlib import Path

from PIL import Image

FOLDER = Path(__file__).resolve().parent / "assets" / "screenshots"
ORIGINALS = FOLDER / "originals"
TARGET = (1024, 768)

# source filename -> fiverr output (upload order)
MAPPING = [
    ("Screenshot (1132).png", "01-real-estate-site-with-chat.png"),
    ("Screenshot (1136).png", "02-chat-lead-capture.png"),
    ("Screenshot (1133).png", "03-how-it-works.png"),
    ("Screenshot (1139).png", "04-client-testimonials.png"),
    ("Screenshot (1138).png", "05-property-inquiries-dashboard.png"),
]


def fit_cover(img: Image.Image, width: int, height: int) -> Image.Image:
    w, h = img.size
    scale = max(width / w, height / h)
    new_w, new_h = int(w * scale), int(h * scale)
    resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - width) // 2
    top = (new_h - height) // 2
    return resized.crop((left, top, left + width, top + height))


def main() -> None:
    ORIGINALS.mkdir(exist_ok=True)

    for old in FOLDER.glob("0*.png"):
        old.unlink()

    for src_name, out_name in MAPPING:
        src = ORIGINALS / src_name
        if not src.exists():
            src = FOLDER / src_name
        if not src.exists():
            raise FileNotFoundError(f"Missing {src_name}")

        if src.parent == FOLDER:
            dest = ORIGINALS / src_name
            if not dest.exists():
                src.rename(dest)
            src = dest

        img = Image.open(src).convert("RGB")
        fitted = fit_cover(img, *TARGET)
        fitted.save(FOLDER / out_name, "PNG", optimize=True)
        print(f"{src_name} -> {out_name} ({TARGET[0]}x{TARGET[1]})")

    print(f"\nDone. Upload from {FOLDER} (first file = thumbnail)")


if __name__ == "__main__":
    main()
