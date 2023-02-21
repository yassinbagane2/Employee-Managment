import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  return true ? <Outlet /> : <Navigate to="/login" exact />;
};

export default ProtectedRoutes;
