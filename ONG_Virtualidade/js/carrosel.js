/*Código do carrossel infinito*/
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('slider-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!track || !prevBtn || !nextBtn) {
        return;
    }

    const originalCards = Array.from(track.querySelectorAll('.project-card'));
    const totalOriginalItems = originalCards.length;

    let itemsToShow = window.innerWidth <= 768 ? 1 : 2;
    let currentIndex = itemsToShow;
    let isTransitioning = false;

    const getSlideAmount = () => {
        const firstCard = track.querySelector('.project-card');
        if (!firstCard) return 0;

        const cardWidth = firstCard.offsetWidth;
        const gap = parseInt(window.getComputedStyle(track).gap) || 0;
        return cardWidth + gap;
    };

    function updateSlider(instant = false) {
        if (instant) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 0.5s ease-in-out';
        }

        const slideAmount = getSlideAmount();
        track.style.transform = `translateX(${-currentIndex * slideAmount}px)`;
    }

    function setupClones() {
        track.innerHTML = '';
        originalCards.forEach(card => track.appendChild(card.cloneNode(true)));

        const currentCards = track.querySelectorAll('.project-card');

        for (let i = 0; i < itemsToShow; i++) {
            const clone = currentCards[totalOriginalItems - 1 - i].cloneNode(true);
            track.insertBefore(clone, track.firstChild);
        }

        for (let i = 0; i < itemsToShow; i++) {
            const clone = currentCards[i].cloneNode(true);
            track.appendChild(clone);
        }

        currentIndex = itemsToShow;
        updateSlider(true);
    }

    nextBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex++;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex--;
        updateSlider();
    });

    track.addEventListener('transitionend', () => {
        isTransitioning = false;

        if (currentIndex === totalOriginalItems + itemsToShow) {
            currentIndex = itemsToShow;
            updateSlider(true);
        }

        else if (currentIndex === itemsToShow - 1) {
            currentIndex = totalOriginalItems + itemsToShow - 1;
            updateSlider(true);
        }
    });

    function handleResize() {
        const newItemsToShow = window.innerWidth <= 768 ? 1 : 2;

        if (newItemsToShow !== itemsToShow) {
            itemsToShow = newItemsToShow;
            setupClones();
        } else {
            updateSlider(true);
        }
    }

    window.addEventListener('resize', handleResize);

    setupClones();
});
