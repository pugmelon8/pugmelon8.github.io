console.log("JavaScript is loaded");

// loading page
window.addEventListener("load", function() {
    // Check if the preloader has already been shown
    if (!sessionStorage.getItem("preloaderShown")) {
        // If not, show the preloader and set the flag
        const delayTime = 4800;

        setTimeout(function() {
            const preloader = document.getElementById("preloader");
            const content = document.getElementById("content");

            preloader.classList.add("hidden"); // Apply the hidden class for fade-out effect
            content.style.display = "block";

            // Set the flag in sessionStorage to prevent the preloader from showing again
            sessionStorage.setItem("preloaderShown", "true");
        }, delayTime);
    } else {
        // If the preloader has been shown before, skip it
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }

    // Reset the preloader flag when a specific button is clicked
    document.getElementById("resetPreloaderButton").addEventListener("click", function() {
        sessionStorage.removeItem("preloaderShown");
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Hide the form and show the confirmation message
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
    
    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});
