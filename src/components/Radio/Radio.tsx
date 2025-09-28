import React, { forwardRef } from 'react'
import cx from 'classnames'
import classes from './Radio.module.css'
import type { RadioProps } from './Radio.types'

export const Radio = forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const {
    id,
    inputProps,
    children,
    disabled = false,
    hasPointer = true,
    name,
    onChange,
    required,
    checked,
    value,
    className,
    classList = {},
    ...restProps
  } = props
  const { iconClass, labelClass, childrenClass, inputClass } = classList as any

  return (
    <div
      ref={ref}
      className={cx(classes.root, className)}
      {...restProps}
    >
      <input
        id={id}
        type='radio'
        className={cx(classes.input, inputClass)}
        name={name}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        required={required}
        value={value}
        {...inputProps}
      />
      <label
        className={cx(classes.label, labelClass, {
          [classes.hasPointer]: hasPointer
        })}
        htmlFor={id}
      >
        <span className={cx(classes.icon, iconClass)} />
        <div className={cx(classes.children, childrenClass)}>{children}</div>
      </label>
    </div>
  )
})
