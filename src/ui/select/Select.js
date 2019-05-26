import React, { useCallback } from 'react'
import { Title } from './components/title'
import { useThunk } from '@breadhead/thunk-utils'
import { OptionsList } from './components/optionsList/OptionsList'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { selectActiveOption } from 'domain/answers/selectors/selectActiveOption'
import { actions as answersActions } from 'domain/answers/reducer'

export const Select = ({ question: { question, options } }) => {
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
    <section>
      <Title title={question} />
      <OptionsList active={active} setActive={setActive} options={options} />
    </section>
  )
}
