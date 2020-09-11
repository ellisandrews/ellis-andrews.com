import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Home from './Home'
import NavBar from './NavBar'
import Projects from './Projects'
import './App.css'


const App = () => {
  return (
    <Router>
      <div id="app">
        <NavBar/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


export default App
