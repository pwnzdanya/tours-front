import axios from 'axios';

export const apiConfig = axios.create({
  baseURL: 'http://localhost:7777/api/v1/',
  withCredentials: true,
});
