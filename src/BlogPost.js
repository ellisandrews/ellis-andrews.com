import React from 'react'


const BlogPost = ({ blogPost, index }) => {
  
  const { title, pubDate, link, thumbnail, categories } = blogPost
  
  return (
    <div id={`blog-post-${index}`} className="card border">
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} className="card-img"/>
      <ul>
        <li>Published: {pubDate}</li>
        <li>Link: <a href={link}>{link}</a></li>
        <li>Categories: { categories.join(', ')}</li>
      </ul>
    </div>
  )
}


export default BlogPost
