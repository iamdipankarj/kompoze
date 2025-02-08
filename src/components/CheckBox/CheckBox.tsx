import React from 'react'
import cx from 'classnames'
import type { CheckBoxProps } from './CheckBox.types'
import classes from './CheckBox.module.css'

export const CheckBox: React.FC<CheckBoxProps> = props => {
  const {
    id,
    inputProps,
    children,
    disabled = false,
    onChange,
    required,
    value,
    checked,
    name,
    className,
    alignCenter = false,
    classList = {},
    ...restProps
  } = props
  const { childrenClass, labelClass, inputClass } = classList as any

  return (
    <div
      className={cx(classes.root, className)}
      {...restProps}
    >
      <input
        id={id}
        type='checkbox'
        className={cx(classes.input, inputClass)}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        required={required}
        name={name}
        value={value}
        {...inputProps}
      />
      <label
        htmlFor={id}
        className={cx(classes.label, {
          [classes.alignCenter]: alignCenter
        }, labelClass)}
      >
        <span className={classes.icon}>
          <span className={classes.tick} />
        </span>
        <div className={cx(classes.children, childrenClass)}>{children}</div>
      </label>
    </div>
  )
}
