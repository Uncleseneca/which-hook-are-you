import React from 'react'
import { Option } from '../option/Option'

export const OptionsList = ({ options, active,setActive }) => {
  return options.map(option => (
    <Option
      value={option}
      active={active === option.text}
      onClick={() => setActive(option.text)}
    />
  ))
}
