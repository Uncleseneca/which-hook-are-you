import React from 'react'
import logo from './logo.svg'
import './App.css'
import { StoreContext } from 'redux-react-hook'
import { store } from 'domain/store'

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </StoreContext.Provider>
  )
}

export default App
