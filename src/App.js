import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { StoreContext } from 'redux-react-hook'
import { store } from 'domain/store'
import { IndexPage } from 'index-page'
import { Container } from 'ui/container/Container'
import { ResultPage } from 'result-page'

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Router>
        <Container>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/result/:hook" exact component={ResultPage} />
          </Switch>
        </Container>
      </Router>
    </StoreContext.Provider>
  )
}

export default App
