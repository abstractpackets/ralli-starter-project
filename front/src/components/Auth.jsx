import { Auth } from 'aws-amplify';
import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

    // REQUIRED - Amazon Cognito Region
    region: import.meta.env.AWS_REGION,

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: 'XX-XXXX-X',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: import.meta.env.COGNITO_USER_POOL,

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: import.meta.env.COGNITO_CLIENT_ID,

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
    // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
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
export async function signUp() {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,          // optional
        phone_number,   // optional - E.164 number convention
        // other custom attributes 
      },
      autoSignIn: { // optional - enables auto sign in after user is confirmed
        enabled: true,
      }
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}


export async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

export async function signIn() {
  try {
    const user = await Auth.signIn(username, password);
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