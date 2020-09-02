import React, { Component } from 'react'


class NavBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
    )
  }

}


export default NavBar
