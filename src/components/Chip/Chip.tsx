import React, { forwardRef } from 'react'
import cx from 'classnames'
import type { ChipProps } from './Chip.types'
import classes from './Chip.module.css'

export const Chip = forwardRef<HTMLSpanElement, ChipProps>((props, ref) => {
  const {
    children,
    className,
    active = false,
    clickable = false,
    label,
    ...restProps
  } = props

  return (
    <span
      ref={ref}
      className={cx(classes.root, className, {
        [classes.active]: active,
        [classes.clickable]: clickable
      })}
      {...restProps}
    >
      {children || label}
    </span>
  )
})
