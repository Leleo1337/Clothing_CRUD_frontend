import axios from 'axios';
import { removeToken } from './authService';
import { toast } from 'react-toastify';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

api.interceptors.response.use(
	(respose) => respose,
	(error) => {
		if (error.response && error.response.status === 401) {
			removeToken();
            toast.error('expired token, please login again')
		}
		return Promise.reject(error);
	},
);

export default api;
