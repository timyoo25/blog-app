import Posts from "./screens/Posts/Posts";
import { Route } from "react-router-dom";

import PostDetail from "./screens/PostDetail/PostDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Posts />
      </Route>
      <Route path=""></Route>
      <Route path="/posts/:id" component={PostDetail} />
    </div>
  );
}

export default App;
