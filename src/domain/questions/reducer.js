import { createClearRedux } from 'redux-clear'
import { questions } from 'data'
export const { actions, reducer } = createClearRedux(
  {},
  { data: questions },
  'questions'
)
