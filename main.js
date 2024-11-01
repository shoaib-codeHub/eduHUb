
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

/* content-div js */
// Select all content-one elements
const contentElements = document.querySelectorAll('.content-one');

// Create the Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'show' class and remove 'hide' to animate in
            entry.target.classList.add('show');
            entry.target.classList.remove('hide');
        } else {
            // Add 'hide' class to reset position when out of view
            entry.target.classList.remove('show');
            entry.target.classList.add('hide');
        }
    });
}, {
    threshold: 0.1
});

// Observe each .content-one element
contentElements.forEach(element => {
    observer.observe(element);
});
