import {Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Verify from './pages/Verify'
function App() {

  return (
  <div>
   <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route
          // path="/profile/{:id}"
          // element={
          //   <RequireAuth>
          //     <Profile />
          //   </RequireAuth>
          // }
        />
      </Route>
    </Routes>
  </div>
  )
}

export default App
