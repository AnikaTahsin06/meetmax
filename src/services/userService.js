// src/services/userService.js
import axios from 'axios';

export const createUser = async (formData) => {
    try {
        const { data: users } = await axios.get('http://localhost:8000/users');

        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

        const newUser = { ...formData, id: newId };

        await axios.post('http://localhost:8000/users', newUser);
    } catch (error) {
        throw new Error('Error signing up:', error);
    }
};
