import { useState, useEffect } from "react";
import { deletePost, getPost } from "../../services/posts.js";
import { useParams } from "react-router";
import { Link, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

export default function PostDetail() {
  const [post, setPost] = useState([]);
  const [deletedPost, setDeletedPost] = useState(false);
  const { id } = useParams();
  //grab post details
  useEffect(() => {
    async function fetchPost() {
      const res = await getPost(id);
      setPost(res);
    }
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    setDeletedPost(prevState => !prevState)
  }  
  if (deletedPost) {
    return <Redirect to="/" />
  }

  const createdDate = new Date(post.createdAt);
  return (
    <Layout>
    <div className="post-detail" key={id}>
      <h4 className="post-name">{post.name}</h4>
      <p className="post-comment">{post.comment}</p>
      <p className="timestamp">{createdDate.toDateString()}</p>
      <Link to={`/posts/${id}/edit`}>
        <button className="btn-edit">Edit</button>
      </Link>
      <button classname="btn-delete" onClick={handleDelete}>Delete</button>  
    </div>
   </Layout>
  );
}
