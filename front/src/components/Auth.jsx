import { Amplify, Auth } from 'aws-amplify'; 
import { useState, useEffect, useContext} from 'react';
import {useLocation, useNavigate, Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext';
Amplify.configure({
  Auth: {

    region: import.meta.env.VITE_AWS_REGION,
    userPoolId: import.meta.env.VITE_COGNITO_USER_POOL,
    userPoolWebClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
    mandatorySignIn: false,
    signUpVerificationMethod: 'code', // 'code' | 'link'

    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    // cookieStorage: {
    //   // REQUIRED - Cookie domain (only required if cookieStorage is provided)
    //   domain: '.yourdomain.com',
    //   // OPTIONAL - Cookie path
    //   path: '/',
    //   // OPTIONAL - Cookie expiration in days
    //   expires: 365,
    //   // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    //   sameSite: 'strict' | 'lax',
    //   // OPTIONAL - Cookie secure flag
    //   // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
    //   secure: true,
    // },

    // OPTIONAL - customized storage object
    // storage: MyStorage,
},
});


// You can get the current config object
const currentConfig = Auth.configure();


export  function AuthProvider({children}){
  let [user, setUser] = useState(null)
  let authStatus = realAuthProvider.authStatus
  let signup = realAuthProvider.signup
  let signin = realAuthProvider.signin
  let confirmSignup = realAuthProvider.confirmSignup
  let signout = realAuthProvider.signout
  let getAttr = realAuthProvider.getAttr
  // let getSession = realAuthProvider.getSession

  useEffect(() => {
    Auth.currentSession()
    .then((data) => {
      console.log('from .then')
      // this is jwt / token data
      console.log('below data in .then')
    })
    .catch((err) => console.log(err));
    realAuthProvider.getAttr(setUser)

  }, []);

  let value = {user, setUser,signup, signin,  getAttr, authStatus, confirmSignup, signout}
 
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const realAuthProvider = {
  isAuthenticated: false,
  
  async signup(email, password,name){
    try {
      let from = location.state?.from?.pathname || "/";
   
      const { user } = await Auth.signUp({
          username: email,
          password: password,
          attributes: {
            name: name,
            email: email
          },
          autoSignIn: { // optional - enables auto sign in after user is confirmed
            enabled: true,
          }
        });
       
        realAuthProvider.isAuthenticated = true
      
        return(user)
        
        // window.location.href = `/verify?email=${email}`

    } catch (error) {
  
      console.log('error signing up:', error);
    }
  },
  async getAttr(setUser){

    const attr = Auth.currentAuthenticatedUser()
    .then(({attributes}) => {

      const attr = attributes
      console.log(attr)    
      setUser({
        sub: attr.sub,
        email: attr.email,
        name: attr.name
      })  
      return attr
    })
    .catch((err)=> console.log(err))
 
  },

  // async authStatus(setUser) {
    
  //   let navigate = useNavigate();
  


    

  
  //   return (
  //     <p>sdasd
  //       Welcome !{" "}
  //       <button
  //         onClick={() => {
  //           AuthProvider.signout(() => navigate("/"));
  //         }}
  //       >
  //         Sign out
  //       </button>
  //     </p>
  //   );
  // },

  async confirmSignup(email,code){
    try {
      await Auth.confirmSignUp(email, code);
      realAuthProvider.isAuthenticated = true
      window.location.href = "/"
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  },

  async signin(username, password){
    try {
      const user = await Auth.signIn(username, password);
      // console.log(user)
      // setUser({})
      return user
      
         
    } catch (error) {
      console.log('error signing in', error);
    }
  },

  async signout(){
    try {
      await Auth.signOut();
      realAuthProvider.isAuthenticated = false;
    } catch (error) {
      console.log('error signing out: ', error);
    }
  },
  // getSession(){
  //   Auth.currentAuthenticatedUser({
  //     bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  //   })
  //     .then((user) => console.log(user))
  //     .catch((err) => console.log(err));
  // }
}

// export function useAuth() {
//   return useContext(AuthContext);
// }


// realAuthProvider.getSession()
// // Send confirmation code to user's email
// Auth.forgotPassword(username)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // Collect confirmation code and new password, then
// Auth.forgotPasswordSubmit(username, code, new_password)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


//   Auth.currentAuthenticatedUser({
//     bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
//   })
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err));

//     Auth.currentSession()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));