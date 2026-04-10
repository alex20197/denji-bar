// === MODULE: scroll-reveal ===
// Reveals elements with .reveal / .reveal--left / .reveal--right
// when they enter the viewport, by adding .is-visible class.

const SELECTOR = '.reveal, .reveal--left, .reveal--right';
const VISIBLE_CLASS = 'is-visible';

export function initScrollReveal() {
    const targets = document.querySelectorAll(SELECTOR);
    if (!targets.length) return;

    // Fallback for browsers without IntersectionObserver: show everything
    if (!('IntersectionObserver' in window)) {
        targets.forEach((el) => el.classList.add(VISIBLE_CLASS));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(VISIBLE_CLASS);
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
}
