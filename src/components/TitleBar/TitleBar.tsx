import React from 'react'
import cx from 'classnames'
import classes from './TitleBar.module.css'
import type { TitleBarProps } from './TitleBar.types'
import { ArrowLeftIcon } from '@/components/Icon'
import { IconButton } from '@/components/IconButton'

export const TitleBar: React.FC<TitleBarProps> = props => {
  const {
    startIcon = <ArrowLeftIcon fill='#000' size={24} />,
    avatar,
    onStartIconClick,
    hideStartIcon = false,
    primary,
    secondary,
    className,
    children,
    endAdornment,
    ...restProps
  } = props

  return (
    <div
      className={cx(classes.root, className, {
        [classes.compact]: hideStartIcon
      })}
      {...restProps}
    >
      {!hideStartIcon && (
        <IconButton
          className={classes.iconStart}
          type='button'
          onClick={onStartIconClick}
        >
          {startIcon}
        </IconButton>
      )}
      {avatar && (
        <div className={classes.avatar}>{avatar}</div>
      )}
      {children || (
        <div className={classes.container}>
          <span className={classes.primary}>{primary}</span>
          {secondary && (
            <span className={classes.secondary}>{secondary}</span>
          )}
        </div>
      )}
      {endAdornment}
    </div>
  )
}
