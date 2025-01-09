import envConfig from "@/config/envConfig";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfig.baseDevelopmentApi,
});

export default axiosInstance;
