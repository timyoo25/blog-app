import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getPost, updatePost } from '../../services/posts'

export default function PostEdit() {

  const { id } = useParams()
  const { updated, setUpdated } = useState(false) 
  const [post, setPost] = useState({
    name: '',
    comment:''
  })

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const submit = await updatePost(id, post)
    setUpdated(submit)
  }

  if (updated) {
    return <Redirect to={`/products/${id}`} />
  }

  return (
    <div className="post-edit">
      <div>
      <form onSubmit={handleSubmit}>
          <input
            className="edit-name"
            value={post.name}
            onChange={handleChange}
          />
          <input
            className="edit-comment"
            value={post.comment}
            onChange={handleChange}
          />
        <button type="submit" className="submit-button">Save</button>
      </form>
      </div>
    </div>
  )
}
