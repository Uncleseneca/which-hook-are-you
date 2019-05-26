import { createClearRedux } from 'redux-clear'
export const { actions, reducer } = createClearRedux(
  {
    addAnswer: state => (question, id, points) => ({
      ...state,
      [question]: { id, points }
    })
  },
  {},
  'questions'
)
