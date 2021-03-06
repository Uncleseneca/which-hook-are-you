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
  const styles = cx(s.option, isActive && s.active, isDisabled && s.disabled)
  return (
    <div className={styles} onClick={onClick}>
      {image && (
        <div className={s.imageContainer}>
          <img className={s.image} src={image} alt="" />
        </div>
      )}
      {text && (
        <div className={s.textContainer}>
          <p className={s.text}>{text}</p>
        </div>
      )}
    </div>
  )
}
