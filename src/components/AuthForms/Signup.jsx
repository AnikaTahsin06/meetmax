import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateSignupForm } from '../../utils/validation';
import { createUser } from '../../services/userService';
import google from '../../assets/icons/Google.png';
import apple from '../../assets/icons/Apple.png';
import mailIcon from '../../assets/icons/Mail-@.png';
import smile from '../../assets/icons/Smile.png';
import eye from '../../assets/icons/Eye.png';
import eyeOff from '../../assets/icons/Eye Off.png';
import lock from '../../assets/icons/Lock.png';
import './AuthForms.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    dob: '',
    gender: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = await validateSignupForm(formData);

    console.log("check:", Object.keys(validationErrors).length)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await createUser(formData);
      navigate('signin');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container form-container">
      <div className="form-body">
        <div className="form-header">
          <h2>Getting Started</h2>
          <p>Create an account to continue and connect with the people.</p>
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
          <div className="input-wrapper">
            <img src={mailIcon} alt="Email Icon" className="input-icon" />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className='error'>{errors.email}</p>}

          <div className="input-wrapper">
            <img src={smile} alt="Email Icon" className="input-icon" />
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className='error'>{errors.name}</p>}

          <div className="input-wrapper">
            <img src={lock} alt="Lock Icon" className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Create Password'
              value={formData.password}
              onChange={handleChange}
            />
            <img
              src={showPassword ? eyeOff : eye}
              alt="Toggle Password"
              className="toggle-icon"
              onClick={handlePasswordToggle}
            />
          </div>
          {errors.password && <p className='error'>{errors.password}</p>}

          <div className="input-wrapper">
            <input
              type='date'
              name='dob'
              placeholder='Date of birth'
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          {errors.dob && <p className='error'>{errors.dob}</p>}

          <div className="gender-selection">
            <input
              type='radio'
              id='male'
              name='gender'
              value='male'
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>

            <input
              type='radio'
              id='female'
              name='gender'
              value='female'
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
          {errors.gender && <p className='error'>{errors.gender}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p className="signin-link">
          Already have an account? <Link to="/auth/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
