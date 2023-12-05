import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  
  return (
  <header id="headerTag">

    <h1 id="headerHeading">ASSIGNMENT</h1>
    <nav id="navTag">
    <ul id="navigationList">

    <li className="navigationList_item"><Link className="navigationList_linkTag" to="/">Home</Link> </li>
      <li className="navigationList_item" ><Link className="navigationList_linkTag" to="/doctors">Our doctors</Link></li>

      

    </ul>
    </nav>
    </header>
  )
    
 
}

export default Header