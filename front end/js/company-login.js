document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.querySelector("#email").value.trim();
      const password = document.querySelector("#password").value.trim();
  
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Simulate successful login
      alert("Company login successful!");
      window.location.href = "company-dashboard.html";
    });
  });
  