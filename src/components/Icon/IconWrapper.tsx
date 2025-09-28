import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import type { SVGIconProps } from './IconWrapper.types'
import classes from './IconWrapper.module.css'

export const IconWrapper = memo(
  forwardRef<SVGSVGElement, SVGIconProps>((props, ref) => {
    const {
      size = 16,
      height = size,
      fill = '#212121',
      children,
      viewBox = `0 0 ${size} ${height}`,
      className,
      ...restProps
    } = props

    return (
      <svg
        ref={ref}
        className={cx(classes.root, className)}
        width={size}
        xmlns='http://www.w3.org/2000/svg'
        height={height}
        fill={fill}
        viewBox={viewBox}
        {...restProps}
      >
        {children}
      </svg>
    )
  })
)
