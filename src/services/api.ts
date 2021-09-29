import axios from "axios";

export const API_KEY = 'dce1ecff0d944119bd054b7f18902c8e';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
});

export default axiosInstance;