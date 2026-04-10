// === MODULE: chainsaw-visibility ===
// Hides the floating chainsaw button when the #contacts section
// is in the viewport. Uses IntersectionObserver for performance.

export function initChainsawVisibility() {
    const btn      = document.getElementById('chainsawBtn');
    const contacts = document.getElementById('contacts');
    if (!btn || !contacts) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                btn.classList.add('is-hidden');
            } else {
                btn.classList.remove('is-hidden');
            }
        },
        { threshold: 0.15 }
    );

    observer.observe(contacts);
}
