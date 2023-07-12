import {Auth} from "aws-amplify"
import { useContext } from "react"
import { AuthContext } from "../components/AuthContext"
const Profile = ({children}) => {
    
    const datas = useContext(AuthContext)
    console.log(datas)
    return (
        <div>
     welcome! email: ${datas.user.email}-- user sub: ${datas.user.sub} -- first name: ${datas.user.name}
        </div>
    )
}

export default Profile