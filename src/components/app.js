import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home'
import About from './about'
import PageNotFound from './page-not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
