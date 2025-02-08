import React from 'react'
import cx from 'classnames'
import classes from './Divider.module.css'
import type { DividerProps } from './Divider.types'

export const Divider: React.FC<DividerProps> = props => {
  const {
    className,
    ...restProps
  } = props
  return (
    <hr
      className={cx(classes.root, className)}
      {...restProps}
    />
  )
}
