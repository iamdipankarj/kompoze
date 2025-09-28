import * as React from 'react'
import cx from 'classnames'
import type { AuxiliaryProps } from '@/utils/utils.types'
import type { ButtonProps } from './Button.types'
import { capitalize } from '@/utils'
import classes from './Button.module.css'

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']

type ButtonCallSig = <C extends React.ElementType = 'button'>(
  props: AuxiliaryProps<C, ButtonProps> & { ref?: PolymorphicRef<C> }
) => React.ReactElement | null

type ButtonComponent = ButtonCallSig & { displayName?: string }

export const Button = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
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
      ...rest
    }: AuxiliaryProps<C, ButtonProps>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = (component || 'button') as C
    const { iconLeftClass, labelClass, iconRightClass, labelRootClass } =
      classList as any

    // Only pass disabled to real <button>
    const isRealButton = !component || component === 'button'
    const accessibility =
      isRealButton ? { disabled } : ({ 'aria-disabled': disabled || undefined } as const)

    // Narrow “rest” to native props for C
    const restNative = rest as React.ComponentPropsWithoutRef<C>

    // Build final props object, then cast to what React expects
    const propsForComponent = {
      ref,
      ...restNative,
      ...accessibility,
      className: cx(
        classes.buttonBaseRoot,
        classes.root,
        classes[variant],
        {
          [classes[`${variant}${capitalize(color)}`]]: color !== 'default',
          [classes[`${variant}Disabled`]]: disabled,
          [classes[`size${capitalize(size)}`]]: variant !== 'text',
          [classes.shadow]: shadow,
          [classes.fullWidth]: fullWidth,
        },
        className
      ),
      style: { borderRadius, ...(restNative as any).style },
      children: (
        <span
          className={cx(classes.labelRoot, labelRootClass, {
            [classes.labelRootVertical]: vertical,
          })}
        >
          {startIcon !== null ? (
            <span
              className={cx(classes.iconLeft, iconLeftClass, {
                [classes.iconLeftVertical]: vertical,
              })}
            >
              {startIcon}
            </span>
          ) : null}
          <span className={cx(classes.label, labelClass)}>{children}</span>
          {endIcon !== null ? (
            <span
              className={cx(classes.iconRight, iconRightClass, {
                [classes.iconRightVertical]: vertical,
              })}
            >
              {endIcon}
            </span>
          ) : null}
        </span>
      ),
    } as JSX.LibraryManagedAttributes<
      C,
      React.ComponentPropsWithoutRef<C>
    >

    return <Component {...propsForComponent} />
  }
) as unknown as ButtonComponent

Button.displayName = 'Button'
