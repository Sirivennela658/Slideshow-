const slides = document.querySelectorAll('.carousel-slide');
const carouselSlides = document.querySelector('.carousel-slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    carouselSlides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
function showNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; 
    }
    updateSlidePosition();
}
function showPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; 
    }
    updateSlidePosition();
}
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
setInterval(showNextSlide, 3000); 