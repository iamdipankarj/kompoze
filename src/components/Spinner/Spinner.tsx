import React, { forwardRef } from 'react'
import cx from 'classnames'
import type { SpinnerProps } from './Spinner.types'
import classes from './Spinner.module.css'

/**
 * A simple `<Spinner />` component inspired by material UI
 *
 * See [a11y Specification](https://www.digitala11y.com/aria-busy-state/) for WAI-ARIA details
 */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>((props, ref) => {
  const {
    size = 40,
    color = '#1c873b',
    className,
    duration = 1400,
    strokeWidth = 3.6,
    ...restProps
  } = props

  return (
    <span
      ref={ref}
      className={cx(classes.root, className)}
      aria-busy='true'
      style={{
        animationDuration: `${duration}ms`
      }}
      {...restProps}
    >
      <svg
        width={size}
        height={size}
        className={classes.svg}
        viewBox='22 22 44 44'
      >
        <circle className={classes.circle} cx='44' cy='44' r='20.2' fill='none' stroke={color} strokeWidth={strokeWidth} style={{
          animationDuration: `${duration}ms`,
        }} />
      </svg>
    </span>
  )
})
