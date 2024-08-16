import React from 'react';
import './Signin.css';

const Signin = () => {
  return (
    <div className="container form__container">
      <div className="form__body">
        <div className="form__header">
          <h2>Sign In</h2>
          <p>Welcome back, you’ve been missed!</p>
        </div>
        <div className="signin-buttons">
          <button className="signin-btn google">Log in with Google</button>
          <button className="signin-btn apple">Log in with Apple</button>
        </div>
        <div className="divider">
          <span>OR</span>
        </div>
        <form className="auth__form">
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Enter Password" />
          <div className="signin-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className="signup-link">
          You haven't any account? <a href="/">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Signin;
