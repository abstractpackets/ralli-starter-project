import { Amplify, Auth } from 'aws-amplify'; 
import { useState, useEffect, useContext, createContext} from 'react';
import {realAuthProvider} from './AuthProvider';
import App from '../App';

Amplify.configure({
  Auth: {
    region: import.meta.env.VITE_AWS_REGION,
    userPoolId: import.meta.env.VITE_COGNITO_USER_POOL,
    userPoolWebClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
    mandatorySignIn: false,
    signUpVerificationMethod: 'code', // 'code' | 'link'
},
});

export const AuthContext = createContext();

const currentConfig = Auth.configure();

export  function AuthProvider({children}){
  const {currentUser} = realAuthProvider();

  const [user, setUser] = useState(null) 
  const [id, setId] = useState(null) 

  useEffect(()=>{
 
      if(!user){
        loader()
      }

  }, [user])

  async function loader(){
    let res = await currentUser()
    console.log(res)
    let info = {...res.attr}
    console.log(info)
    setUser({
      name: info.name,
      email: info.email,
      sub: info.sub
    })
    setId(info.sub)
   
  }

 
  return <AuthContext.Provider value={{user, id}}>{children}</AuthContext.Provider>;
}

