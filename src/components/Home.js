import React from 'react'
import BlogList from './Bloglist';
import useFetch from '../hooks/useFetch';

const Home = () => {

  const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className='Home'>
      { error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  )
}

export default Home

