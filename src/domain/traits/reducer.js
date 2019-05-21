import { createClearRedux } from 'redux-clear'

export const { actions, reducer } = createClearRedux(
  {
    addAnswer: state => ({ social, weird, cunning }) => ({
      social: state.social + social,
      weird: state.weird + weird,
      cunning: state.cunning + cunning
    })
  },
  { social: 0, weird: 0, cunning: 0 },
  'traits'
)
