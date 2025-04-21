// edit-company.js

document.addEventListener('DOMContentLoaded', () => {
    // Assuming you're using a function to get the logged-in company from the backend
    const companyId = getLoggedInCompanyId(); // Get the logged-in company ID, perhaps from a cookie or token

    // Fetch existing company data from the backend
    fetch(`/api/companies/${companyId}`)
        .then(response => response.json())
        .then(data => {
            // Pre-fill the form with existing company data
            document.getElementById('company-name').value = data.name;
            document.getElementById('email').value = data.email;
            document.getElementById('password').value = ''; // Don't pre-fill password for security
            document.getElementById('confirmPassword').value = ''; // Don't pre-fill confirm password for security
            document.getElementById('description').value = data.description;
            // If there's a company logo, you can pre-load it or leave it as is
        })
        .catch(error => {
            console.error('Error fetching company data:', error);
        });

    // Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const updatedCompanyData = {
            name: document.getElementById('company-name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value, // Only send if changed
            description: document.getElementById('description').value,
            logo: document.getElementById('logo').files[0], // Get logo file if uploaded
        };

        // Send the updated data to the backend
        fetch(`/api/companies/${companyId}`, {
            method: 'PUT', // or POST depending on how your API is structured
            headers: {
                'Content-Type': 'application/json',
                // Add authentication headers (e.g., Authorization) if needed
            },
            body: JSON.stringify(updatedCompanyData),
        })
            .then(response => response.json())
            .then(data => {
                alert('Profile updated successfully!');
                // Optionally, redirect to another page
                window.location.href = 'company-dashboard.html';
            })
            .catch(error => {
                console.error('Error updating company data:', error);
            });
    });
});
