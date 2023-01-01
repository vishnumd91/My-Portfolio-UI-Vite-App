import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.VITE_BASE_APP_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
