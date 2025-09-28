import React, { forwardRef } from 'react'
import cx from 'classnames'
import classes from './Timestamp.module.css'
import type { TimestampProps } from './Timestamp.types'

export const Timestamp = forwardRef<HTMLSpanElement, TimestampProps>((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props

  return (
    <span
      ref={ref}
      className={cx(classes.root, className)}
      {...restProps}
    >
      {children}
    </span>
  )
})
