import { useContext, type ReactNode } from 'react';
import { AuthContext } from '../../context/authContext';
import { Navigate } from 'react-router';

export default function PublicRoute({ children }: { children: ReactNode }) {
	const { isAuthenticated } = useContext(AuthContext);

	if (isAuthenticated) return <Navigate to='/home' />;

	return children;
}
