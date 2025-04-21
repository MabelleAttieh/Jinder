document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('jobseeker-signup-form');
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const genderInput = document.getElementById("gender");
    const ageInput = document.getElementById("age");
    const majorInput = document.getElementById("major");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const cvInput = document.getElementById("cv");
    const coverLetterInput = document.getElementById("cover-letter");

    form.addEventListener('submit', async (event) => {
        event.preventDefault();  // Prevent default form submission

        // Get form values
        const firstname = firstnameInput.value.trim();
        const lastname = lastnameInput.value.trim();
        const gender = genderInput.value;
        const age = ageInput.value;
        const major = majorInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Basic validation
        if (!firstname || !lastname || !gender || !age || !major || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        // Validate email format using regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Password strength validation
        const passwordStrengthRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordStrengthRegex.test(password)) {
            alert('Password must be at least 6 characters long and contain both letters and numbers.');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Validate CV and Cover Letter files
        if (!cvInput.files[0]) {
            alert('Please upload your CV.');
            return;
        }
        if (!coverLetterInput.files[0]) {
            alert('Please upload your cover letter.');
            return;
        }

        // Send POST request to the backend (this is for signup)
        try {
            const formData = new FormData();
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('gender', gender);
            formData.append('age', age);
            formData.append('major', major);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('cv', cvInput.files[0]);
            formData.append('coverLetter', coverLetterInput.files[0]);

            const response = await fetch('http://localhost:5000/jobseeker-signup', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                // Signup successful
                alert('Jobseeker sign-up successful!');
                window.location.href = 'login.html';  // Redirect to login page
            } else {
                // Signup failed
                alert(data.message || 'Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});
