# SPCE External Swipe Gallery — Setup

## Repository structure

```text
SPCE/
├── README.md
├── docs/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── images/
    ├── HOME.png
    ├── REALDAY.png
    ├── UNLOAD.png
    ├── FIX.png
    ├── INSIGHTS.png
    ├── COMFORTCIRCLE.png
    ├── ARNOTES.png
    ├── STREAK.png
    └── WIDGET.png
```

The `docs/` and `images/` folders are deliberately separate.

## GitHub Pages

Because `docs/index.html` reads images from `../images/`, publish the repository **from the repository root**, not from `/docs`.

1. Copy `README.md`, `docs/`, and `images/` into the root of the SPCE repository.
2. Push to GitHub.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select your main branch.
6. Select **/(root)** as the publishing folder.
7. Save.

The gallery will then be available at:

https://eimaanrdrie.github.io/SPCE/docs/

The README links directly to that URL.

## Interaction

- Swipe horizontally on mobile
- Trackpad / horizontal scroll on desktop
- Previous / next arrows
- Keyboard left / right arrows
- Pagination dots
- Fullscreen mode

No external API or JavaScript framework is required.
