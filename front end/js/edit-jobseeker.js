document.addEventListener("DOMContentLoaded", () => {
    // Simulate fetched user data (you can replace with localStorage or backend later)
    const jobseekerData = {
      name: "James Moriarty",
      profession: "Mathematician",
      age: 30,
      email: "james@example.com",
      password: "password123"
    };
  
    // Pre-fill the form
    document.getElementById("name").value = jobseekerData.name;
    document.getElementById("profession").value = jobseekerData.profession;
    document.getElementById("age").value = jobseekerData.age;
    document.getElementById("email").value = jobseekerData.email;
    document.getElementById("password").value = jobseekerData.password;
    document.getElementById("confirmPassword").value = jobseekerData.password;
  
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const password = document.querySelector("#password").value;
      const confirmPassword = document.querySelector("#confirmPassword").value;
  
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
  
      alert("Profile updated successfully!");
      window.location.href = "jobseeker-dashboard.html";
    });
  });
  