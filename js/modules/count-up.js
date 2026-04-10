// === MODULE: count-up ===
// Animates .about__stat-number elements from 0 to their target value
// when they enter the viewport. Preserves non-numeric suffixes ("+").

export function initCountUp() {
    const targets = document.querySelectorAll('.about__stat-number');
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const raw = el.textContent.trim();
            const num = parseInt(raw, 10);
            if (isNaN(num)) return;
            const suffix = raw.replace(/[\d]/g, '');

            const duration = 1400;
            const startTime = performance.now();

            const tick = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(eased * num) + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            obs.unobserve(el);
        });
    }, { threshold: 0.6 });

    targets.forEach((el) => observer.observe(el));
}
