import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Get from './Components/Get'
import Post from './Components/Post'
import Patch from './Components/Patch'
import Delete from './Components/Delete'


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/get" component={Get}/>
        <Route path="/post" component={Post}/>
        <Route path="/patch" component={Patch}/>
        <Route path="/delete" component={Delete}/>

      </Switch>
    </Router>
  )
  
}

export default App;
