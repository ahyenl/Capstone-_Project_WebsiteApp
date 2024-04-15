import React, { useState, useEffect } from 'react';
import './Form.css';
// import { Link } from "react-router-dom";

function Form() {
  const [showSignUp, setShowSignUp] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [textValue, setTextValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // const handleSignUpClick = () => {
  //   setShowSignUp(true);
  //   resetForm();
  // };

  const validateEmail = (email) => {
    return true;
  };

  const validateContactNumber = (contactNumber) => {
    return /^\d+$/.test(contactNumber); // Check if the string contains only digits
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const contactNumber = event.target.contactNumber.value;

    // Reset errors
    setEmailError('');
    setContactNumberError('');

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    // Validate contact number
    if (!validateContactNumber(contactNumber)) {
      setContactNumberError('Contact number must contain only digits');
      return;
    }

    handleShowAlert();
    resetForm();
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const resetForm = () => {
    const form = document.getElementById('auth-form');
    if (form) {
      form.reset();
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    if (showAlert) {
      resetForm();
    }
  }, [showAlert]);

  return (
    <div className="login">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-buttons">       
            </div>
          </div>

          <div className="auth-form">
            {showSignUp ? (
              <form id="auth-form" onSubmit={handleSubmit}>
                <h3 className="info-contact">Your Contact Information</h3>
                <label htmlFor="username" className="info-label">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your username" required />

                <label htmlFor="email" className="info-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <span className="error" id="emailError">
                  {emailError}
                </span>

                <label htmlFor="contactNumber" className="info-label">Contact Number:</label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your contact number"
                  required
                />
                <span className="error" id="contactNumberError">
                  {contactNumberError}
                </span>
            
      
                
                <br/>
                <label  className="info-label">Message</label>
                <textarea name="message" value={textValue} onChange={handleTextChange} placeholder="Leave your message"></textarea>      
                <br/> <br/> <br/> <br/> 
                <button type="submit">Submit</button>
                <br/>
                {showAlert && <div className="alert">You have successfully submitted !!</div>}
              </form>
             
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
