import { createContext } from 'react';
import type { loginFormTypes } from '../types/loginFormTypes';

type authContextTypes = {
    isAuthenticated: boolean
    login: (arg0: loginFormTypes) => Promise<void>
    logout: () => void
}

export const AuthContext = createContext<authContextTypes>({
	isAuthenticated: false,
	login: async () => {},
	logout: () => {},
});
