import React, { useCallback } from 'react'
import { Title } from './components/title'
import { useThunk } from '@breadhead/thunk-utils'
import { OptionsList } from './components/optionsList/OptionsList'
import { useMappedState } from 'redux-react-hook'
import { selectActiveOption } from 'domain/answers/selectors/selectActiveOption'
import s from './Section.module.css'
import { actions as answersActions } from 'domain/answers/reducer'

export const Select = ({ question: { question, options, type } }) => {
  const active = useMappedState(selectActiveOption(question))
  const dispatch = useThunk()
  const setActive = useCallback(
    (id, points) => {
      dispatch(answersActions.addAnswer(question, id, points))
    },
    // eslint-disable-next-line
    [question]
  )

  return (
    <section className={s.section}>
      <Title title={question} />
      <OptionsList
        active={active}
        setActive={setActive}
        options={options}
        type={type}
      />
    </section>
  )
}
