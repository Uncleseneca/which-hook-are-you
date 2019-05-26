import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reducer as questionsReducer } from '../questions/reducer'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  questions: questionsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)
