import { useState, useEffect } from "react";
import { getPost } from "../../services/posts.js";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./PostDetail.css";
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
    <Layout>
      <div className="post-parent">
        <div className="post-detail-container" key={id}>
          <h4 className="post-name">{post.name}</h4>
          <hr />
          <p className="post-comment">{post.comment}</p>
          <br />
          <br />
          <br />
          <br />
          <p className="timestamp">{createdDate.toDateString()}</p>
          <Link to={`/posts/${id}/edit`}>
            <button className="btn-edit">Edit</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
