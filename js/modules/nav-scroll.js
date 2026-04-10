// === MODULE: nav-scroll ===
// Toggles .is-scrolled on nav after scroll threshold.
// Hides scroll hint after user starts scrolling.
// Highlights active nav link based on visible section.

const SCROLL_THRESHOLD = 70;
const SCROLLED_CLASS = 'is-scrolled';

export function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const scrollHint = document.querySelector('.hero__scroll-hint');
    let ticking = false;

    const update = () => {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;
        nav.classList.toggle(SCROLLED_CLASS, scrolled);
        if (scrollHint) scrollHint.classList.toggle('is-hidden', window.scrollY > 80);
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

    // ── Active nav link via IntersectionObserver ──
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    if (sections.length && navLinks.length) {
        const linkObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((l) => l.classList.remove('is-active'));
                    const active = nav.querySelector(`.nav__link[href="#${entry.target.id}"]`);
                    if (active) active.classList.add('is-active');
                }
            });
        }, { threshold: 0.35, rootMargin: '-70px 0px -30% 0px' });
        sections.forEach((s) => linkObserver.observe(s));
    }
}
