import React from 'react'
import { useMappedState } from 'redux-react-hook'
import { selectQuestions } from 'domain/questions/selectors/selectQuestions'
import { Select } from 'ui/select'
import s from './IndexPage.module.css'
import { selectSubmitReady } from 'domain/answers/selectors/selectSubmitReady'
import { useThunk } from '@breadhead/thunk-utils'
import { submit } from 'domain/answers/actions/submit'

export const IndexPage = () => {
  const dispatch = useThunk()
  const questions = useMappedState(selectQuestions)
  const readyForSubmit = useMappedState(selectSubmitReady)

  const onSubmit = () => dispatch(submit())

  return (
    <div className={s.indexPage}>
      <header className={s.header}>
        <h1 className={s.hero}> Какой ты хук?</h1>
        <img className={s.image} src="/thinking.png" alt="" />
      </header>
      <aside className={s.aside}>
        <p>Ответь на вопросы и узнай, какой ты хук!</p>
      </aside>
      {questions.map(question => (
        <Select key={question.question} question={question} />
      ))}
      {readyForSubmit && (
        <div className={s.submitSection}>
          <button className={s.submitButton} onClick={onSubmit}>
            Узнать всю правду!
          </button>
        </div>
      )}
    </div>
  )
}
