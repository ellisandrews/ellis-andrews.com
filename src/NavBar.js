import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <Link to="/">Ellis Andrews</Link> 
        <div class="nav-right">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
    )    
  }

}


export default NavBar
