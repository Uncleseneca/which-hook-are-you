import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { StoreContext } from 'redux-react-hook'
import { store } from 'domain/store'
import { IndexPage } from 'index-page'
import { Container } from 'ui/container/Container'
import { ResultPage } from 'result-page'
import './App.css'

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Router>
        <Container>
          <Helmet>
            <title>Какой ты хук? </title>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          </Helmet>
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
