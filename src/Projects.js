import React, { Component } from 'react'
import { projects } from './data'
import Project from './Project'


class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    // Fetch projects. Eventually this will be from a real backend
    this.setState({
      projects: projects
    })
  }

  renderProjects = () => {
    return this.state.projects.map((project, i) => <Project project={project} key={i}/>)
  }

  render() {
    return (
      <div id="projects">
        <h3>Projects</h3>
        {this.renderProjects()}
      </div>
    )
  }

}


export default Projects
