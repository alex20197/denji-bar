// === MODULE: chainsaw-vibration ===
// Adds a brief left/right wobble to the floating chainsaw button on hover.
// Uses CSS classes (no inline styles) so it stays declarative.

const VIBRATE_LEFT = 'is-vibrating-left';
const VIBRATE_RIGHT = 'is-vibrating-right';
const STEP_MS = 45;
const STEP_COUNT = 8;

export function initChainsawVibration() {
    const btn = document.getElementById('chainsawBtn');
    if (!btn) return;

    let animating = false;

    btn.addEventListener('mouseenter', () => {
        if (animating) return;
        animating = true;

        let n = 0;
        const id = setInterval(() => {
            btn.classList.remove(VIBRATE_LEFT, VIBRATE_RIGHT);
            btn.classList.add(n % 2 === 0 ? VIBRATE_LEFT : VIBRATE_RIGHT);

            if (++n >= STEP_COUNT) {
                clearInterval(id);
                btn.classList.remove(VIBRATE_LEFT, VIBRATE_RIGHT);
                animating = false;
            }
        }, STEP_MS);
    });
}
