import { Amplify, Auth } from 'aws-amplify'; 

export function realAuthProvider () {

    async function confirmSignup(email,code){
      try {
        await Auth.confirmSignUp(email, code);
      
        window.location.href = "/"
      } catch (error) {
        console.log('error confirming sign up', error);
      }
    }

    async function currentUser(){
      const current = Auth.currentAuthenticatedUser();
      const {...attributes} = await Auth.currentUserInfo();
      console.log(attributes)
      const attr = {...attributes.attributes}
      console.log(attr)
      
      return {attr}
     
    }

    async function getSession(){
      Auth.currentSession()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    }

    async function signin(username, password){
      try {
        const user = await Auth.signIn(username, password);
        realAuthProvider.isAuthenticated = true
        return user   
      } catch (error) {
        console.log('error signing in', error);
      }
    }

    async function signout(){
      try {
        await Auth.signOut();
        realAuthProvider.isAuthenticated = false;
      } catch (error) {
        console.log('error signing out: ', error);
      }
    }


    async function signup(email, password, ame){
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
    }

  return {currentUser, signup, getSession, signout, signin}
  }
  