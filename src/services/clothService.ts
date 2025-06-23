import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "./authService";

const API_URL = import.meta.env.VITE_API_URL;

export async function getAllClothes() {
   try {
      const token = getToken();
      const response = await axios.get(`${API_URL}/api/v1/clothes`, { headers: { Authorization: `Bearer ${token}` } });

      return response.data.data;
   } catch (error: any) {
      console.error(error);
      toast.error(error.message);
   }
}

export async function getCloth(clothID: string | undefined) {
   try {
      const token = getToken();
      const response = await axios.get(`${API_URL}/api/v1/clothes/${clothID}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.data;
   } catch (error) {
      console.error(`something went wrong - ${error}`);
      toast.error("Erro ao buscar roupa");
   }
}

export async function createCloth(formData: any) {
   try {
      const token = getToken();
      const response = await axios.post(`${API_URL}/api/v1/clothes`, formData, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
   } catch (error: any) {
      console.log("Something went wrong", error);
      toast.error(error.response.data.msg);
   }
}

export async function updateCloth(clothID: string | undefined, formData: any) {
   try {
      const token = getToken();
      const response = await axios.patch(`${API_URL}/api/v1/clothes/${clothID}`, formData, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
   } catch (error: any) {
      console.error(`something went wrong - ${error}`);
      toast.error(error.response.data.msg);
   }
}

export async function deleteCloth(clothID: string | undefined) {
   if (!window.confirm("Você tem certeza que deseja excluir esse item?")) return;
   try {
      const token = getToken();
      const response = await axios.delete(`${API_URL}/api/v1/clothes/${clothID}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
   } catch (error: any) {
      console.error(`something went wrong - ${error}`);
      toast.error(error.response.data.msg);
   }
}
