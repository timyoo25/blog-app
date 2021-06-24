import Posts from './screens/Posts/Posts'
import { Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
  
      <Route path="/">
        <Posts />
      </Route>
      <Route path="">
        
      </Route>
     
    </div>
  );
}

export default App;
