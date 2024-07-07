import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export const axiosInstance = axios.create({ baseURL: BASE_URL });
