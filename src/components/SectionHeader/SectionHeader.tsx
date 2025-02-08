import React from 'react'
import cx from 'classnames'
import type { SectionHeaderProps } from './SectionHeader.types'
import classes from './SectionHeader.module.css'

export const SectionHeader: React.FC<SectionHeaderProps> = (props: SectionHeaderProps) => {
  const {
    children,
    className,
    ...restProps
  } = props

  return (
    <div className={cx(classes.root, className)} {...restProps}>
      {children}
    </div>
  )
}
