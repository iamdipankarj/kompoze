import React from 'react'
import cx from 'classnames'
import classes from './Paper.module.css'
import type { PaperProps } from './Paper.types'

export const Paper: React.FC<PaperProps> = props => {
  const {
    compact = false,
    clickable = false,
    children,
    className,
    ...restProps
  } = props

  return (
    <div
      className={cx(
        classes.root,
        {
          [classes.compact]: compact,
          [classes.clickable]: clickable
        },
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}
