// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    // Get the logged-in company ID (this would come from a session or authentication token)
    const companyId = getLoggedInCompanyId(); // Replace with actual logic

    // Fetch company info
    fetch(`/api/companies/${companyId}`)
        .then(response => response.json())
        .then(data => {
            // Populate the company name dynamically
            document.getElementById('company-name').innerText = data.name;
            // You can add more data handling here as necessary
        })
        .catch(error => console.error('Error fetching company data:', error));
});

function getLoggedInCompanyId() {
    // Retrieve the logged-in company ID (for example, from a session cookie or localStorage)
    return '123'; // Placeholder, replace with actual logic to get the logged-in company ID
}

