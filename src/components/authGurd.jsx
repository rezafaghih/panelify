// components/authGurd.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

import GlobalConfig from "../configs/global.json"

export default function AuthGuard({ children }) {
  const { isAuth, isChecking } = useAuth();

  // ⏳ تا زمانی که auth مشخص نشده
  if (isChecking) {
    return <h1>is checking</h1>; // یا Loader
  }

  if (!isAuth && GlobalConfig.auth.enable) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
