import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class NavBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <NavLink to="/" exact activeClassName="active">Ellis Andrews</NavLink> 
        <div class="nav-right">
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        </div>
      </nav>
    )    
  }

}


export default NavBar
