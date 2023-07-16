import {Auth} from "aws-amplify"
import { useContext } from "react"
import { AuthContext } from "../components/AuthContext"
const Profile =  ({children}) => {

    const datas = useContext(AuthContext)
    if(datas.profile===null){
        datas.loadProfileData(datas.user, datas.setProfile).then((data) =>{console.log('hi')
        datas.setProfile(
         {
            name: data.name,
            email: data.email
        }
        )
    })
    }


   
    // console.log(prof)
    console.log(datas.profile)
    return (
        <div className="profile">
            <p>hi from python and postgres! {datas.profile.name} your email is {datas.profile.email}</p>
        </div>
    )
}

export default Profile