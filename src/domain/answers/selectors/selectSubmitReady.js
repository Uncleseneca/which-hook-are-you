export const selectSubmitReady = state => {
  const questionNames = state.questions.data.map(question => question.question)
  const answerNames = Object.keys(state.answers)

  const isSubmitReady = questionNames.every(questionName =>
    answerNames.includes(questionName)
  )
  return isSubmitReady
}
