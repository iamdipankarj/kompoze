import React from 'react'
import cx from 'classnames'
import type { AuxiliaryProps } from '../../utils/utils.types'
import { capitalize } from '../../utils'
import type { IconButtonProps } from './IconButton.types'
import classes from './IconButton.module.css'

export const IconButton = <C extends React.ElementType>({
  component,
  size = 'medium',
  variant = 'text',
  color = 'default',
  disabled = false,
  children,
  className,
  ...restProps
}: AuxiliaryProps<C, IconButtonProps>) => {
  const Component = component || 'button'

  return (
    <Component
      className={cx(
        classes.buttonBaseRoot,
        classes.root,
        classes[variant],
        classes[`size${capitalize(size)}`],
        {
          [classes[`${variant}Disabled`]]: disabled,
          [classes[`${variant}${capitalize(color)}`]]: (color !== 'default'),
          [classes.fillCurrent]: (variant === 'filled')
        },
        className
      )}
      {...restProps}
      disabled={disabled}
    >
      {children}
    </Component>
  )
}
