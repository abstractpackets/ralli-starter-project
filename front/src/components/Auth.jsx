import { Amplify, Auth } from 'aws-amplify';

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
export async function signUp(email, password, name) {

  try {
    
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
      console.log(user);
      return(user)
      window.location.href = `/verify?email=${email}`
    console.log(user);
  } catch (error) {

    console.log('error signing up:', error);
  }
}


export async function confirmSignUp(email, code) {
    try {
      await Auth.confirmSignUp(email, code);
      window.location.href = "/"
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

export async function signIn(username, password) {
  try {
    const user = await Auth.signIn(username, password);
    return JSON.stringify(user)
  } catch (error) {
    console.log('error signing in', error);
  }
}

export async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }


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