import React from 'react'
import { forwardRef } from 'react'
import cx from 'classnames'
import classes from './Tab.styles.module.css'
import type { TabProps } from './Tab.types'

export const Tab: React.FC<TabProps> = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const {
    label,
    isActive = false,
    className,
    ...restProps
  } = props

  return (
    <button
      ref={ref}
      role='tab'
      type='button'
      className={cx(
        classes.root,
        {
          active: isActive
        },
        className
      )}
      {...restProps}
    >
      {label}
    </button>
  )
})
