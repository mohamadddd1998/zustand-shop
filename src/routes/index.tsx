// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../pages/error-page";
import MainLayout from "../layout/MainLayout";
import LoadingFallback from "../shared/components/loading/LoadingFallback";
import AuthLayout from "../layout/AuthLayout";
import LayoutProtectedRoutes from "./LayoutProtectedRoutes";
import AuthProtectedRoutes from "./AuthProtectedRoutes";

export const Home = lazy(() => import("../pages/home"));
export const LoginPage = lazy(() => import("../pages/login"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutProtectedRoutes>
        <MainLayout />
      </LayoutProtectedRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: (
      <AuthProtectedRoutes>
        <AuthLayout />
      </AuthProtectedRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
]);
