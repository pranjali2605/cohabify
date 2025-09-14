import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", // backend API
  withCredentials: true, // needed for JWT cookies
});

export default api;
