import axios from 'axios';
import TokenStorage from './token';

export const BASE_URL = 'http://localhost:8080';

const tokenStorage = new TokenStorage();

const token = tokenStorage.get();

export const API = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', Authorization: token },
});

API.interceptors.response.use(
  (res) => {
    if (res.data.token) {
      tokenStorage.save(res.data.token);
    }
    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);
