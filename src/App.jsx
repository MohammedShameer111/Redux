import React from 'react'
import User from './pages/User'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />}/>

          <Route path="/User" element={<User />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
      
      </Routes>
    </BrowserRouter>

  )
}

export default App
