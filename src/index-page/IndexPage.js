import React from 'react'
import { useMappedState } from 'redux-react-hook'
import { selectQuestions } from 'domain/questions/selectors/selectQuestions'
import { Select } from 'ui/select'

export const IndexPage = () => {
  const questions = useMappedState(selectQuestions)
  return (
    <main>
      {questions.map(question => (
        <Select key={question.question} question={question} />
      ))}
    </main>
  )
}
