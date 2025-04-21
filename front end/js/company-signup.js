document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const companyNameInput = document.getElementById("company-name");
    const industryInput = document.getElementById("industry");
    const companySizeInput = document.getElementById("company-size");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    form.addEventListener('submit', async (event) => {
        event.preventDefault();  // Prevent default form submission

        // Get form values
        const companyName = companyNameInput.value.trim();
        const industry = industryInput.value.trim();
        const companySize = companySizeInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Basic validation
        if (!companyName || !industry || !companySize || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        // Validate email format using regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Password strength validation (simple example)
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

        // Send POST request to the backend (this is for signup)
        try {
            const response = await fetch('http://localhost:5000/company-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ companyName, industry, companySize, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Signup successful
                alert('Company sign-up successful!');
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
