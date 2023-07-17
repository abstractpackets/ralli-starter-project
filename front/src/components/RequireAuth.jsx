import { useLocation, Navigate, useParams  } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import Profile from "../pages/Profile";
export default function RequireAuth({ user, children}) {

  let location = useLocation();

    if(!user.sub){
      return <Navigate to="/signin" state={{from:location}} replace/>;
    }
    return <Profile user={user}/>
  }