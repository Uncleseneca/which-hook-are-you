import React from 'react'
import { useMappedState } from 'redux-react-hook'
import { selectQuestions } from 'domain/questions/selectors/selectQuestions'
import { Select } from 'ui/select'
import s from './IndexPage.module.css'

export const IndexPage = () => {
  const questions = useMappedState(selectQuestions)
  return (
    <div className={s.indexPage}>
      {questions.map(question => (
        <Select key={question.question} question={question} />
      ))}
    </div>
  )
}
