import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <nav>
      
      <h1>SAM</h1>
      <ul>
        <li>
          <a href=""><Link to="/home">Home </Link></a>
          <a href=""><Link to="/User">User</Link></a>
          <a href=""><Link to="/About">About</Link></a>
          <a href=""><Link to="/Contact">Contact</Link></a>
          
        </li>
        </ul>
    </nav>
  )
}

export default Navbar
