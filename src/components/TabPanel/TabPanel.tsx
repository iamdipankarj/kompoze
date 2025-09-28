import React, { forwardRef } from 'react'
import cx from 'classnames'
import classes from './TabPanel.module.css'
import type { TabPanelProps } from './TabPanel.types'

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props

  return (
    <div
      ref={ref}
      className={cx(classes.root, className)}
      role='tabpanel'
      {...restProps}
    >
      {children}
    </div>
  )
})
