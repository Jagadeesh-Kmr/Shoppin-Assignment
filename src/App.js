import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Collections from './components/Collections'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/collections" component={Collections} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
