import {Auth} from "aws-amplify"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../components/AuthContext"
const Profile =  ({children}) => {
    const {id} = useParams;
    const datas = useContext(AuthContext)
   
    return (
        <div className="profile">
            hi {datas.user.name}! this is from python and postgres
        </div>
    )
}

export default Profile