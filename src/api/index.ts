import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');

if (AUTH_TOKEN) {
  request.defaults.headers.common['Authorization'] = AUTH_TOKEN;
}

export default request;
