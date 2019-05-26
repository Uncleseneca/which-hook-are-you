import { createClearRedux } from 'redux-clear'
export const { actions, reducer } = createClearRedux(
  {
    addAnswer: state => (key, id, points) => ({
      ...state,
      [key]: { id, points }
    })
  },
  {},
  'questions'
)
