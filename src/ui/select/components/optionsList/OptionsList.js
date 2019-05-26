import React from 'react'
import { Option } from '../option/Option'

export const OptionsList = ({ options, active, setActive }) => {
  return options.map(option => (
    <Option
      key={option.id}
      option={option}
      currentActive={active}
      onClick={() => setActive(option.id, option.points)}
    />
  ))
}
