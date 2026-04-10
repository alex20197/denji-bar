// === ENTRY: main.js ===
// Bootstraps all interactive modules after DOM is ready.

import { initScrollReveal } from './modules/scroll-reveal.js';
import { initNavScroll } from './modules/nav-scroll.js';
import { initChainsawVibration } from './modules/chainsaw-vibration.js';

const init = () => {
    initScrollReveal();
    initNavScroll();
    initChainsawVibration();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
    init();
}
