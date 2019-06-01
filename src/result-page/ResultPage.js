import { selectHook } from 'domain/hooks/selectors/selectHook'
import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import s from './ResultPage.module.css'
import { actions } from 'domain/answers/reducer'

export const ResultPage = withRouter(({ match: { params } }) => {
  const hook = useMappedState(selectHook(params.hook))
  const dispatch = useDispatch()
  const onBackClick = () => {
    dispatch(actions.reset())
  }
  return (
    <div className={s.indexPage}>
      <div className={s.hero}>
        <h1 className={s.description}>{hook.description}</h1>
        <img className={s.image} src="/thumsup.jpg" alt="" />
        <p className={s.text}>{hook.text}</p>
        <a href={hook.link}>Ссылка на документацию</a>
        <Link onClick={onBackClick} className={s.back} to="/">
          Пройти заново
        </Link>
      </div>
    </div>
  )
})
