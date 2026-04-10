# Denji's Bar — Landing Page

![HTML5](https://img.shields.io/badge/HTML5-semantic-cc0000?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-modular-ff6b00?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JS-ES%20Modules-ffd700?style=flat-square&logo=javascript)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-0a0a0a?style=flat-square&logo=github)

## Live Demo

**[alex20197.github.io/denji-bar](https://alex20197.github.io/denji-bar/)**

> Part of my frontend portfolio. View more projects at [github.com/alex20197](https://github.com/alex20197)

---

A production-ready landing page for **Denji's Bar**, an anime-themed (Chainsaw Man inspired) cocktail bar located in Kyiv, Ukraine. Built with vanilla HTML5, CSS3, and modern JavaScript modules — no frameworks, no build step required.

---

## Project Overview

- **Type:** Single-page marketing site (landing page)
- **Stack:** Semantic HTML5 · Modular CSS3 · ES Modules JavaScript
- **Language:** Ukrainian UI · English code/comments
- **Browser support:** All evergreen browsers (Chrome, Firefox, Safari, Edge)
- **Build:** None — open `index.html` directly or serve as static files

The site features:
- Animated hero with manga-inspired decoration (kanji, speed lines, panels)
- About section with feature list and stats
- Cocktail/food menu grid (6 themed items)
- Gallery placeholder grid with hover overlays
- Contacts block with animated map placeholder and opening hours
- Floating chainsaw-shaped contact button (animated chain, blood drip, hover wobble)

---

## Project Structure

```
denji-bar/
├── index.html                          # Semantic HTML entry point
├── README.md                           # This file
│
├── css/
│   ├── reset.css                       # Modern CSS reset
│   ├── variables.css                   # Design tokens (colors, fonts, spacing)
│   ├── base.css                        # Body, typography, focus, motion
│   ├── layout.css                      # Containers, sections, grid, scroll-reveal
│   └── components/
│       ├── nav.css                     # Top navigation bar
│       ├── hero.css                    # Hero + animated background + buttons
│       ├── about.css                   # About section + feature card
│       ├── menu.css                    # Menu grid + cards + badges
│       ├── gallery.css                 # Gallery grid + hover overlay
│       ├── contacts.css                # Contacts info + map placeholder
│       ├── footer.css                  # Footer logo + social
│       └── chainsaw-btn.css            # Floating chainsaw button
│
├── js/
│   ├── main.js                         # Entry point — bootstraps modules
│   └── modules/
│       ├── scroll-reveal.js            # IntersectionObserver-based reveal
│       ├── nav-scroll.js               # Toggles .is-scrolled on nav
│       └── chainsaw-vibration.js       # Hover wobble for floating button
│
└── assets/
    ├── images/                         # (placeholder — add og-cover.jpg, etc.)
    └── icons/                          # (placeholder — add favicon.svg, apple-touch-icon.png)
```

### Why this structure?

- **`reset.css → variables.css → base.css → layout.css → components/*`** — strict cascade order: resets first, then design tokens, then global rules, then layout helpers, then component-scoped styles. Each component file owns its own responsive breakpoints.
- **BEM-like class naming** (`menu-card__title`, `menu-card--delay-1`) keeps selectors flat, predictable, and free of specificity wars.
- **ES Modules** in `js/modules/` keep each interaction (scroll-reveal, nav-scroll, chainsaw vibration) in isolation. `main.js` is the only entry point linked from HTML.

---

## How to Run Locally

The project is fully static — you can open `index.html` directly **OR** serve it via any local HTTP server.

> **Note:** because `main.js` uses `type="module"`, modern browsers require it to be served over `http://` (not `file://`). Use one of the methods below.

### Option 1 — Python (built-in on macOS/Linux)

```bash
cd denji-bar
python3 -m http.server 8000
```
Open <http://localhost:8000> in your browser.

### Option 2 — Node.js (`npx`)

```bash
cd denji-bar
npx serve .
```

### Option 3 — VS Code Live Server

Install the **Live Server** extension, right-click `index.html` → *Open with Live Server*.

---

## How to Deploy

This is a static site — deploy to any static host without modification.

### GitHub Pages
1. Push the `denji-bar/` folder to a repo.
2. Settings → Pages → Source: `main` branch, `/` (root) — or `/denji-bar` if nested.
3. Wait for the build, visit the generated URL.

### Vercel
```bash
cd denji-bar
npx vercel
```
Accept defaults — Vercel detects the static folder automatically.

### Netlify
- Drag the `denji-bar/` folder onto <https://app.netlify.com/drop>, **or**
- Connect a Git repo and set the publish directory to `denji-bar`.

### Cloudflare Pages
- Connect a Git repo, build command empty, output directory `denji-bar`.

---

## How to Modify Content

| What you want to change          | File                                                  |
|----------------------------------|-------------------------------------------------------|
| Page text (Ukrainian)            | `index.html`                                          |
| Brand colors / fonts / spacing   | `css/variables.css`                                   |
| Section padding / containers     | `css/layout.css`                                      |
| Hero animation timings           | `css/components/hero.css`                             |
| Menu items (add / remove)        | `index.html` → `<section id="menu">`                  |
| Menu card styles                 | `css/components/menu.css`                             |
| Gallery placeholder colors       | `css/components/gallery.css` (`.gallery__block--*`)   |
| Contact details / hours          | `index.html` → `<section id="contacts">` + JSON-LD    |
| Floating button label / shape    | `index.html` + `css/components/chainsaw-btn.css`      |
| SEO meta tags / structured data  | `index.html` `<head>`                                 |

### Adding a new menu item

In `index.html`, copy an existing `<article class="menu-card">` block inside `.menu__grid` and edit the badge type (`menu-card__badge--cocktail | --food | --special`), title, description, price, and volume. Optionally add `menu-card--delay-1/2/3` for staggered scroll-reveal.

### Replacing placeholder assets

Drop real assets into `assets/images/` and `assets/icons/`:
- `assets/images/og-cover.jpg` — referenced by Open Graph / Twitter Card
- `assets/icons/favicon.svg` — referenced by `<link rel="icon">`
- `assets/icons/apple-touch-icon.png` — referenced by `<link rel="apple-touch-icon">`

The HTML already references these paths, so once the files exist they'll just work.

---

## Tech Stack Explanation

| Layer        | Choice                              | Why                                                             |
|--------------|-------------------------------------|-----------------------------------------------------------------|
| Markup       | Semantic HTML5                      | Native a11y, SEO, no framework lock-in                          |
| Styling      | Plain CSS3 with custom properties   | Zero build step, instant edits, ~ten files for clarity          |
| Naming       | BEM-like                            | Predictable, low specificity, easy to scale                     |
| Fonts        | Google Fonts (preconnect + swap)    | No render-blocking, free, brand-appropriate display fonts       |
| JS           | ES Modules                          | Native browser modules, no bundler, tree-shake-friendly         |
| Animations   | CSS keyframes + IntersectionObserver | Hardware-accelerated, respects `prefers-reduced-motion`         |
| Schema       | JSON-LD `BarOrPub`                  | Rich results in Google for restaurants/bars                     |

---

## Accessibility Notes

- All interactive elements have `aria-label` or visible text labels.
- Decorative elements (kanji, gradients, emoji icons) are marked `aria-hidden="true"`.
- Heading hierarchy is preserved: `h1` (hero) → `h2` (sections) → `h3` (menu cards).
- Focus-visible outlines are styled in `base.css` for keyboard users.
- `@media (prefers-reduced-motion: reduce)` disables animations for sensitive users.
- Sections use `aria-labelledby` linking to their visible headings.
- The `<address>` element wraps the contact info in the contacts section.

---

## Performance Notes

- Google Fonts uses `preconnect` + `display=swap` (no render-blocking).
- All CSS is split into small files — easily cacheable individually.
- JS is loaded as a deferred module at the end of `<body>`.
- Animations use `transform` / `opacity` to avoid layout thrashing.
- `requestAnimationFrame` throttles the scroll handler in `nav-scroll.js`.

---

## License

Project content (text, design) © 2025 Denji's Bar. *Chainsaw Man* is © Tatsuki Fujimoto / Shueisha — this is a fan-themed concept site for educational/demo purposes.
