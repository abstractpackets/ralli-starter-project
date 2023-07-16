import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import {Auth} from "aws-amplify"
import {  Link, useNavigate, useLocation, Navigate} from 'react-router-dom'

const Signin = ({children}) => {
    let navigate = useNavigate();
    let location = useLocation();
    let datas = useContext(AuthContext)
   
    let from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
         const user = await datas.signin(email, password);
         datas.getAttr(datas.setUser)
      
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