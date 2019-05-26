import { size } from 'lodash'

export const selectSubmitReady = state => {
  const answersAmount = size(state.answers)
  const questionsAmount = size(state.questions.data)
  return answersAmount === questionsAmount
}
