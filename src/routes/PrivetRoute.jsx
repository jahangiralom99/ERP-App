import { useEffect } from "react";
import { getStoredCart } from "../utilities/function";
import { toast } from "react-toastify";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { url } = getStoredCart("login-info");
  const navigate = useNavigate();
    const location = useLocation();
    


  useEffect(() => {
    if (!url) {
      toast("You have to log in first");
    }
  }, [url]);
    

    // local storage usr not find and return to login page
  if (url) {
    navigate("/");
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
