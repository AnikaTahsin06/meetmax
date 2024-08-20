// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/users';

// Fetch all users
export const fetchUsers = async () => {
    try {
        const { data: users } = await axios.get(API_URL);
        return users;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};

// Helper function to generate a new user ID
const generateNewId = (users) => {
    if (users.length === 0) return 1;

    // Ensure the IDs are treated as numbers and find the maximum ID
    const maxId = Math.max(...users.map(user => Number(user.id)));

    return maxId + 1;
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
        const { data: users } = await axios.get(API_URL);
        
        // Check if there's a user with matching email and password
        const user = users.find(user => user.email === formData.email && user.password === formData.password);

        // Return a boolean based on whether a matching user was found
        return !!user;
    } catch (error) {
        throw new Error('Error during sign in:', error);
    }
};