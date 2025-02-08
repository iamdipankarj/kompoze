import React from 'react'
import cx from 'classnames'
import type { ChipProps } from './Chip.types'
import classes from './Chip.module.css'

export const Chip: React.FC<ChipProps> = ({
  children,
  className,
  active = false,
  clickable = false,
  label,
  ...restProps
}) => {
  return (
    <span
      className={cx(classes.root, className, {
        [classes.active]: active,
        [classes.clickable]: clickable
      })}
      {...restProps}
    >
      {children || label}
    </span>
  )
}
