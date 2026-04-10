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

const init = () => {
    initScrollReveal();
    initNavScroll();
    initChainsawVibration();
    initCountUp();
    initParallax();
    initScrollProgress();
    initRipple();
    initBurger();
    initChainsawVisibility();

    // Page-load fade-in
    document.body.classList.add('is-loaded');
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
    init();
}
