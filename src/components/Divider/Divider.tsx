import React, { forwardRef } from 'react'
import cx from 'classnames'
import classes from './Divider.module.css'
import type { DividerProps } from './Divider.types'

export const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const {
    className,
    ...restProps
  } = props
  return (
    <hr
      ref={ref}
      className={cx(classes.root, className)}
      {...restProps}
    />
  )
})
