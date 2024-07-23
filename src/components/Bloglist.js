import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs }) => {

  return (
    <div className='blog-list'>
      {blogs.map((b) => (
        <div key={b.id} className="blog-preview">
          <Link to={`/blogs/${b.id}`}>
            <h2>{b.title}</h2>
            <p>Written by {b.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
