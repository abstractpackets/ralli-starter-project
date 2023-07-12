import {Auth} from "aws-amplify"
import { useContext } from "react"
import { AuthContext } from "../components/AuthContext"
const Profile = ({children}) => {
    
    const datas = useContext(AuthContext)
    
    return (
        <div>
     hello 
        </div>
    )
}

export default Profile