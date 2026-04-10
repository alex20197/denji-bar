// === MODULE: parallax ===
// Moves the .about::before background text slightly on scroll
// for a subtle depth effect. Uses CSS custom property --parallax-offset.

export function initParallax() {
    const about = document.querySelector('.about');
    if (!about) return;

    let ticking = false;

    const update = () => {
        const rect = about.getBoundingClientRect();
        const viewH = window.innerHeight;
        // progress: 0 = section bottom entering viewport, 1 = section top leaving
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const offset = (progress - 0.5) * 70; // ±35px range
        about.style.setProperty('--parallax-offset', `${offset}px`);
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });

    update();
}
