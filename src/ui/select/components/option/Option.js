import React from 'react'
import cx from 'classnames'
import s from './Option.module.css'

export const Option = ({ text, onClick, active }) => (
  <div className={cx(active && s.active)} onClick={onClick}>
    {text}
  </div>
)
