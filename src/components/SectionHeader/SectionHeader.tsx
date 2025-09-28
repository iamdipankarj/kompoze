import React, { forwardRef } from 'react'
import cx from 'classnames'
import type { SectionHeaderProps } from './SectionHeader.types'
import classes from './SectionHeader.module.css'

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>((props, ref) => {
  const {
    children,
    className,
    ...restProps
  } = props

  return (
    <div ref={ref} className={cx(classes.root, className)} {...restProps}>
      {children}
    </div>
  )
})
