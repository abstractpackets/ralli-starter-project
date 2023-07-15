import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useLocation, Navigate } from "react-router-dom";
export default function RequireAuth({ children }) {
    let datas = useContext(AuthContext)
    console.log(datas.user)
    let location = useLocation();
  
    if (true) {
   
      return children;
    }else{
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    
  }