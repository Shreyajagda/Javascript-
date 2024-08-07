document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider'); 
    const slides = document.querySelectorAll('.slider img'); 
    const slideCount = slides.length; 
    const interval = 3000; 
    
    let currentIndex = 0; 
    let startX = 0; 
    let endX = 0; 

    function goToSlide(index) {
        const offset = slides[0].clientWidth * index; 
        slider.style.transform = `translateX(-${offset}px)`; 
        currentIndex = index; 
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount; 
        goToSlide(currentIndex);
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount; 
        goToSlide(currentIndex); 
    }

    
    setInterval(nextSlide, interval);

    const navLinks = document.querySelectorAll('.slider-nav a'); 
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            goToSlide(index); 
        });
    });

    
    slider.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX; 
    });

    slider.addEventListener('touchend', function(event) {
        endX = event.changedTouches[0].clientX; 
        const diffX = endX - startX; 
        if (Math.abs(diffX) > 50) { 
            if (diffX > 0) {
                previousSlide(); 
            } else {
                nextSlide(); 
            }
        }
    });
});
