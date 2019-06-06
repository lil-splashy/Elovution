

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
          <Route path='/' component={App} />
    </Router>,
    document.body.appendchild(document.createElement('div')),
  )
})
