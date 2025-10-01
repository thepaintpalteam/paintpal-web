
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://paint.bugreaper.link/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  config => {
    const savedToken: string | null = localStorage.getItem('token');
    const parsedToken: string | null = savedToken ? savedToken : null;
    if (parsedToken) {
      config.headers.Authorization = `Bearer ${parsedToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      console.log(error);
    }
    return Promise.reject(error);
  },
);

export default apiClient;
