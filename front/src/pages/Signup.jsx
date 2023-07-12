import {useState, useEffect, useContext} from 'react'

import { AuthContext } from '../components/AuthContext';
const Signup = ({children}) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const datas = useContext(AuthContext)
    const handleSubmit = async (event) => {
        console.log(datas)
      event.preventDefault();
    
        try {
             const user = await datas.signup(email,password,name);    
        }
        catch (error){
 
            console.log(error)
        }
      // Perform form validation and registration logic here
      // You can add your own validation rules and backend integration
  
      // Reset form fields after submission
    //   setName('');
    //   setUsername('');
    //   setEmail('');
    //   setPassword('');
    //   setVerifyPassword('');
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
        {/* <label>
            Username:
            <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
        </label> */}
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