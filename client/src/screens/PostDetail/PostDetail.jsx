import { useState, useEffect } from "react";
import { getPost } from "../../services/posts.js";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

export default function PostDetail() {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  //grab post details
  useEffect(() => {
    async function fetchPost() {
      const res = await getPost(id);
      setPost(res);
    }
    fetchPost();
  }, [id]);

  const createdDate = new Date(post.createdAt);
  return (
    // <Layout>
    <div className="post-detail" key={id}>
      <h4 className="post-name">{post.name}</h4>
      <p className="post-comment">{post.comment}</p>
      <p className="timestamp">{createdDate.toDateString()}</p>
      <Link to={`/posts/${id}/edit`}>
        <button className="btn-edit">Edit</button>
      </Link>
    </div>
    // </Layout>
  );
}
