import { fetchUsers } from '../services/userService';

// src/utils/validation.js
export const validateSignupForm = async (formData) => {
  let formErrors = {};

  // Fetch all users to check for existing email
  const users = await fetchUsers();
  const existingUser = users.find(user => user.email == formData.email);

  // Email Validation
  if (existingUser) {
    formErrors.email = 'Email is already registered';
  }
  
  if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    formErrors.email = 'Invalid email format';
  } else if (formData.email.length > 50) {
    formErrors.email = 'Email must be less than 50 characters';
  }

  // Name Validation
  if (!formData.name.trim()) {
    formErrors.name = 'Name is required';
  } else if (formData.name.length < 2) {
    formErrors.name = 'Name must be at least 2 characters long';
  } else if (formData.name.length > 50) {
    formErrors.name = 'Name must be less than 50 characters';
  }

  // Password Validation
  if (formData.password.length < 6) {
    formErrors.password = 'Password must be at least 6 characters long';
  } else if (formData.password.length > 20) {
    formErrors.password = 'Password must be less than 20 characters';
  } else if (!/[A-Z]/.test(formData.password)) {
    formErrors.password = 'Password must contain at least one uppercase letter';
  } else if (!/[a-z]/.test(formData.password)) {
    formErrors.password = 'Password must contain at least one lowercase letter';
  } else if (!/[0-9]/.test(formData.password)) {
    formErrors.password = 'Password must contain at least one number';
  } else if (!/[!@#\$%\^&\*]/.test(formData.password)) {
    formErrors.password = 'Password must contain at least one special character (!@#$%^&*)';
  }

  // Date of Birth Validation
  if (!formData.dob) {
    formErrors.dob = 'Date of birth is required';
  } else {
    const today = new Date();
    const dob = new Date(formData.dob);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    if (age < 13) {
      formErrors.dob = 'You must be at least 13 years old to sign up';
    }
  }

  // Gender Validation
  if (!formData.gender) {
    formErrors.gender = 'Please select a gender';
  }

  return formErrors;
};

export const validateSigninForm = (formData) => {
  let formErrors = {};

  if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    formErrors.email = 'Invalid email format';
  }
  if (formData.password.length < 6) {
    formErrors.password = 'Password must be at least 6 characters long';
  }

  return formErrors;
};

