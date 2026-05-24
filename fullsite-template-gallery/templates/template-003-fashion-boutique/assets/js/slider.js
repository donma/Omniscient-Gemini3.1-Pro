// Simple Slider JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = setInterval(nextSlide, 5000);

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }
});
