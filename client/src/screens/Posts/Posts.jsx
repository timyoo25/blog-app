import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts.js";
import { Link } from "react-router-dom";
import "./Posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      console.log(allPosts);
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="posts-parent">
      <p>Posts Page:</p>
      {posts.map((post) => {
        return (
          <Link to={`/posts/${post._id}`}>
            <div className="post-container">
              <p className="post-name  post">{post.name}</p>
              <p className="post-comment post">{post.comment}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}