import axios from 'axios';

const baseApi = import.meta.env.VITE_API_URL;

export const api = axios.create({
    baseURL: baseApi,
    timeout: 200000,
  });

  export function setAuthHeader(token: string) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
  
  export function clearAuthHeader() {
    delete api.defaults.headers.Authorization;
  }