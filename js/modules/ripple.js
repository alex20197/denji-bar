// === MODULE: ripple ===
// Adds a ripple click effect to .footer__social-link elements.

export function initRipple() {
    const links = document.querySelectorAll('.footer__social-link');
    if (!links.length) return;

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            const rect = link.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top  = `${e.clientY - rect.top}px`;
            link.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
        });
    });
}
