import axios from "axios";

const api = axios.create({
  // baseURL: "http://127.0.0.1:4000",
  baseURL: "https://myportfolio-backend-b948.onrender.com/api/v1",
});

export default api;