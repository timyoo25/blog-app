import { useState, useEffect } from 'react'
import { getPosts } from "../../services/posts.js"

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
    <div>
      {/* <p>HIIIIIIIIIIII</p> */}
      {console.log(posts)}
      {posts.map(post => {
        return (
          <div className = "post-container">
            <p>{post.name}</p>
            <p>{post.comment}</p>
          </div>
        )
      })}
    </div>
  )
}
