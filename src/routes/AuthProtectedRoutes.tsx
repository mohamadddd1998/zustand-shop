import { useIsLogin } from "@/features/login/store/useLoginStore";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const isLogin = useIsLogin();

  const location = useLocation();
  const from = location.state?.from || "/";

  if (isLogin) return <Navigate to={from} />;

  return children;
};
export default AuthProtectedRoutes;
