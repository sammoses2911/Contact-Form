document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting automatically
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }
    
    // Further validation can be added here (e.g., email format check)

    alert("Form submitted successfully!");
    this.reset(); // Clear the form
});
