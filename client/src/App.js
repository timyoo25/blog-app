import { Route } from 'react-router-dom'

import PostCreate from './screens/PostCreate/PostCreate'
import PostDetail from "./screens/PostDetail/PostDetail";
import Posts from './screens/Posts/Posts'

import "./App.css";


function App() {
  return (
    <div className="App">
    
      <Route exact path="/">
        <Posts />
      </Route>
    
      <Route path="/new">
        <PostCreate />
      </Route>
    
      <Route path="/posts/:id" component={PostDetail} />

    </div>
  );
}

export default App;
