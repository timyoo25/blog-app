
import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getPost, updatePost } from "../../services/posts";
import Layout from '../../components/Layout/Layout' 
import "./PostEdit.css"

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
      <div>
        <form className="post-edit" onSubmit={handleSubmit}>
          <input
            className="edit-name"
            name="name"
            value={post.name}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <textarea
          className="comment-edit"
          rows={10}
          placeholder="post body"
          value={post.comment}
          name="comment"
          onChange={(e) => handleChange(e)}
        />
          <button type="submit" className="submit-button">
            Save
          </button>
        </form>
      </div>
    
    </Layout>
  )

}
