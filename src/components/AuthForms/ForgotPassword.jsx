import React from 'react';
import { Link } from 'react-router-dom';
import mailIcon from '../../assets/icons/Mail-@.png';
import './AuthForms.css';

const ForgotPassword = () => {
  return (
    <div className="form-container">
      <div className="form-body">
        <div className="form-header">
          <h2>Forgot password?</h2>
          <p>Enter your details to receive a reset link</p>
        </div>
        <form className="auth-form">
          <div className="input-wrapper">
            <img src={mailIcon} alt="Email Icon" className="input-icon" />
            <input
              type="email"
              placeholder="Your Email"
              className="email-input"
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        <p className="signin-link">
          <Link to="/auth/signin" className="back-to-signin">Back to Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
