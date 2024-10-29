import { useEffect } from "react";
import { getStoredCart } from "../utilities/function";
import { toast } from "react-toastify";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { url } = getStoredCart("login-info");
  const location = useLocation();

  useEffect(() => {
    if (!url) {
      toast("You have to log in first");
    }
  }, [url]);

  // If the user is not logged in, redirect to login page
  if (!url) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User is logged in, render the children
  return children;
};

export default PrivateRoute;
