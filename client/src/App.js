import Posts from "./screens/Posts/Posts";
import PostEdit from "./screens/PostEdit/PostEdit";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Posts />
      </Route>
      <Route exact path="/posts/:id/edit">
        <PostEdit />
      </Route>
    </div>
  );
}

export default App;
