import { Navigate, Outlet } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';

export function ProtectedRoute() {
  const { userData } = useUserData();

  return userData ? <Outlet /> : <Navigate to="/" />;
}
