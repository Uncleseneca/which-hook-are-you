import { createClearRedux } from 'redux-clear'
import { hooks } from 'data'
export const { actions, reducer } = createClearRedux(
  {},
  { data: hooks },
  'hooks'
)
