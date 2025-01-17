import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then((response) => {
      console.log(response);
      history.push('/');
    }).catch((err) => {
      console.log('Got Error::');
      console.log(err.message);
    })
  }

  return (
    <div className='create'>
      <h2>Add new blog</h2>

      <form onSubmit={handleSubmit}>
      <label>Title:</label>
        <input required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
        <label>Author</label>
        <select value={author} onChange={ (e) => setAuthor(e.target.value)}>
          <option value="Yoshi">Yoshi</option>
          <option value="Mario">Mario</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default Create
