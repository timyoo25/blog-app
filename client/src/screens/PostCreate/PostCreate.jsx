import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'
import Layout from '../../components/Layout/Layout'
import "./PostCreate.css"

export default function PostCreate() {
  
  const [newPost, setNewPost] = useState({
    name: "",
    comment: ""
  })

  const [isPosted, setIsPosted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewPost({
            ...newPost,
            [name]: value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const posted = await createPost(newPost)
    setIsPosted({ posted })
}

  if (isPosted) {
    return <Redirect to={'/'} />
  }
  return (
    <Layout>
    <div>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <input className="input-name"
          placeholder="Post Title"
          value={newPost.name}
          name = "name"
          required
          autofocus
          onChange={handleChange}
        />

        <textarea
          className="textarea-comment"
          rows={10}
          placeholder="Post Body"
          value={newPost.comment}
          name="comment"
          required
          autofocus
          onChange={handleChange}
        />
        <button type='submit' className="create-submit-button">Submit</button>
      </form>
      </div>
    </Layout>
  )
}
