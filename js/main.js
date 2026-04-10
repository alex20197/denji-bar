// === ENTRY: main.js ===
// Bootstraps all interactive modules after DOM is ready.

import { initScrollReveal }        from './modules/scroll-reveal.js';
import { initNavScroll }           from './modules/nav-scroll.js';
import { initChainsawVibration }   from './modules/chainsaw-vibration.js';
import { initCountUp }             from './modules/count-up.js';
import { initParallax }            from './modules/parallax.js';
import { initScrollProgress }      from './modules/scroll-progress.js';
import { initRipple }              from './modules/ripple.js';
import { initBurger }              from './modules/burger.js';
import { initChainsawVisibility }  from './modules/chainsaw-visibility.js';
import { initFlipCard }            from './modules/flip-card.js';

const init = () => {
    // Prevent browser from restoring scroll position on reload
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    initScrollReveal();
    initNavScroll();
    initChainsawVibration();
    initCountUp();
    initParallax();
    initScrollProgress();
    initRipple();
    initBurger();
    initChainsawVisibility();
    initFlipCard();

    // Page-load fade-in (must be last)
    document.body.classList.add('is-loaded');
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
    init();
}
