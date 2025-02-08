import React from 'react'
import cx from 'classnames'
import type { AvatarProps } from './Avatar.types'
import classes from './Avatar.module.css'

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 32,
  className,
  children,
  ...restProps
}: AvatarProps = {}) => {
  return (
    <div
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
}
