import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
