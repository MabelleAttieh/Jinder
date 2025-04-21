// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get all the navigation links
    const navLinks = document.querySelectorAll('.navdiv .header');
    
    // Handle clicks on the navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Remove the 'clicked' class from all navigation links
            navLinks.forEach(navLink => navLink.classList.remove('clicked'));

            // Add the 'clicked' class to the current active link
            event.target.classList.add('clicked');
        });
    });

    // Optionally, highlight the "Home" link by default
    const homeLink = document.querySelector('.header.clicked');
    if (!homeLink) {
        document.querySelector('.header').classList.add('clicked');
    }

});
