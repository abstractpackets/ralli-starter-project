import {Auth} from "aws-amplify"
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";


const Verify = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const params = useParams();
    const datas = useContext(AuthContext)

    const handleSubmit = async (event) => {
      event.preventDefault();
      try{
        console.log(email, code)
      datas.confirmSignup(email, code);

      
      
      }
      catch(error){
        console.log(error)
      }
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
                Code:
                <input
                type="text"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                />
            </label>
            <button type="submit">Confirm Email</button>
            </form>
        </div>
  
    )
}

export default Verify