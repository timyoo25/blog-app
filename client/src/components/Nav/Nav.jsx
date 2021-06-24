import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
       BLOG
        
        <div className="links">
          <NavLink className="link" to="/">
            Posts
          </NavLink>

          <NavLink className="link" to="/new">
            Add Post
          </NavLink>
        </div> 
      </div>
    </nav>
  );
};

export default Nav;
