import axios from "axios";
import { toast } from "react-toastify";

const API_URL = 'http://localhost:3000';

export async function getAllCloths() {
   try {
      const response = await axios.get(`${API_URL}/api/v1/cloths`);
      return response.data.data;
   } catch (error) {
      console.error(`something went wrong - ${error}`);
      toast.error("Erro ao buscar roupas");
   }
}

export async function getCloth(clothID: string) {
   try {
      const response = await axios.get(`${API_URL}/api/v1/cloths/${clothID}`);
      return response.data.data;
   } catch (error) {
      console.error(`something went wrong - ${error}`);
      toast.error("Erro ao buscar roupa");
   }
}

export async function createCloth(formData: any) {
   try {
      const response = await axios.post(`${API_URL}/api/v1/cloths`, formData);
      return response.data;
   } catch (error) {
      console.error(`something went wrong - ${error}`);
      toast.error("Erro ao criar roupa");
   }
}

export async function updateCloth(clothID: string, formData: any) {
   try {
      const response = await axios.patch(`${API_URL}/api/v1/cloths/${clothID}`, formData);
      return response.data;
   } catch (error) {
      console.error(`something went wrong - ${error}`);
      toast.error("Erro ao atualizar dados");
   }
}

export async function deleteCloth(clothID: string | undefined) {
   if (!window.confirm("Você tem certeza que deseja excluir esse item?")) return;
   try {
      const response = await axios.delete(`${API_URL}/api/v1/cloths/${clothID}`);
      return response.data;
   } catch (error) {
      console.error(`something went wrong - ${error}`);
      toast.error("Erro ao deletar roupa");
   }
}
