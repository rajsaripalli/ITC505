// XSS Protection Function: Escapes HTML special characters
function sanitizeInput(input) {
  return input.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Fetch and sanitize input values
  const fname = sanitizeInput(document.getElementById('fname').value.trim()); // XSS Protection applied
  const lname = sanitizeInput(document.getElementById('lname').value.trim()); // XSS Protection applied
  const email = sanitizeInput(document.getElementById('email').value.trim()); // XSS Protection applied
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const errorDiv = document.getElementById('errorMsg');
  const successDiv = document.getElementById('successMsg');
  errorDiv.textContent = '';
  successDiv.textContent = '';

  // Check for empty fields
  if (!fname || !lname || !email || !password || !confirmPassword) {
    errorDiv.textContent = "All fields are required.";
    return;
  }

  // Email format validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorDiv.textContent = "Invalid email format.";
    return;
  }

  // Password match validation
  if (password !== confirmPassword) {
    errorDiv.textContent = "Passwords do not match.";
    return;
  }

  // On successful validation
  successDiv.textContent = "Form submitted successfully!";
  console.log("Sanitized First Name:", fname);
  console.log("Sanitized Last Name:", lname);
  console.log("Sanitized Email:", email);
});
