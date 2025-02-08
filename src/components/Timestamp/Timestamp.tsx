import React from 'react'
import cx from 'classnames'
import classes from './Timestamp.module.css'
import type { TimestampProps } from './Timestamp.types'

export const Timestamp: React.FC<TimestampProps> = props => {
  const {
    children,
    className,
    ...restProps
  } = props

  return (
    <span
      className={cx(classes.root, className)}
      {...restProps}
    >
      {children}
    </span>
  )
}
