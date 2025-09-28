import React, { forwardRef } from 'react'
import cx from 'classnames'
import type { ProgressProps } from './Progress.types'
import classes from './Progress.module.css'

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const {
    className,
    variant = 'infinite',
    percentage = 0,
    duration = 200,
    height = 3,
    ...restProps
  } = props

  const getStyles = () => {
    let css: Record<string, any> = {}
    if (variant === 'static') {
      css.width = `${percentage}%`
    }
    if (props.duration) {
      css.transitionDuration = `${duration}ms`
    }
    if (props.variant === 'infinite') {
      css.transitionProperty = 'transform'
    }
    return css
  }

  return (
    <div
      ref={ref}
      className={cx(classes.root, className)}
      style={{ height }}
      {...restProps}
    >
      <span
        style={getStyles()}
        className={cx(classes.bar, {
          [classes.bar1]: variant === 'infinite'
        })}
      />
      {variant === 'infinite' ? (
        <span className={cx(classes.bar, classes.bar2)} />
      ) : null}
    </div>
  )
})
