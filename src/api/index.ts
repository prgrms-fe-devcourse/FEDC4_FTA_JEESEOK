import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
    },
});

export default request