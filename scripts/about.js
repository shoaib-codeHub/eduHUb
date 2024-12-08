
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



const targetDate = new Date("2024-12-31T23:59:59").getTime(); // Replace with your desired date and time

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update countdown elements
        document.getElementById("countdown-one").textContent = `${days} Days`;
        document.getElementById("countdown-two").textContent = `${hours} Hours`;
        document.getElementById("countdown-three").textContent = `${minutes} Minutes`;
        document.getElementById("countdown-four").textContent = `${seconds} Seconds`;
    } else {
        // If the countdown is over, display a message
        document.querySelector(".countdown-main").innerHTML = "<p>Offer Ended</p>";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
