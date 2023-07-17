import {Auth} from "aws-amplify"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const Profile =  ({user}) => {
    console.log(user)
    return (
        <div className="profile">
        hi {user.name} - {user.sub}
        </div>
    )
}

export default Profile