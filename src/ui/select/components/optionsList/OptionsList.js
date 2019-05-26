import React from 'react'
import cx from 'classnames'
import { Option } from '../option/Option'
import s from './OptionsList.module.css'

export const OptionsList = ({ options, active, setActive, type }) => {
  return (
    <div className={cx(s.optionsList, s[type])}>
      {options.map(option => (
        <Option
          type={type}
          key={option.id}
          option={option}
          currentActive={active}
          onClick={() => setActive(option.id, option.points)}
        />
      ))}
    </div>
  )
}
