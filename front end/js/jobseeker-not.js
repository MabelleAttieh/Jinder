document.addEventListener('DOMContentLoaded', () => {
    const jobseekerId = getLoggedInJobseekerId(); // Replace with real logic

    fetch(`/api/jobseekers/${jobseekerId}/notifications`)
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.notifications');
            container.innerHTML = ''; // Clear placeholder content

            data.forEach(notification => {
                const div = document.createElement('div');
                div.className = 'notification';

                const icon = document.createElement('i');
                icon.className = `fas ${getIconClass(notification.type)}`;
                div.appendChild(icon);

                const text = document.createElement('div');
                text.className = 'notification-text';
                text.innerText = notification.message;
                div.appendChild(text);

                container.appendChild(div);
            });
        })
        .catch(err => console.error('Error loading notifications:', err));
});

function getLoggedInJobseekerId() {
    return '123'; // Replace with actual logic
}

function getIconClass(type) {
    switch (type) {
        case 'job-match': return 'fa-briefcase';
        case 'viewed': return 'fa-eye';
        case 'message': return 'fa-envelope';
        default: return 'fa-bell';
    }
}
