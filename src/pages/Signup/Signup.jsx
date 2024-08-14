import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className='container signup__container'>
      <div className='signup'>
        <div className='signup__header'>
          <h2>Getting Started</h2>
          <p>Create an account to continue and connect with the people.</p>
        </div>
        <div className='signup__options'>
          <button className='google__signin'>
            <i className='fab fa-google'></i> Log in with Google
          </button>
          <button className='apple__signin'>
            <i className='fab fa-apple'></i> Log in with Apple
          </button>
        </div>
        <div className='divider'>
          <span>OR</span>
        </div>
        <form className='signup__form'>
          <input type='email' placeholder='Your Email' />
          <input type='text' placeholder='Your Name' />
          <input type='password' placeholder='Create Password' />
          <input type='date' placeholder='Date of birth' />
          <div className='gender__selection'>
            <input type='radio' id='male' name='gender' value='male' />
            <label htmlFor='male'>Male</label>
            <input type='radio' id='female' name='gender' value='female' />
            <label htmlFor='female'>Female</label>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
        <p className='signin__link'>
          Already have an account? <a href='#'>Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
