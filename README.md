# Denji's Bar — Landing Page

![HTML5](https://img.shields.io/badge/HTML5-semantic-cc0000?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-modular-ff6b00?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JS-ES%20Modules-ffd700?style=flat-square&logo=javascript)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-0a0a0a?style=flat-square&logo=github)

## Live Demo

**[alex20197.github.io/denji-bar](https://alex20197.github.io/denji-bar/)**

> Part of my frontend portfolio. View more projects at [github.com/alex20197](https://github.com/alex20197)

---

A production-ready single-page landing site for **Denji's Bar** — an anime-themed (Chainsaw Man) cocktail bar in Kyiv. Built with vanilla HTML5, CSS3, and ES Modules JavaScript. No frameworks, no build step.

---

## Project Overview

- **Type:** Single-page marketing site (landing page)
- **Stack:** Semantic HTML5 · Modular CSS3 · ES Modules JavaScript
- **Language:** Ukrainian UI · English code/comments
- **Build:** None — serve as static files or open `index.html` directly

### Implemented features

| Feature | How it works |
|---|---|
| **Scroll reveal** | `IntersectionObserver` adds `.is-visible` to `.reveal`, `.reveal--left`, `.reveal--right`; falls back to showing everything if IO not supported |
| **Nav scroll** | `requestAnimationFrame`-throttled scroll handler toggles `.is-scrolled` on `<header>` after 70px; activates logo pulse animation |
| **Active nav link** | Second `IntersectionObserver` in `nav-scroll.js` watches all `<section id>` elements and adds `.is-active` to the matching `<a>` |
| **Burger menu** | Full accessible mobile nav: `aria-expanded`, `aria-controls`, ESC key, click-outside, link-click close, body scroll lock |
| **Count-up animation** | Stats (40+, 2, 18+) animate from 0 via `requestAnimationFrame` with ease-out cubic on viewport entry |
| **Parallax** | `--parallax-offset` CSS custom property set by JS on scroll; `.about::before` background text drifts ±35px |
| **Scroll progress bar** | 3px fixed bar at top of page; `--progress` custom property drives `width` |
| **Page load fade-in** | `body` starts at `opacity: 0`; `.is-loaded` class added after all modules init |
| **Chainsaw button vibration** | Hover triggers alternating `.is-vibrating-left` / `.is-vibrating-right` CSS classes (8 steps × 45ms) |
| **Chainsaw button hide** | `IntersectionObserver` adds `.is-hidden` (opacity 0, pointer-events none) when `#contacts` enters viewport |
| **Flip cards** | Click on a menu card flips it (rotateY 180°); back face shows a photo placeholder; ✕ button flips back to front |
| **Ripple effect** | Click on `.footer__social-link` injects `<span class="ripple">`, removed on `animationend` |
| **Scroll hint fade** | `.hero__scroll-hint` gets `.is-hidden` after 80px scroll |
| **prefers-reduced-motion** | `base.css` overrides all animation/transition durations to `0.01ms` for sensitive users |

---

## Project Structure

```
denji-bar/
├── index.html                        # Semantic HTML entry point, all sections
├── README.md                         # This file
├── CONTRIBUTING.md                   # Development guide
│
├── css/
│   ├── reset.css                     # Modern CSS reset (box-sizing, a11y base)
│   ├── variables.css                 # Design tokens — all CSS custom properties
│   ├── base.css                      # Body, typography, scroll progress bar, focus, motion
│   ├── layout.css                    # Containers, sections, grid, scroll-reveal classes
│   └── components/
│       ├── nav.css                   # Top nav bar + burger button + mobile menu
│       ├── hero.css                  # Hero section, speed lines, kanji, buttons, scroll hint
│       ├── about.css                 # About section, stats, feature card, parallax bg text
│       ├── menu.css                  # Menu grid, cards, badges with pulsing dot
│       ├── flip-card.css             # Flip card 3D transform, back face, photo placeholder
│       ├── gallery.css               # Gallery grid, slide-up hover overlay, item counters
│       ├── contacts.css              # Contact info, hours grid, map placeholder, scanlines
│       ├── footer.css                # Footer, sweep animation, neon flicker, ripple
│       └── chainsaw-btn.css          # Floating chainsaw button, chain animation, blood drip
│
├── js/
│   ├── main.js                       # Entry point — imports and calls all init functions
│   └── modules/
│       ├── scroll-reveal.js          # IntersectionObserver reveal on scroll
│       ├── nav-scroll.js             # Nav state + scroll hint + active link tracking
│       ├── burger.js                 # Mobile burger menu toggle (aria, ESC, outside click)
│       ├── chainsaw-vibration.js     # Hover wobble animation on chainsaw button
│       ├── chainsaw-visibility.js    # Hide chainsaw button when #contacts is visible
│       ├── count-up.js               # Animate stat numbers 0 → target on viewport entry
│       ├── parallax.js               # Scroll-driven --parallax-offset for about bg text
│       ├── scroll-progress.js        # Inject and drive the top scroll-progress bar
│       ├── ripple.js                 # Click ripple on footer social links
│       └── flip-card.js              # Click-to-flip menu cards, close button handler
│
└── assets/
    ├── images/                       # Add og-cover.jpg for Open Graph / Twitter Card
    └── icons/                        # Add favicon.svg and apple-touch-icon.png
```

---

## Local Development

Because `main.js` uses `type="module"`, browsers require the page to be served over `http://` (not `file://`). Use any of the options below.

### Option 1 — Python (built-in on macOS/Linux)

```bash
cd denji-bar
python3 -m http.server 8000
# Open http://localhost:8000
```

### Option 2 — Node.js (no install needed)

```bash
cd denji-bar
npx serve .
# Follow the URL printed in the terminal
```

### Option 3 — VS Code Live Server

Install the **Live Server** extension → right-click `index.html` → *Open with Live Server*.

---

## Deployment

### GitHub Pages (current)

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages → Source** → select branch `main`, folder `/` (root).
3. Wait ~1 minute for the build. The live URL will be `https://<username>.github.io/<repo>/`.
4. Update the canonical URL, Open Graph, Twitter Card, and JSON-LD URLs in `index.html` to match.

### Vercel

```bash
cd denji-bar
npx vercel
```

Accept all defaults — Vercel detects the static folder automatically.

### Netlify

- Drag the `denji-bar/` folder onto <https://app.netlify.com/drop>, **or**
- Connect a Git repo and set publish directory to `denji-bar`.

---

## How to Edit Content

| What to change | File |
|---|---|
| Page text (Ukrainian) | `index.html` |
| Brand colors / fonts / spacing | `css/variables.css` |
| Section padding / containers | `css/layout.css` |
| Hero animation timings | `css/components/hero.css` |
| Add / remove menu items | `index.html` → `<section id="menu">` |
| Menu card styles | `css/components/menu.css` |
| Gallery placeholder colors | `css/components/gallery.css` → `.gallery__block--*` |
| Contact details / hours | `index.html` → `<section id="contacts">` + JSON-LD block |
| Floating button label / shape | `index.html` + `css/components/chainsaw-btn.css` |
| SEO meta / structured data | `index.html` `<head>` |
| Social links in footer | `index.html` → `<footer>` → `.footer__social` |

### Adding a new menu card

Copy an existing `<article class="menu-card">` block inside `.menu__grid` in `index.html`. Edit:

- `menu-card__badge--cocktail` / `--food` / `--special` — badge type and color
- `menu-card__title` — name of the item
- `menu-card__jp` — Japanese subtitle (optional)
- `menu-card__desc` — description
- `menu-card__price` — price in UAH
- `menu-card__volume` — volume / portion size
- Optionally add `menu-card--delay-1` / `--delay-2` / `--delay-3` for staggered scroll-reveal

### Adding placeholder assets

Drop real files into `assets/` — the HTML already references these paths:

- `assets/images/og-cover.jpg` — Open Graph / Twitter Card image (1200×630px recommended)
- `assets/icons/favicon.svg` — browser tab icon
- `assets/icons/apple-touch-icon.png` — iOS home screen icon (180×180px)

---

## CSS Architecture

### Load order (strictly maintained)

```
reset.css       → zero browser defaults, box-sizing
variables.css   → all CSS custom properties (:root)
base.css        → body, typography, global helpers
layout.css      → section wrapper, container, grid, scroll-reveal
components/*.css → one file per UI component
```

Each component CSS file is self-contained and owns its own `@media` breakpoints. No component should reference another component's selectors.

### CSS Custom Properties

All design tokens live in `css/variables.css` and are consumed across component files. Two additional properties are written at runtime by JavaScript modules.

**Color palette**

| Variable | Value | Used for |
|---|---|---|
| `--color-blood` | `#CC0000` | Primary accent — borders, badges, buttons |
| `--color-dark-blood` | `#8B0000` | Deep shadow on hero title |
| `--color-fire` | `#FF6B00` | Secondary accent — hover states, labels |
| `--color-yellow` | `#FFD700` | Logo, prices, stats |
| `--color-dark` | `#0A0A0A` | Page background |
| `--color-dark-2` | `#111111` | Alternate section background |
| `--color-dark-3` | `#1A1A1A` | Card backgrounds |
| `--color-white` | `#F0F0F0` | Body text |
| `--color-grey` | `#777777` | Secondary text, labels |
| `--color-blood-rgb` | `204, 0, 0` | Used in `rgba()` for transparent overlays |
| `--color-fire-rgb` | `255, 107, 0` | Used in `rgba()` for transparent overlays |
| `--color-yellow-rgb` | `255, 215, 0` | Used in `rgba()` for transparent overlays |
| `--color-white-rgb` | `240, 240, 240` | Used in `rgba()` for transparent overlays |
| `--color-dark-rgb` | `10, 10, 10` | Used in `rgba()` for nav background |

**Typography**

| Variable | Value | Role |
|---|---|---|
| `--font-display` | `'Bebas Neue'` | Headings, logo, prices, counters |
| `--font-accent` | `'Oswald'` | Nav links, badges, labels, footer |
| `--font-body` | `'Rajdhani'` | Body text, descriptions |
| `--fz-xs` | `0.68rem` | Badge text |
| `--fz-sm` | `0.78rem` | Section labels |
| `--fz-md` | `0.95rem` | Button text, descriptions |
| `--fz-lg` | `1.08rem` | Body paragraphs |
| `--fz-xl` | `1.45rem` | Gallery labels |

**Spacing**

| Variable | Value |
|---|---|
| `--space-xs` | `0.5rem` |
| `--space-sm` | `1rem` |
| `--space-md` | `1.5rem` |
| `--space-lg` | `2.5rem` |
| `--space-xl` | `5rem` |
| `--space-xxl` | `8rem` |
| `--container-max` | `1200px` |
| `--section-padding-y` | `8rem` |
| `--section-padding-x` | `3rem` |

**Motion**

| Variable | Value | Used for |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Gallery overlay slide |
| `--transition-fast` | `0.25s ease` | Hover color changes |
| `--transition-base` | `0.3s ease` | Most interactive transitions |
| `--transition-slow` | `0.75s ease` | Scroll-reveal fade/slide |

**Z-index scale**

| Variable | Value | Element |
|---|---|---|
| `--z-nav` | `200` | Fixed header + mobile menu |
| `--z-floating` | `999` | Chainsaw button |

**Clip-path corners (manga-style cut)**

| Variable | Cut size | Used on |
|---|---|---|
| `--clip-corner-sm` | 8px | Contact info icons |
| `--clip-corner-md` | 12px | Buttons |
| `--clip-corner-lg` | 14px | Menu cards |
| `--clip-corner-xl` | 20px | About card, map placeholder |

**Runtime properties (written by JS)**

| Variable | Written by | Used in |
|---|---|---|
| `--progress` | `scroll-progress.js` | `.scroll-progress { width: var(--progress, 0%) }` |
| `--parallax-offset` | `parallax.js` | `.about::before { transform: translateY(calc(-50% + var(--parallax-offset, 0px))) }` |

### Class naming convention

BEM-like: `.block__element--modifier`

```
.menu-card            → block
.menu-card__title     → element
.menu-card--delay-1   → modifier
.menu-card__badge--cocktail → element + modifier
```

State classes use the `is-` prefix and are toggled by JavaScript:

```
.is-scrolled        → nav after scroll threshold
.is-visible         → scroll-reveal elements
.is-active          → active nav link
.is-open            → burger / mobile menu
.is-hidden          → chainsaw button, scroll hint
.is-vibrating-left  → chainsaw button wobble
.is-vibrating-right → chainsaw button wobble
.is-flipped         → flip-card rotated to back face
```

---

## JavaScript Modules

All modules are imported and called from `js/main.js`. Each exports a single `init*()` function. Modules are side-effect-only — they query the DOM and attach event listeners, returning nothing.

| Module | Export | DOM targets | What it does |
|---|---|---|---|
| `scroll-reveal.js` | `initScrollReveal()` | `.reveal`, `.reveal--left`, `.reveal--right` | `IntersectionObserver` (threshold 0.12) adds `.is-visible`; unobserves after trigger; falls back to showing all if IO unavailable |
| `nav-scroll.js` | `initNavScroll()` | `#nav`, `.hero__scroll-hint`, `section[id]`, `.nav__link` | rAF-throttled scroll: toggles `.is-scrolled` at 70px, fades scroll hint at 80px, tracks active section via second `IntersectionObserver` |
| `burger.js` | `initBurger()` | `#navBurger`, `#navMenu`, `#nav` | Toggles `.is-open`, syncs `aria-expanded`, locks `body.overflow`, closes on ESC / outside click / link click / resize to desktop |
| `chainsaw-vibration.js` | `initChainsawVibration()` | `#chainsawBtn` | On `mouseenter`: 8 steps × 45ms alternating `.is-vibrating-left` / `.is-vibrating-right` |
| `chainsaw-visibility.js` | `initChainsawVisibility()` | `#chainsawBtn`, `#contacts` | `IntersectionObserver` (threshold 0.15) adds `.is-hidden` when contacts section enters viewport |
| `count-up.js` | `initCountUp()` | `.about__stat-number` | `IntersectionObserver` (threshold 0.6) triggers rAF loop: ease-out cubic over 1400ms, preserves non-numeric suffix (e.g. `+`) |
| `parallax.js` | `initParallax()` | `.about` | rAF-throttled scroll: sets `--parallax-offset` on `.about` element based on scroll position (range ±35px) |
| `scroll-progress.js` | `initScrollProgress()` | `document.body` | Creates and prepends `.scroll-progress` div; passive scroll listener sets `--progress` CSS property |
| `ripple.js` | `initRipple()` | `.footer__social-link` | Click handler injects `<span class="ripple">` at click coordinates; span removes itself on `animationend` |
| `flip-card.js` | `initFlipCard()` | `.flip-card`, `.flip-card__front`, `.flip-card__close` | Click on front face → adds `.is-flipped`; click on close button → removes `.is-flipped` with `stopPropagation` |

---

## Responsive Breakpoints

| Breakpoint | What changes |
|---|---|
| `≤ 920px` | `.nav` padding reduces; burger button appears; nav links hidden, replaced by full-screen dropdown; `.grid-2` collapses to 1 column with 3rem gap; `.section` padding reduces to `5rem 1.5rem`; gallery → 2-column layout, feature item spans full width; `.about` font size reduces; map min-height reduces to 360px; `FIND US` vertical text hidden; dot column divider hidden; chainsaw button `scale(0.75)` |
| `≤ 580px` | `hero__kanji` hidden (`display: none`); manga corner panels hidden (`display: none`); hero CTA buttons stack vertically; menu grid → single column; gallery → single column; about stats gap reduces |

---

## Accessibility

- All interactive elements have `aria-label` or visible text
- Decorative elements (kanji, emoji, gradients) are `aria-hidden="true"`
- Heading hierarchy: `h1` (hero) → `h2` (sections) → `h3` (menu cards)
- Focus-visible outlines styled in `base.css` for keyboard navigation
- `@media (prefers-reduced-motion: reduce)` sets all animation/transition durations to `0.01ms`
- Sections use `aria-labelledby` referencing their visible `h2` headings
- `<address>` wraps the contacts block
- Burger button syncs `aria-expanded` and `aria-controls` on every toggle
- Social links use `aria-label` with the platform name
- `role="separator"` on `.divider` elements
- `role="banner"` on `<header>`, `role="contentinfo"` on `<footer>`
- `.visually-hidden` utility class available in `base.css` for screen-reader-only text

---

## Performance

- Google Fonts: `preconnect` hints + `display=swap` — no render-blocking
- CSS split into ~10 small files — each independently cacheable
- `<script type="module">` loaded at end of `<body>` — non-blocking
- All animations use `transform` / `opacity` — no layout thrash
- `requestAnimationFrame` throttles scroll handlers in `nav-scroll.js` and `parallax.js`
- `scroll` listeners use `{ passive: true }` — no blocking of native scroll
- `IntersectionObserver` used instead of scroll position math wherever possible
- `will-change: transform` on parallax element for GPU compositing hint
- `obs.unobserve()` after one-shot triggers (scroll-reveal, count-up) — no wasted observers

---

## Browser Support

All modern evergreen browsers: Chrome, Firefox, Safari, Edge.

Features used and their support:
- `IntersectionObserver` — universal in evergreen browsers; scroll-reveal has a fallback
- `CSS custom properties` — universal in evergreen browsers
- `ES Modules` — universal in evergreen browsers (requires `http://`, not `file://`)
- `backdrop-filter` — Chrome/Edge/Safari; mobile nav works without it (background is solid)
- `clip-path: inset()` — universal in evergreen browsers

---

## Recent Fixes

- **Scroll jump on page load** — `history.scrollRestoration = 'manual'` + `window.scrollTo(0, 0)` at the top of `init()` before any module is initialized; prevents the browser from restoring a mid-page scroll position on reload
- **Active nav link not highlighting Menu section** — `IntersectionObserver` threshold in `nav-scroll.js` lowered from `0.35` to `0.25`; rootMargin adjusted to `-70px 0px -30% 0px` so shorter sections still trigger the active state

---

## License

Project content (text, design) © 2025 Denji's Bar. *Chainsaw Man* is © Tatsuki Fujimoto / Shueisha — this is a fan-themed concept site for educational/portfolio purposes.
