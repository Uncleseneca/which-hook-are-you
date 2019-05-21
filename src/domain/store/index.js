import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reducer as traitsReducer } from '../traits/reducer'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  traits: traitsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk), persistState(['fields', 'lists']))
)
