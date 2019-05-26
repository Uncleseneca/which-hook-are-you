import React from 'react'
import cx from 'classnames'
import { isNumber } from 'lodash'
import s from './Option.module.css'

export const Option = ({ option: { image, id }, onClick, currentActive }) => {
  const isActive = id === currentActive
  const isDisabled = isNumber(currentActive) && !isActive
  return (
    <div
      className={cx(isActive && s.active, isDisabled && s.disabled)}
      onClick={onClick}
    >
      {image && <img src={image} alt="" />}
    </div>
  )
}
