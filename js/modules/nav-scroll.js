// === MODULE: nav-scroll ===
// Toggles .is-scrolled on the nav element after the user scrolls past
// a small threshold. Uses rAF throttling for smoothness.

const SCROLL_THRESHOLD = 70;
const SCROLLED_CLASS = 'is-scrolled';

export function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    let ticking = false;

    const update = () => {
        if (window.scrollY > SCROLL_THRESHOLD) {
            nav.classList.add(SCROLLED_CLASS);
        } else {
            nav.classList.remove(SCROLLED_CLASS);
        }
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // initial state
}
