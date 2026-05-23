import { useIsLogin } from "@/features/login/store/useLoginStore";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const LayoutProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const isLogin = useIsLogin();
  const location = useLocation();

  if (!isLogin)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};
export default LayoutProtectedRoutes;
