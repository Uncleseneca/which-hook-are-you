import React from 'react'
import s from './Container.module.css'

export const Container = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <h1 className={s.hero}> Which hook are you?</h1>
        <img className={s.image} src="/thinking.png" alt="" />
      </header>
      <aside className={s.aside}>
        <p>Answer the questions and find out which hook are you!</p>
      </aside>
      <main className={s.main}>{children}</main>
    </div>
  )
}
