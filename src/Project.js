import React, { Component } from 'react'


class Project extends Component {
  
  render() {

    const { index, project: { description, imageURL, title } } = this.props

    return (
      <div id={`project-${index}`} className="project-container card border">
        <img src={imageURL} alt={title} className="project-image card-img"/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
}


export default Project
