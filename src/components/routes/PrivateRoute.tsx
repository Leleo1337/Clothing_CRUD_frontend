import { useContext, type ReactNode } from 'react';
import { AuthContext } from '../../context/authContext';
import { Navigate } from 'react-router';

export default function PrivateRoute({ children }: { children: ReactNode }) {
	const { isAuthenticated } = useContext(AuthContext);

	if (!isAuthenticated) return <Navigate to='/' />;

	return children;
}
