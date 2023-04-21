import { Navigate, useLocation } from "react-router-dom";
// import UserContext from "../../UserContext";
// import { useContext } from "react";

const ProtectedWrapper = ({ children }) => {
  const location = useLocation();
  // const { isAuthenticated } = useContext(UserContext);
  const isAuthenticated = sessionStorage.getItem("token");

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedWrapper;
