import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-j1o9.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;