import React, { Component } from 'react'
import BlogPost from './BlogPost'


class Blog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    // Fetch Medium blog posts (from my RSS feed).
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ellisandrews1")
      .then(response => response.json())
      .then(jsonData => {
        if (jsonData.status === 'ok') {
          this.setState({
            blogPosts: jsonData.items
          })
        } else {
          throw new Error(`Failed to fetch blog posts from Medium. (${jsonData.message})`)
        }
      })
      .catch(err => console.log(err))
  }

  renderBlogPosts = () => {
    return this.state.blogPosts.map((blogPost, i) => <BlogPost blogPost={blogPost} key={i}/>)
  }

  render() {
    return (
      <div id="blog">
        <h3>Blog</h3>
        {this.renderBlogPosts()}
      </div>
    )
  }

}


export default Blog
