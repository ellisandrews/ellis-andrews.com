import React from 'react'


const BlogPost = ({ blogPost }) => {
  
  const { title, pubDate, link, thumbnail, categories } = blogPost
  
  return (
    <div id={`blog-post-${title}`}>
      <h6>{title}</h6>
      <img src={thumbnail} alt={title} height="200" width="200"/>
      <ul>
        <li>Published: {pubDate}</li>
        <li>Link: <a href={link}>{link}</a></li>
        <li>Categories: { categories.join(', ')}</li>
      </ul>
    </div>
  )
}


export default BlogPost
