import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Browse from './pages/Browse'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/browse" element={<Browse />} />
         </Routes>
      </>

   )
}

export default App
