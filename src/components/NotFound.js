import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className="not-found">
        <h2>Sorry</h2>
        <p>This page can not be found</p>
        <Link to='/'>Back to the home page...</Link>
      </div>
    </div>
  )
}

export default NotFound
