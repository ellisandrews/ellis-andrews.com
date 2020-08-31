import React from 'react'


const Project = ({ project }) => {
  
  const { title, imageURL, githubURL, deploymentURL, videoURL, tags } = project
  
  return (
    <div id={`project-${title}`}>
      <h6>{title}</h6>
      <img src={imageURL} alt={title} height="200" width="200"/>
      <ul>
        <li>GitHub: {githubURL}</li>
        <li>Deployment: {deploymentURL}</li>
        <li>Video: {videoURL}</li>
        <li>Tags: { tags.join(', ')}</li>
      </ul>
    </div>
  )
}


export default Project
