import api from "./api";

const API_URL = import.meta.env.VITE_API_URL;

export async function login(formData: any) {
   try {
      const response = await api.post(`${API_URL}/api/v1/auth/login`, formData);
      const token = response.data.token;
      localStorage.setItem("authToken", token);
   } catch (error: any) {
      throw error;
   }
}

export function getToken() {
   return localStorage.getItem("authToken");
}

export function removeToken() {
   return localStorage.removeItem("authToken");
}

