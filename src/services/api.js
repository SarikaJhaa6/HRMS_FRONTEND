import axios from 'axios';

const baseUrl = 'http://localhost:5000'; // Set your backend URL here

const api = axios.create({
  baseURL: baseUrl,
});

export const registerUser  = (userData) => api.post('/register', userData);
export const loginUser  = (credentials) => api.post('/login', credentials);
export const getUserData = (token) => api.get('/user', { headers: { Authorization: `Bearer ${token}` } });

export default api;