import { selectHook } from 'domain/hooks/selectors/selectHook'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { useMappedState } from 'redux-react-hook'
import s from './ResultPage.module.css'

export const ResultPage = withRouter(({ match: { params } }) => {
  const hook = useMappedState(selectHook(params.hook))

  return (
    <div className={s.indexPage}>
      <div className={s.hero}>
        <h1 className={s.description}>{hook.description}</h1>
        <img className={s.image} src="/thumsup.jpg" alt="" />
        <p>{hook.text}</p>
        <a href={hook.link}>Ссылка на документацию</a>
      </div>
    </div>
  )
})
