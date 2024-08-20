import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateSigninForm } from '../../utils/validation';
import { signinUser } from '../../services/userService';
import { fetchUsers } from '../../services/userService';
import google from '../../assets/icons/Google.png';
import apple from '../../assets/icons/Apple.png';
import './AuthForms.css';

const Signin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("form data: ", formData)
    const validationErrors = validateSigninForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const success = await signinUser(formData);
      if (success) {
        const users = await fetchUsers();
        const existingUser = users.find(user => user.email == formData.email);
        // Store the user object in localStorage
        localStorage.setItem('user', JSON.stringify(existingUser));
        navigate('/feed');
      } else {
        setErrors({ general: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  return (
    <div className="form-container">
      <div className="form-body">
        <div className="form-header">
          <h2>Sign In</h2>
          <p>Welcome back, you’ve been missed!</p>
        </div>
        <div className="signup-options">
          <button className="google-signin">
            <img src={google} alt="google" /> Log in with Google
          </button>
          <button className="apple-signin">
            <img src={apple} alt="apple" /> Log in with Apple
          </button>
        </div>
        <div className="divider">
          <span>OR</span>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className='error'>{errors.password}</p>}

          <div className="signin-options">
            <label>
              <input type="checkbox" />Remember me
            </label>
            <Link to="/auth/forgot-password" className="forgot-password">Forgot Password?</Link>
          </div>

          {errors.general && <p className='error'>{errors.general}</p>}
          <button type="submit">Sign In</button>


        </form>
        <p className="signin-link">
          You haven't any account? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
