import React, { forwardRef } from 'react'
import cx from 'classnames'
import type { AvatarProps } from './Avatar.types'
import classes from './Avatar.module.css'

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    src,
    alt,
    size = 32,
    className,
    children,
    ...restProps
  } = props

  return (
    <div
      ref={ref}
      className={cx(classes.root, className)}
      style={{
        width: size,
        height: size
      }}
    >
      {src ? (
        <img
          className={classes.img}
          width={size}
          height={size}
          src={src}
          alt={alt}
          {...restProps}
        />
      ) : alt || children}
    </div>
  )
})
