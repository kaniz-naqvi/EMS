import { Navigate } from "react-router-dom";
import { LAYOUT_AUTH } from "./route-paths";

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to={LAYOUT_AUTH} replace />;
  }
  return children;
};

export default ProtectedRoute;
