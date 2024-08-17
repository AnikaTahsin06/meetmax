// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/users';

// Helper function to generate a new user ID
const generateNewId = (users) => {
    return users.length > 0 ? users[users.length - 1].id + 1 : 1;
};

// Create a new user (Sign Up)
export const createUser = async (formData) => {
    try {
        const { data: users } = await axios.get(API_URL);
        const newId = generateNewId(users);

        const newUser = { ...formData, id: newId };
        await axios.post(API_URL, newUser);
    } catch (error) {
        throw new Error('Error signing up:', error);
    }
};

// Authenticate a user (Sign In)
export const signinUser = async (formData) => {
    try {
        const { data: users } = await axios.get(API_URL, {
            params: {
                email: formData.email,
                password: formData.password,
            }
        });

        // Check if the user exists and return a boolean
        return users.length > 0;
    } catch (error) {
        throw new Error('Error during sign in:', error);
    }
};
