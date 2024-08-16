import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-content">
        <h1>Forgot password?</h1>
        <p>Enter your details to receive a reset link</p>
        <form>
          <input 
            type="email" 
            placeholder="Your Email" 
            className="email-input" 
            required 
          />
          <button type="submit" className="send-button">Send</button>
        </form>
        <a href="/signin" className="back-to-signin">Back to Sign In</a>
      </div>
    </div>
  );
}

export default ForgotPassword;
