document.addEventListener('DOMContentLoaded', () => {
    // Get the logged-in jobseeker's ID (this should be handled by your backend)
    const jobseekerId = getLoggedInJobseekerId(); // Replace with actual logic to fetch the jobseeker ID

    // Fetch initial job data when the dashboard loads
    loadNextJob(); // Load the first job when the page loads
});

function getLoggedInJobseekerId() {
    // This function should return the logged-in jobseeker's ID
    // It could come from a session, localStorage, or a cookie
    return '123'; // Placeholder, replace with real authentication logic
}

function loadNextJob() {
    // Make an API call to fetch the next job for the jobseeker
    fetch(`/api/jobs/next`)
        .then(response => response.json())
        .then(data => {
            // Update the UI with the new job details
            updateJobCard(data);
        })
        .catch(error => {
            console.error('Error fetching next job:', error);
            alert('Error fetching the next job.');
        });
}

function updateJobCard(jobData) {
    // Example of dynamically updating the job card with the new job information
    document.getElementById('company-name').innerText = jobData.companyName || 'Company Name';
    document.querySelector('.job-brief').innerText = jobData.jobBrief || 'Job Brief';
    document.querySelector('.salary').innerText = `Salary: ${jobData.salary || '$0'}/year`;

    // Update the company logo (if available)
    if (jobData.companyLogo) {
        document.querySelector('.company-logo').setAttribute('src', jobData.companyLogo);
    }
}

function swipeLeft() {
    loadNextJob(); // Load the next job after swipe left (no CV upload)
}

function swipeRight() {
    // Make an API call to upload the CV and cover letter to the company
    const cvData = getJobseekerCV(); // Replace with actual logic to get the CV
    const coverLetterData = getJobseekerCoverLetter(); // Replace with actual logic to get the cover letter

    // Send the jobseeker's CV and cover letter to the company
    fetch('/api/jobs/apply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jobseekerId: getLoggedInJobseekerId(),
            cv: cvData,
            coverLetter: coverLetterData
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Application submitted successfully:', data);
            loadNextJob(); // Load the next job after swipe right (CV and cover letter uploaded)
        })
        .catch(error => {
            console.error('Error submitting application:', error);
            alert('Error submitting your application.');
        });
}

// Placeholder function to get the CV data (you'd get this from your backend or a form)
function getJobseekerCV() {
    // This function should return the jobseeker's CV (e.g., a file or file ID)
    return 'cv-file-id'; // Placeholder, replace with actual logic to get the CV
}

// Placeholder function to get the cover letter data (you'd get this from your backend or a form)
function getJobseekerCoverLetter() {
    // This function should return the jobseeker's cover letter (e.g., a file or file ID)
    return 'cover-letter-file-id'; // Placeholder, replace with actual logic to get the cover letter
}
