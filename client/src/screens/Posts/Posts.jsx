import { getPosts } from "../../services/posts.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
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
    <Layout>
      <div className="posts-parent">
        <p>Posts Page:</p>
        {posts.map((post) => {
          return (
            <Link className="posts-link" to={`/posts/${post._id}`}>
              <div className="posts-container">
                <p className="posts-name  posts">{post.name}</p>
                <hr />
                <p className="posts-comment posts">{post.comment}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
