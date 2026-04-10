// === MODULE: scroll-progress ===
// Injects a 3px fixed bar at the top of the page that fills
// left-to-right as the user scrolls through the document.

export function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.prepend(bar);

    const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (max <= 0) return;
        const pct = (window.scrollY / max) * 100;
        bar.style.setProperty('--progress', `${pct}%`);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
}
