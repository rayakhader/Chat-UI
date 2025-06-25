import axios from 'axios';
import { setupInterceptors } from './interceptors';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com', // set via .env
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

setupInterceptors(axiosInstance);

export default axiosInstance;
