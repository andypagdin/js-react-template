import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import About from './components/about'
import PageNotFound from './components/page-not-found'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>,
  document.getElementById('app')
)
