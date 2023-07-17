import { useState } from "react";
import { realAuthProvider } from "../components/AuthProvider";
import {  Link, useNavigate, useLocation, Navigate} from 'react-router-dom'

const Signin = (props) => {
    console.log(props)
   
    let {signin} = realAuthProvider();
    let navigate = useNavigate();
    let location = useLocation();
 
    let from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
         const user = await signin(email, password);
         MyContext.setUser({
            sub: user.attributes.sub,
            email: user.attributes.email,
            name: user.attributes.name
          })
      
        navigate(from, { replace: true });    
    }
    catch (error){
        console.log(error)
    }};      

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <button type="submit">Register</button>
            </form>
        </div>
  
    )
}

export default Signin