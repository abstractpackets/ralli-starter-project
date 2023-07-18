import './App.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RequireAuth from './components/RequireAuth' 
import {Routes, Route} from 'react-router-dom'
import { AuthContext } from './components/Auth';
import Layout from './Layout'
import Home from './pages/Home'
import createDBuser from './lib/CreateUserDB';
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Verify from './pages/Verify'
import { useContext, useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100,
      cacheTime: 100
    }
  }
})



const App = () => {
  const {user, id} = useContext(AuthContext)

    return (

        <QueryClientProvider client={queryClient}>
     
            <Routes id={id}>
              <Route element={<Layout  id={id}/>}>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/verify" element={<Verify />} />
                <Route element={<RequireAuth user={user}/>}>
                     <Route path="/profile/:id" element={<Profile user={user} id={id}/>}/>
                </Route>
              </Route>
            </Routes>
        

        </QueryClientProvider>
    )

}
 
export default App
