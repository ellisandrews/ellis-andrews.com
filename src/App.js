import React from 'react'
import About from './About'
import Blog from './Blog'
import NavBar from './NavBar'
import Projects from './Projects'
import './App.css'


const App = () => {
  return (
    <div id="app" className="container">
      <NavBar/>
      <About/>
      <Projects/>
      <Blog/>
    </div>
  )
}


export default App
