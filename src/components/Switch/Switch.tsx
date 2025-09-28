import React, { forwardRef } from 'react'
import cx from 'classnames'
import type { SwitchProps } from './Switch.types'
import classes from './Switch.module.css'

export const Switch = forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  const {
    id,
    inputProps,
    children,
    disabled = false,
    size = 'medium',
    onChange,
    required,
    checked,
    className,
    ...restProps
  } = props
  return (
    <div
      ref={ref}
      className={cx(
        classes.root,
        className
      )}
      {...restProps}
    >
      <input
        id={id}
        className={cx(classes.input, {
          [classes.inputMedium]: size === 'medium'
        })}
        type='checkbox'
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        required={required}
        {...inputProps}
      />
      <label className={classes.label} htmlFor={id}>
        <span className={cx(classes.switchIcon, {
          [classes.switchIconMedium]: size === 'medium'
        })} />
        {React.isValidElement(children) ? (
          <span className={classes.children}>{children}</span>
        ) : null}
      </label>
    </div>
  )
})
