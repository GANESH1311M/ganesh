// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formDataObj = Object.fromEntries(formData);

    // Here, you can use the formDataObj to send the form data to a server
    // using an API or any other backend logic.
    // For this example, we'll just log the data to the console.
    console.log(formDataObj);

    // Optionally, you can add code to display a success message or reset the form.
    contactForm.reset();
}