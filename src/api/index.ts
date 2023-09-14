import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    Accept: '*/*',
  },
});

request.interceptors.request.use(
  (config) => {
    const storage = localStorage.getItem('AUTH_TOKEN');
    const AUTH = JSON.parse(storage || '');
    if (AUTH['token']) {
      config.headers.Authorization = `Bearer ${AUTH['token']}`;
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
