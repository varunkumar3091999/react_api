import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Get from './Components/Get'
import Post from './Components/Post'
import Patch from './Components/Patch'
import Delete from './Components/Delete'
import Put from './Components/Put'


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/get" component={Get}/>
        <Route path="/post" component={Post}/>
        <Route path="/patch" component={Patch}/>
        <Route path="/delete" component={Delete}/>
        <Route path="/put" component={Put}/>
      </Switch>
    </Router>
  )
  
}

export default App;
