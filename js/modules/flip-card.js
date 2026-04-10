// === MODULE: flip-card ===
// Toggles .is-flipped on .flip-card on click.
// Click on front → flip to back.
// Click on back close button → flip back to front.

export function initFlipCard() {
    const cards = document.querySelectorAll('.flip-card');
    if (!cards.length) return;

    cards.forEach((card) => {
        const front = card.querySelector('.flip-card__front');
        const closeBtn = card.querySelector('.flip-card__close');

        // Клик по лицевой стороне — перевернуть
        if (front) {
            front.addEventListener('click', () => {
                card.classList.add('is-flipped');
            });
        }

        // Клик по кнопке закрытия — вернуть
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.remove('is-flipped');
            });
        }
    });
}
