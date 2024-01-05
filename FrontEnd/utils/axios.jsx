import axios from "axios";

const BASE_API_URL = "https://income-and-expense-tracker.vercel.app/";

const instanceAxios = axios.create({
  // Configuration
  baseURL: BASE_API_URL,
  timeout: 5000,
});

export default instanceAxios;
