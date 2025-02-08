import React from 'react'
import cx from 'classnames'
import type { AuxiliaryProps } from '@/utils/utils.types'
import type { ButtonProps } from './Button.types'
import { capitalize } from '@/utils'
import classes from './Button.module.css'

/**
 * A custom component that renders the `<button />` HTML Element with customized styles for the theme.
 */
export const Button = <C extends React.ElementType>({
  component,
  startIcon = null,
  endIcon = null,
  size = 'medium',
  variant = 'filled',
  color = 'primary',
  fullWidth = false,
  shadow = false,
  vertical = false,
  disabled = false,
  borderRadius = 24,
  children,
  className,
  classList = {},
  ...restProps
}: AuxiliaryProps<C, ButtonProps>) => {
  const Component = component || 'button'
  const { iconLeftClass, labelClass, iconRightClass, labelRootClass } = classList as any

  return (
    <Component
      className={cx(
        classes.buttonBaseRoot,
        classes.root,
        classes[variant],
        {
          [classes[`${variant}${capitalize(color)}`]]: (color !== 'default'),
          [classes[`${variant}Disabled`]]: disabled,
          [classes[`size${capitalize(size)}`]]: (variant !== 'text'),
          [classes.shadow]: shadow,
          [classes.fullWidth]: fullWidth
        },
        className
      )}
      disabled={disabled}
      style={{ borderRadius }}
      {...restProps}
    >
      <span className={cx(classes.labelRoot, labelRootClass, {
        [classes.labelRootVertical]: vertical
      })}>
        {startIcon !== null ? (
          <span className={cx(classes.iconLeft, iconLeftClass, {
            [classes.iconLeftVertical]: vertical
          })}>{startIcon}</span>
        ) : null}
        <span className={cx(classes.label, labelClass)}>{children}</span>
        {endIcon !== null ? (
          <span className={cx(classes.iconRight, iconRightClass, {
            [classes.iconRightVertical]: vertical
          })}>{endIcon}</span>
        ) : null}
      </span>
    </Component>
  )
}
