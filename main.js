
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



/* user */

const counters = document.querySelectorAll('.users-count');

    // Function to animate a counter
    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const duration = 3000; // Animation duration in milliseconds
        const increment = target / (duration / 20);

        let count = 0;
        counter.innerText = count;

        function updateCounter() {
            count += increment;
            if (count < target) {
                counter.innerText = Math.floor(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target; // Set the final target value once animation completes
            }
        }

        updateCounter();
    }

    // IntersectionObserver callback to trigger animation when counters come into view
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    counter.innerText = '0'; // Reset to 0 before animating
                    animateCounter(counter);
                });
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed (0.5 = 50% of element in view)

    // Observe the .users section
    const usersSection = document.querySelector('.users');
    if (usersSection) {
        sectionObserver.observe(usersSection);
    }

