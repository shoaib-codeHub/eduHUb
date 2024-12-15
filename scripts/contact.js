document.addEventListener("DOMContentLoaded", function() { var contentElement = document.getElementById('course-content'); setTimeout(function() { contentElement.classList.add('show'); }, 100); });



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


    // Select the form element
    const form = document.getElementById('contactForm');

    // Add an event listener for the form submission
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Use FormData to gather form inputs
        const formData = new FormData(form);

        // Access the data using the 'name' attributes
        const firstname = formData.get('firstname');
        const lastname = formData.get('lastname');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Log the data to the console
        console.log('First Name:', firstname);
        console.log('Last Name:', lastname);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Optionally, send the data to a server
    });


    form.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const formData = new FormData(form);
    
        fetch('https://example.com/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
    