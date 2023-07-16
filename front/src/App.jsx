import './App.css'
import { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Home from './pages/Home'
import Profile from './pages/Profile'
import { AuthProvider } from './components/Auth'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import RequireAuth from './components/RequireAuth' 
import Verify from './pages/Verify'
import { AuthContext } from './components/AuthContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      cacheTime: 30000
    }
  }
})
const App = () => {

    return (
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
       
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/verify" element={<Verify />} />
                <Route
                  path="/profile/"
                  element={
                    <RequireAuth>
                      <Profile />
                    </RequireAuth>
                  }
                />
              </Route>
            </Routes>
        
        </QueryClientProvider>
    </AuthProvider>
    )

}
 
export default App
