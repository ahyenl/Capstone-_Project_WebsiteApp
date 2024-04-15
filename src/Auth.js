const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    // Validate email format
    if (!isValidEmail(email)) {
      // Display error message for invalid email
      const emailError = document.getElementById('emailError');
      emailError.textContent = 'Invalid email format';
      return;
    }
  
    // Validate password length
    if (password.length < 8) {
      // Display error message for short password
      const passwordError = document.getElementById('passwordError');
      passwordError.textContent = 'Password must be at least 8 characters long';
      return;
    }
  
    // If all inputs are valid, proceed with login or signup logic
    // Submit the form or perform the desired actions
  
    // Send the registration email to the server
    fetch('http://localhost:5000/send-registration-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Registration email sent successfully!');
        } else {
          alert('Failed to send registration email.');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  