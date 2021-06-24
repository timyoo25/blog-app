import { useState, useEffect } from 'react'
import { getPosts } from "../../services/posts.js"
import { Link } from 'react-router-dom'
import './Posts.css'

export default function Posts() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      console.log(allPosts)
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])
  
  return (
<<<<<<< HEAD
    <div>
      {/* <p>HIIIIIIIIIIII</p> */}
      {console.log(posts)}
=======
    <div className = "posts-parent" >
      <p>Posts Page:</p>
>>>>>>> b424b700925e146a097598a79b2e408eff90523b
      {posts.map(post => {
        return (
            <Link to={`/posts/${post._id}`}>
          <div className = "post-container">
            <p>{post.name}</p>
            <p>{post.comment}</p>
          </div>
            </Link>
        )
      })}
    </div>
  )
}
