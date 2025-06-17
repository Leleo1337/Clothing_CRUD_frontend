import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

export async function login(formData: any) {
   try {
      const response = await axios.post(`${API_URL}/api/v1/auth/login`, formData);
      const token = response.data.token;
      localStorage.setItem("authToken", token);
   } catch (error: any) {
      toast.error(error.response.data.msg);
      console.error(error);
   }
}

export function getToken() {
   return localStorage.getItem("authToken");
}

export function removeToken() {
   return localStorage.removeItem("authToken");
}
