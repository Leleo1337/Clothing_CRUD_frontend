import { useEffect, useState } from 'react';
import * as authService from '../services/authService';
import { AuthContext } from '../context/authContext';
import type { authProviderProps } from '../types/authProviderProps';
import type { loginFormTypes } from '../types/loginFormTypes';
import { toast } from 'react-toastify';

function AuthProvider({ children }: authProviderProps) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	async function login(formData: loginFormTypes) {
		try {
            await authService.login(formData);
			setIsAuthenticated(true);
            toast.success(`Bem vindo de volta!`)
		} catch (error) {
			setIsAuthenticated(false);
			throw error;
		}
	}

	async function logout() {
		authService.removeToken();
		setIsAuthenticated(false);
	}

	useEffect(() => {
		const token = authService.getToken();
		if (token) setIsAuthenticated(true);
	}, []);

	return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
