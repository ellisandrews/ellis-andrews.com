import React, { Component } from 'react'
import { projects } from './data'
import Project from './Project'


class Projects extends Component {

  constructor(props) {
    super(props)

    // Eventually, projects may be fetched from a real backend.
    this.state = {
      projects: projects
    }
  }

  renderProjects = () => {
    return this.state.projects.map((project, i) => <Project project={project} key={i} index={i}/>)
  }

  render() {
    return (
      <section id="projects" className="border">
        <h3>Projects</h3>
        <div id="projects-container" className="flex-container">
          {this.renderProjects()}
        </div>
      </section>
    )
  }

}


export default Projects
