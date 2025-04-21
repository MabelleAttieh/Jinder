// logout.js
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-Button'); // ID of the logout button

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Clear session storage or any stored data
            localStorage.removeItem('userSession');  // Remove data from localStorage
            sessionStorage.removeItem('userSession');  // Remove data from sessionStorage

            // Clear cookies (if you're using cookies for session)
            document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            // Redirect the user to the login page or homepage
            window.location.href = 'login.html';  // You can change to 'index.html' or another page
        });
    }
});
