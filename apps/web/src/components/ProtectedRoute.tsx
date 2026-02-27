import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useAuth();

  // Wait until auth check finishes
  if (loading) {
    return <div>Loading...</div>;
  }

  // If not logged in → redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → allow access
  return <>{children}</>;
};

export default ProtectedRoute;