import axios from 'axios';
import apiKey from './apiKey';

const params = apiKey();

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params,
});

export default api;
