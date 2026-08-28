import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import PageLoader from "@/pages/PageLoader";

type AdminRouteProps = {
  children: React.ReactNode;
};

export default function AdminRoute({
  children,
}: AdminRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}