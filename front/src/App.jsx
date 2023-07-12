import {Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import Home from './Home'
import Profile from './Profile'
import Layout from './Layout'
import Signin from './Signin'
import Signup from './Signup'

function App() {

  return (
  <div>
   <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile/{:id}"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  </div>
  )
}

export default App
