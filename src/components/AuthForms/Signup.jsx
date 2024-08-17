import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateSignupForm } from '../../utils/validation';
import { createUser } from '../../services/userService';
import './AuthForms.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    dob: '',
    gender: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateSignupForm(formData);

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
            <i className='fab fa-google'></i> Log in with Google
          </button>
          <button className="apple-signin">
            <i className='fab fa-apple'></i> Log in with Apple
          </button>
        </div>
        <div className="divider">
          <span>OR</span>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}

          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className='error'>{errors.name}</p>}

          <input
            type='password'
            name='password'
            placeholder='Create Password'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className='error'>{errors.password}</p>}

          <input
            type='date'
            name='dob'
            placeholder='Date of birth'
            value={formData.dob}
            onChange={handleChange}
          />
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
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
