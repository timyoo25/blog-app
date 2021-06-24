
import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getPost, updatePost } from "../../services/posts";
import Layout from '../../components/Layout/Layout' 

export default function PostEdit(props) {
  const { id } = useParams();
  const [updated, setUpdated] = useState(false);
  const [post, setPost] = useState({
    name: "",
    comment: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      console.log(post);
    };
    fetchPost();
  }, [updated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault()
    let { id } = props.match.params
    const submit = await updatePost(id, post)
    setUpdated(prevState => !prevState)

  };

  if (updated) {
    return <Redirect to={`/posts/${id}`} />;
  }

  return (
    <Layout>
    <div className="post-edit">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="edit-name"
            name="name"
            value={post.name}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="edit-comment"
            name="comment"
            value={post.comment}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="submit-button">
            Save
          </button>
        </form>
      </div>
    </div>
    </Layout>
  )

}
