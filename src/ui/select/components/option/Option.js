import React from 'react'
import cx from 'classnames'
import { isNumber } from 'lodash'
import s from './Option.module.css'

export const Option = ({
  option: { image, id, text },
  onClick,
  currentActive
}) => {
  const isActive = id === currentActive
  const isDisabled = isNumber(currentActive) && !isActive
  return (
    <div
      className={cx(s.option, isActive && s.active, isDisabled && s.disabled)}
      onClick={onClick}
    >
      {image && <img className={s.image} src={image} alt="" />}
      {text && (
        <div className={s.textContainer}>
          <p className={s.text}>{text}</p>
        </div>
      )}
    </div>
  )
}
