import React, { forwardRef } from 'react'
import type { SkeletonProps } from './Skeleton.types'
import classes from './Skeleton.module.css'

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const {
    type = 'rectangle',
    width = 100,
    height = 30,
    size = 50,
    borderRadius = 5,
    className,
    ...restProps
  } = props

  return (
    <div
      ref={ref}
      className={className}
      {...restProps}
    >
      <div className={classes.shimmer} style={{
        width: type === 'rectangle' ? width : size,
        height: type === 'rectangle' ? height : size,
        borderRadius: type === 'rectangle' ? borderRadius : '50%'
      }} />
    </div>
  )
})
