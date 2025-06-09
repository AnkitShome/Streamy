
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

const createClerkApi = () => {
   const { getToken } = useAuth();

   const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000', // fallback
   });

   // Attach token to each request
   api.interceptors.request.use(async (config) => {
      const token = await getToken();
      if (token && config.headers) {
         config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
   });

   return api;
};

export default createClerkApi;
