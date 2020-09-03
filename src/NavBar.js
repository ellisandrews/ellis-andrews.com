import React, { Component } from 'react'
import { Link } from 'react-scroll'


class NavBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li><Link to="about" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
          <li><Link to="projects" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link></li>
          <li><Link to="blog" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>Blog</Link></li>
        </ul>
      </nav>
    )
  }

}


export default NavBar
