import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

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

  const validate = () => {
    let formErrors = {};
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      formErrors.email = 'Invalid email format';
    }
    if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }
    if (!formData.gender) {
      formErrors.gender = 'Please select a gender';
    }
    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post('http://localhost:8000/users', formData);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  return (
    <div className="container form__container">
      <div className="form__body">
        <div className="form__header">
          <h2>Getting Started</h2>
          <p>Create an account to continue and connect with the people.</p>
        </div>
        <div className="signup__options">
          <button className="google__signin">
            <i className='fab fa-google'></i> Log in with Google
          </button>
          <button className="apple__signin">
            <i className='fab fa-apple'></i> Log in with Apple
          </button>
        </div>
        <div className="divider">
          <span>OR</span>
        </div>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange} />
          {errors.email && <p className='error'>{errors.email}</p>}
          <input type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange} />
          <input type='password'
            name='password'
            placeholder='Create Password'
            value={formData.password}
            onChange={handleChange} />
          {errors.password && <p className='error'>{errors.password}</p>}
          <input type='date'
            name='dob'
            placeholder='Date of birth'
            value={formData.dob}
            onChange={handleChange} />
          <div className="gender__selection">
            <input type='radio'
              id='male'
              name='gender'
              value='male'
              onChange={handleChange} />
            <label htmlFor="male">Male</label>
            <input type='radio'
              id='female'
              name='gender'
              value='female'
              onChange={handleChange} />
            <label htmlFor="female">Female</label>
          </div>
          {errors.gender && <p className='error'>{errors.gender}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p className="signin__link">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
