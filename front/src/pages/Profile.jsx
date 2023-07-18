import {Auth} from "aws-amplify"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import createDBuser from "../lib/CreateUserDB"
const Profile =  ({user}) => {
    console.log(user)
    // give usequery a key of what you're requesting
    // the overall term, and then the id.. 
    // if you don't have user info [1] in cache then go run createDBuser
    if(user){
        const results = useQuery(["user info", {user}], createDBuser);
        if (results.isLoading){
            return (
                <div>
                    loading!
                </div>
            )
        }
    }
    // no await you cannot await in a render function


    return (
        <div className="profile">
        hi {user.name} - {user.sub}
        </div>


// {result.data.user}
// {result.data.email}
    )
}

export default Profile