import React from 'react'
import cx from 'classnames'
import classes from './TabPanel.module.css'
import type { TabPanelProps } from './TabPanel.types'

export const TabPanel: React.FC<TabPanelProps> = props => {
  const {
    children,
    className,
    ...restProps
  } = props

  return (
    <div
      className={cx(classes.root, className)}
      role='tabpanel'
      {...restProps}
    >
      {children}
    </div>
  )
}
