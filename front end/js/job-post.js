document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const jobTitle = form.querySelector('input[placeholder="Job Title"]').value;
        const jobDescription = form.querySelector('textarea[placeholder="Job Description"]').value;
        const salary = form.querySelector('input[placeholder="Salary"]').value;
        const companyName = form.querySelector('input[placeholder="Company Name"]').value;

        const jobData = {
            title: jobTitle,
            description: jobDescription,
            salary: salary,
            company: companyName,
            companyId: getLoggedInCompanyId() // optional if your backend uses auth/session
        };

        fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
        .then(response => {
            if (response.ok) {
                alert('Job posted successfully!');
                form.reset();
            } else {
                alert('Failed to post job.');
            }
        })
        .catch(error => {
            console.error('Error posting job:', error);
            alert('An error occurred while posting the job.');
        });
    });
});

// Dummy placeholder – replace this with actual logic
function getLoggedInCompanyId() {
    return '123'; // Or fetch from localStorage/session if available
}
