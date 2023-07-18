import {Auth} from "aws-amplify"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import createDBuser from "../lib/CreateUserDB"
const Profile =  ({user}) => {
    console.log(user)
    // give usequery a key of what you're requesting
    // the overall term, and then the id.. 
    const results = useQuery(["user info", {user}], createDBuser)
    // no await you cannot await in a render function
    // if you don't have user info [1] in cache then go run createDBuser
    if(results.isLoading){
        return(
            <div>Loading! Please wait!</div>
        )
    }
    const {data} = results
    console.log(data)

    return (
        <div className="profile">
      hi {data.name} welcome! your email is {data.email}
     
        </div>


// {result.data.user}
// {result.data.email}
    )
}

export default Profile