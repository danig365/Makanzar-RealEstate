import axios from "axios";

const api = axios.create({
  baseURL: "/api/proxy", // 👈 now points to our proxy route
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
