// Navbar mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            const isExpanded = navMenu.classList.contains('show-menu');
            navToggle.setAttribute('aria-expanded', isExpanded);
            

            const icon = navToggle.querySelector('i');
            if (isExpanded) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
        

        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
                navToggle.setAttribute('aria-expanded', 'false');
                const icon = navToggle.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
            });
        });
    }

    // Configuração do Carrossel
    const carousel = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (carousel && slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;
        let autoSlideInterval;
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID;

    
        updateCarousel();
        startAutoSlide();

 
        if (prevBtn) prevBtn.addEventListener('click', goToPrevSlide);
        if (nextBtn) nextBtn.addEventListener('click', goToNextSlide);
        

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });


        carousel.addEventListener('touchstart', touchStart);
        carousel.addEventListener('touchend', touchEnd);
        carousel.addEventListener('touchmove', touchMove);


        carousel.addEventListener('mousedown', touchStart);
        carousel.addEventListener('mouseup', touchEnd);
        carousel.addEventListener('mouseleave', touchEnd);
        carousel.addEventListener('mousemove', touchMove);


        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
        carousel.addEventListener('touchstart', stopAutoSlide);

        function updateCarousel() {

            if (isDragging) {
                carousel.style.transition = 'none';
            } else {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            }
            
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            

            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
            

            if (prevBtn) prevBtn.disabled = currentIndex === 0;
            if (nextBtn) nextBtn.disabled = currentIndex === totalSlides - 1;
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
            resetAutoSlide();
        }

        function goToNextSlide() {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
            resetAutoSlide();
        }

        function goToPrevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1;
            }
            updateCarousel();
            resetAutoSlide();
        }

        function startAutoSlide() {
            if (!autoSlideInterval) {
                autoSlideInterval = setInterval(goToNextSlide, 5000);
            }
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }

        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }

        // Funções para touch/swipe
        function touchStart(e) {
            if (e.type === 'touchstart') {
                startPos = e.touches[0].clientX;
            } else {
                startPos = e.clientX;
                e.preventDefault(); 
            }
            
            isDragging = true;
            stopAutoSlide();
            animationID = requestAnimationFrame(animation);
            carousel.style.cursor = 'grabbing';
        }

        function touchEnd() {
            isDragging = false;
            cancelAnimationFrame(animationID);
            
            const movedBy = currentTranslate - prevTranslate;
            
            if (movedBy < -100 && currentIndex < totalSlides - 1) {
                currentIndex++;
            }
            
            if (movedBy > 100 && currentIndex > 0) {
                currentIndex--;
            }
            
            updateCarousel();
            startAutoSlide();
            carousel.style.cursor = 'grab';
        }

        function touchMove(e) {
            if (isDragging) {
                const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
                currentTranslate = prevTranslate + currentPosition - startPos;
            }
        }

        function animation() {
            carousel.style.transform = `translateX(calc(-${currentIndex * 100}% + ${currentTranslate}px))`;
            animationID = requestAnimationFrame(animation);
        }
    }
});