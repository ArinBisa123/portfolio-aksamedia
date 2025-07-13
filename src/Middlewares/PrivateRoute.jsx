import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AppRoute } from "@/enums/AppRoute";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to={AppRoute.LOGIN} state={{ from: location }} replace />;
  }
  return <Outlet />;
};
// export default function PrivateRoute({ children }) {
//   return children; // lewati auth dulu sementara
// }

export default PrivateRoute;
