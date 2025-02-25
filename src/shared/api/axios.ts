import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: {
    "content-type": "application/json",
  },
  withCredentials: true,
});

export const serverAxiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "content-type": "application/json",
  },
  withCredentials: true,
});
