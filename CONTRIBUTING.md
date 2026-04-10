# Contributing to Denji's Bar

This document explains how to extend and maintain the project. The architecture is intentionally simple — no build tools, no frameworks. If something feels complex, it probably should be simpler.

---

## How to Add a New Section

1. **Add the `<section>` in `index.html`**

   Insert it in document order (between existing sections, inside `<main id="main">`). Always include:

   ```html
   <section class="section section--alt YOUR-SECTION" id="your-section" aria-labelledby="your-section-title">
       <div class="container">
           <p class="section-label">Short label</p>
           <h2 class="section-title" id="your-section-title">
               SECTION <span class="section-title__accent">TITLE</span>
           </h2>
           <!-- content -->
       </div>
   </section>
   ```

   - Use `section--alt` for a slightly lighter background (`#111111`); omit it for the default dark background (`#0A0A0A`).
   - `id` must match the `aria-labelledby` value and the `href` in the nav link.

2. **Create `css/components/your-section.css`**

   Scope all selectors to your section's class (`.your-section__*`). Put responsive rules at the bottom of the same file.

   ```css
   /* === COMPONENT: your-section === */

   .your-section__title { ... }

   @media (max-width: 920px) { ... }
   @media (max-width: 580px) { ... }
   ```

3. **Link the stylesheet in `index.html`**

   Add it in `<head>`, after the other component stylesheets and before `chainsaw-btn.css`:

   ```html
   <link rel="stylesheet" href="css/components/your-section.css">
   ```

4. **Add a nav link (if the section should appear in navigation)**

   In `index.html`, inside `.nav__list`:

   ```html
   <li><a class="nav__link" href="#your-section">Назва</a></li>
   ```

   The `nav-scroll.js` module will automatically pick up the new link and the new section for active-link tracking — no JS changes needed.

5. **Add reveal animations**

   Apply scroll-reveal classes to elements that should animate in:

   ```html
   <div class="reveal">...</div>          <!-- fade up -->
   <div class="reveal--left">...</div>    <!-- slide from left -->
   <div class="reveal--right">...</div>   <!-- slide from right -->
   ```

   The `scroll-reveal.js` module watches for these selectors automatically.

---

## How to Add a New JavaScript Module

1. **Create `js/modules/your-module.js`**

   ```javascript
   // === MODULE: your-module ===
   // One-line description of what this module does.

   export function initYourModule() {
       const el = document.getElementById('yourElement');
       if (!el) return; // always guard against missing DOM

       // attach listeners, set up observers, etc.
   }
   ```

   Rules:
   - Export exactly one function named `init` + PascalCase module name.
   - Always guard against missing DOM elements (`if (!el) return`).
   - Prefer `IntersectionObserver` over scroll listeners for visibility logic.
   - If you need a scroll listener, throttle it with `requestAnimationFrame` and use `{ passive: true }`.

2. **Import in `js/main.js`**

   ```javascript
   import { initYourModule } from './modules/your-module.js';
   ```

3. **Call inside `init()`**

   ```javascript
   const init = () => {
       // ... existing calls ...
       initYourModule();
       document.body.classList.add('is-loaded');
   };
   ```

---

## How to Add a Menu Card

In `index.html`, find `<div class="menu__grid">` and copy this template:

```html
<article class="menu-card reveal">
    <!--
        Badge type — choose one:
        menu-card__badge--cocktail  (red, for cocktails)
        menu-card__badge--food      (orange, for food)
        menu-card__badge--special   (yellow, for non-alcoholic / signature)
    -->
    <span class="menu-card__badge menu-card__badge--cocktail">Коктейль</span>

    <!-- Name in ALL CAPS -->
    <h3 class="menu-card__title">НАЗВА ПОЗИЦІЇ</h3>

    <!-- Japanese transliteration (optional, can be removed) -->
    <p class="menu-card__jp">日本語</p>

    <!-- Short description, 1–2 sentences -->
    <p class="menu-card__desc">Опис позиції тут.</p>

    <footer class="menu-card__footer">
        <p class="menu-card__price">
            180 <span class="menu-card__price-unit">грн</span>
        </p>
        <p class="menu-card__volume">200 мл</p>
    </footer>
</article>
```

For staggered reveal timing, add one of these classes to the `<article>`:

```
menu-card--delay-1   → 0.1s delay
menu-card--delay-2   → 0.2s delay
menu-card--delay-3   → 0.3s delay
```

---

## Naming Conventions

### CSS — BEM-like

```
.block                  → component root
.block__element         → child of the component
.block--modifier        → variant of the component
.block__element--mod    → variant of an element
```

Examples: `.menu-card`, `.menu-card__title`, `.menu-card--delay-1`, `.menu-card__badge--cocktail`

State classes (toggled by JS) use the `is-` prefix and are never styled on their own — always combined:

```css
/* correct */
.nav__link.is-active { color: var(--color-fire); }

/* wrong */
.is-active { color: var(--color-fire); }
```

### JavaScript

- Variables and parameters: `camelCase`
- Module init functions: `initModuleName()` — always `init` prefix
- Constants: `SCREAMING_SNAKE_CASE` for module-level config values
- No classes, no `new`, no global state — modules are plain functions

### Files

- CSS files: `kebab-case.css`
- JS files: `kebab-case.js`
- Module function name matches filename: `burger.js` → `initBurger()`

### Git commits — Conventional Commits

```
type: short description in imperative mood, lowercase
```

| Type | When to use |
|---|---|
| `feat` | New feature or visible behaviour | 
| `fix` | Bug fix |
| `docs` | Documentation only (`README.md`, `CONTRIBUTING.md`) |
| `style` | CSS / visual changes with no behaviour change |
| `refactor` | Code change with no behaviour change |
| `perf` | Performance improvement |
| `chore` | Tooling, config, `.gitignore`, non-code changes |

**Examples:**

```
feat: add reservation form to contacts section
fix: burger menu not closing on ESC key
docs: update README with new modules
style: increase hero font size on mobile
refactor: extract scroll logic to separate module
perf: add passive listeners to scroll handlers
chore: add og-cover.jpg placeholder to assets
```

---

## Git Workflow

Standard cycle for every change:

```bash
# 1. Check what's changed
git status
git diff

# 2. Stage only the files you intentionally changed
git add css/components/nav.css
git add js/modules/burger.js
# (never blindly: git add . — risks committing .DS_Store etc.)

# 3. Commit with Conventional Commits message
git commit -m "feat: burger menu with aria and keyboard support"

# 4. Push to remote
git push
```

GitHub Pages deploys automatically after every push to `main`. Wait ~1–2 minutes, then hard-refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`) to see changes.

---

## Pre-commit Checklist

Before every `git commit`, verify:

- [ ] No `style=""` inline styles in HTML — all styling belongs in CSS files
- [ ] New CSS goes into the relevant `css/components/` file, not into `index.html` or `base.css`
- [ ] New JS interaction is a module in `js/modules/`, imported through `main.js`
- [ ] CSS brace count matches: `grep -c '{' css/components/changed.css` equals `grep -c '}' css/components/changed.css`
- [ ] Tested in mobile viewport (DevTools → iPhone SE, 375px wide)
- [ ] No `console.error` in the browser console
- [ ] No `display: none` used where `visibility: hidden + opacity: 0` should be used (to preserve transition animations)
- [ ] New interactive elements have `aria-label` or visible text label
- [ ] Decorative-only elements have `aria-hidden="true"`

---

## CSS Gotchas

**`display: none` kills transitions.** If an element needs to animate in/out, use:

```css
/* wrong — no transition possible */
.menu { display: none; }
.menu.is-open { display: flex; }

/* correct — transition works */
.menu {
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
}
.menu.is-open {
    visibility: visible;
    opacity: 1;
    transform: none;
}
```

**`clip-path` blocks overflow.** Elements with `clip-path` will clip child `::before`/`::after` and `position: absolute` children that try to escape the bounds. If a pseudo-element decoration is being clipped, move it outside or use `filter: drop-shadow()` instead of `box-shadow` (which also respects clip-path).

**`transform` and `position: fixed`.** An ancestor with `transform: ...` creates a new stacking context, which breaks `position: fixed` children. Never apply `transform` to a direct ancestor of the chainsaw button or nav.
