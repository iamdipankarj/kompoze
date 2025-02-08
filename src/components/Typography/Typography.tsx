import React from 'react'
import cx from 'classnames'
import type { TypographyProps } from './Typography.types'
import type { AuxiliaryProps } from '@/utils/utils.types'
import classes from './Typography.module.css'

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  subtitle3: 'h6',
  subtitle4: 'h6',
  body1: 'p',
  body2: 'p',
  button1: 'span',
  button2: 'span',
  caption1: 'span',
  caption2: 'span'
}

export const Typography = <C extends React.ElementType>({
  component,
  children,
  className,
  color = 'default',
  gutterBottom = false,
  noWrap = false,
  align = 'inherit',
  ...props
}: AuxiliaryProps<C, TypographyProps>) => {
  const { variant = 'body1' } = props
  const Component = component || variantMapping[variant as any] || 'p'

  return (
    <Component
      className={cx(classes.root, classes[variant], className, {
        [classes.colorDefault]: color === 'default',
        [classes.colorPrimary]: color === 'primary',
        [classes.colorSecondary]: color === 'secondary',
        [classes.gutterBottom]: gutterBottom,
        [classes.noWrap]: noWrap
      })}
      style={{
        textAlign: align
      }}
    >
      {children}
    </Component>
  )
}
