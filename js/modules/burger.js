// === MODULE: burger ===
// Toggles mobile navigation open/close.
// Handles: click outside to close, ESC to close, link click to close,
// aria-expanded sync, body scroll lock when open.

export function initBurger() {
    const burger = document.getElementById('navBurger');
    const menu   = document.getElementById('navMenu');
    const nav    = document.getElementById('nav');
    if (!burger || !menu) return;

    const open = () => {
        menu.classList.add('is-open');
        burger.classList.add('is-open');
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', 'Закрити меню');
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        menu.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Відкрити меню');
        document.body.style.overflow = '';
    };

    const toggle = () => menu.classList.contains('is-open') ? close() : open();

    burger.addEventListener('click', toggle);

    // Закрыть по клику на ссылку
    menu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', close);
    });

    // Закрыть по клику вне меню
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) close();
    });

    // Закрыть по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });

    // Закрыть при ресайзе до десктопа
    window.addEventListener('resize', () => {
        if (window.innerWidth > 920) close();
    });
}
