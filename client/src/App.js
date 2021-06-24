import Posts from './screens/Posts/Posts'
import PostCreate from './screens/PostCreate/PostCreate'
import { Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
  
      <Route exact path="/">
        <Posts />
      </Route>
      <Route path="">
        
      </Route>
      <Route path="/new">
        <PostCreate />
     </Route>
    </div>
  );
}

export default App;
