import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { StoreContext } from 'redux-react-hook'
import { store } from 'domain/store'
import { IndexPage } from 'index-page'

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/answer" exact component={IndexPage} />
        </Switch>
      </Router>
    </StoreContext.Provider>
  )
}

export default App
