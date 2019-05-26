import React from 'react'
import { Option } from '../option/Option'
import s from './OptionsList.module.css'

export const OptionsList = ({ options, active, setActive }) => {
  return (
    <div className={s.optionsList}>
      {options.map(option => (
        <Option
          key={option.id}
          option={option}
          currentActive={active}
          onClick={() => setActive(option.id, option.points)}
        />
      ))}
    </div>
  )
}
