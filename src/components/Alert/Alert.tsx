import React, { forwardRef } from 'react'
import cx from 'classnames'
import type { AlertProps } from './Alert.types'
import classes from './Alert.module.css'
import { InfoIcon } from '@/components/Icon'

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    variant = 'success',
    children,
    className,
    ...restProps
  } = props

  return (
    <div
      ref={ref}
      className={cx(
        classes.root,
        {
          [classes.error]: (variant === 'error')
        },
        className
      )}
      {...restProps}
    >
      <span className={classes.icon}>
        <InfoIcon size={24} />
      </span>
      <span>{children}</span>
    </div>
  )
})
