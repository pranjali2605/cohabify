import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if your backend runs on another port
});

export default api;
