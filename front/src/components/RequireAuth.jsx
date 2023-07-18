import { useLocation, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import Profile from "../pages/Profile";
export default function RequireAuth({ user, children}) {

  let location = useLocation();

    if(user===null){
      return <Navigate to="/signin" state={{from:location}} replace/>;
    }
    return <Profile user={user}/>
  }