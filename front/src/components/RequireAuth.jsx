import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useLocation, Navigate } from "react-router-dom";
export default function RequireAuth({ children }) {
    let datas = useContext(AuthContext)
    console.log(datas)
    // const session = getSession()
  
    let location = useLocation();
  
    if (!datas) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return children;
  }