//Carrossel
document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.carousel-slides');

    if (!slidesContainer) return;

    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function startAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(goToNext, 10000); //10 segundos
    }

    nextButton.addEventListener('click', () => {
        goToNext();
        startAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        goToPrev();
        startAutoPlay();
    });

    startAutoPlay();
});