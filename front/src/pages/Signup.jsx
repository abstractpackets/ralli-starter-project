import {useState} from 'react'
import {Navigate, useNavigate, useLocation} from 'react-router-dom'

import { realAuthProvider } from "../components/AuthProvider";
const Signup = ({children}) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
  
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const handleSubmit = async (event) => {
      const {signup} = realAuthProvider();
      event.preventDefault();
    
        try{           
             const user = await signup(email,password,name);    
            }
        catch (error){
             console.log(error)
            }

    };   
    return (
        <div className="form">
                <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        </label>
        <br />
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
        <br />
        <label>
            Verify Password:
            <input
            type="password"
            value={verifyPassword}
            onChange={(event) => setVerifyPassword(event.target.value)}
            />
        </label>
        <br />
        <button type="submit">Register</button>
        </form>
        </div>
    )
}

export default Signup