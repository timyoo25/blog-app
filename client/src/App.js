import { Route } from 'react-router-dom'

import PostCreate from './screens/PostCreate/PostCreate'
import PostDetail from "./screens/PostDetail/PostDetail";
import PostEdit from "./screens/PostEdit/PostEdit";
import Posts from './screens/Posts/Posts'

import "./App.css";


function App() {
  return (
    <div className="App">
    
      <Route exact path="/" component={Posts}/>
    
      <Route path="/new" component={PostCreate}/>
    
      <Route exact path="/posts/:id" component={PostDetail} />

      <Route exact path="/posts/:id/edit" component={PostEdit}/>

    </div>
  );
}

export default App;
