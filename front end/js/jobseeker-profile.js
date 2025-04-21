document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const jobseekerId = params.get('id');

    const applicantsData = {
        1: { 
            name: 'Rick Sanchez', 
            profession: 'Chief Engineer', 
            email: 'rick@sanchez.com', 
            cvUrl: 'docs/rick_cv.pdf', 
            coverLetterUrl: 'docs/rick_cover.pdf' 
        },
        2: { 
            name: 'Slim Shady', 
            profession: 'Music Artist', 
            email: 'slim@shady.com', 
            cvUrl: 'docs/slim_cv.pdf', 
            coverLetterUrl: 'docs/slim_cover.pdf' 
        },
        3: { 
            name: 'Mario', 
            profession: 'Plumber', 
            email: 'mario@plumber.com', 
            cvUrl: 'docs/mario_cv.pdf', 
            coverLetterUrl: 'docs/mario_cover.pdf' 
        }
    };

    const jobseeker = applicantsData[jobseekerId];

    if (jobseeker) {
        document.querySelector('.profile-name').innerText = jobseeker.name;
        document.querySelector('.profile-profession').innerText = jobseeker.profession;
        document.querySelector('.profile-email').innerText = jobseeker.email;
        document.querySelector('.profile-cv').href = jobseeker.cvUrl;
        document.querySelector('.profile-cover-letter').href = jobseeker.coverLetterUrl;
    } else {
        document.querySelector('.container').innerHTML = '<p>Sorry, the jobseeker profile could not be found.</p>';
    }
});
