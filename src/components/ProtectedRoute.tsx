import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import PageLoader from "@/pages/PageLoader";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoader />
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>;
}