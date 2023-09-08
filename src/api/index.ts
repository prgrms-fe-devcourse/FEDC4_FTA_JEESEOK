import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    Accept: '*/*',
  },
});

request.interceptors.request.use(
  (config) => {
    const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');
    if (AUTH_TOKEN) {
      config.headers.Authorization = `Bearer ${AUTH_TOKEN}`;
    }
    return config;
  },
  (err) => {
    console.error(err);
    return false;
  }
);

request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    console.error(error);
    return false;
  }
);

export default request;
