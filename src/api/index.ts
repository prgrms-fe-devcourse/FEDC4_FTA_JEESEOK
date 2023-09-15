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
    if (storage) {
      const AUTH = JSON.parse(storage);
      if (AUTH['token']) {
        config.headers.Authorization = `Bearer ${AUTH['token']}`;
      }
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default request;
