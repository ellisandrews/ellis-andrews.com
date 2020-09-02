import React, { Component } from 'react'


class Project extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      showDetails: false
    }
  }

  handleMouseEnter = e => {
    this.setState({ showDetails: false})
  }
  
  handleMouseLeave = e => {
    this.setState({ showDetails: true })
  }

  render() {

    const { project: { title, imageURL, githubURL, deploymentURL, videoURL, tags }, index } = this.props

    return (
      <div id={`project-${index}`} className="card border" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>


        {
          this.state.showDetails ?
          
          <img src={imageURL} alt={title} className="card-img"/>

          :

          <div id={`project-${index}-details`}>
            <h3>{title}</h3>
            <ul>
              <li>GitHub: {githubURL}</li>
              <li>Deployment: {deploymentURL}</li>
              <li>Video: {videoURL}</li>
              <li>Tags: { tags.join(', ')}</li>
            </ul>    
          </div>
        }

        
      </div>
    )
  }
}


export default Project
