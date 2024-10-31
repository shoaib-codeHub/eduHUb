
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateY(-${index * 100}%)`; // Slide from bottom to top
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide after the last one
    showSlide(currentIndex);
}

setInterval(nextSlide, 4000); // Change slide every 3 seconds