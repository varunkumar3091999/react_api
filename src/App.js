import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Get from './Components/Get'
import Post from './Components/Post'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/get" component={Get}/>
        <Route path="/post" component={Post}/>
      </Switch>
    </Router>
  )
  
}

export default App;
