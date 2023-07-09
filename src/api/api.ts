import axios from 'axios';

const api = axios.create({
    baseURL: 'api.example.com.br',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Response-Type': 'application/json',
    },
    timeout: 50000,
});

export default api;
