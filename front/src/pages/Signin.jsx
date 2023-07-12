import { signIn } from "../components/Auth";
import { useState } from "react";
import {Auth} from "aws-amplify"


const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const user = await signIn(email, password);
          console.log(`from signin page - ${user}`)
 
          
    }
    catch (error){
        console.log(error)
    }     
      // Perform form validation and registration logic here
      // You can add your own validation rules and backend integration
  
    //   // Reset form fields after submission
    //   setEmail('');
    //   setPassword('');

    };      
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