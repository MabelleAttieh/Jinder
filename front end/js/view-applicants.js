document.addEventListener('DOMContentLoaded', () => {
    const applicants = [
        { name: 'Rick Sanchez', job: 'Chief Engineer', jobseekerId: 1 },
        { name: 'Slim Shady', job: 'Music Artist', jobseekerId: 2 },
        { name: 'Mario', job: 'Plumber', jobseekerId: 3 },
        { name: 'Marie Curie', job: 'Physicist and Chemist', jobseekerId: 4 },
        { name: 'Wanda Maximoff', job: 'Witch', jobseekerId: 5 }
    ];

    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear the placeholder content

    applicants.forEach(applicant => {
        const card = document.createElement('div');
        card.className = 'applicant-card';

        const name = document.createElement('h3');
        name.innerText = applicant.name;
        card.appendChild(name);

        const job = document.createElement('p');
        job.innerText = `Applied for: ${applicant.job}`;
        card.appendChild(job);

        const viewButton = document.createElement('a');
        viewButton.className = 'view-button';
        viewButton.href = `jobseeker-profile.html?id=${applicant.jobseekerId}`; // Dynamic link
        viewButton.innerText = 'View Details';
        card.appendChild(viewButton);

        container.appendChild(card);
    });
});
