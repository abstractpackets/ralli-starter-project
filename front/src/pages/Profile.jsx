import {Auth} from "aws-amplify"
import { useContext } from "react"
import { AuthContext } from "../components/AuthContext"
const Profile = ({children}) => {
    
    const datas = useContext(AuthContext)
  
    return (
        <div>
            <p>hi {datas.user.name} your email is {datas.user.email}</p>
        </div>
    )
}

export default Profile