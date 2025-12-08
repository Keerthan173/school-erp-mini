// This file makes API calls simple, clean, and secure and automatically attaches our login token (JWT) to every request.

import axios from "axios";

const API = axios.create({
  baseURL: "https://school-erp-mini-backend.onrender.com/api", // change after deployment
});

// Add token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
