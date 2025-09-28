import React, { forwardRef } from 'react'
import cx from 'classnames'
import type { ChipSelectProps } from './ChipSelect.types'
import classes from './ChipSelect.module.css'
import { TickIcon } from '@/components/Icon'
import { themeColors } from '@/theme'

/**
 * A custom component that renders the `<input />` HTML Element with customized styles for chips.
 */
export const ChipSelect = forwardRef<HTMLDivElement, ChipSelectProps>((props, ref) => {
  const {
    id,
    inputProps,
    label,
    disabled = false,
    onChange,
    required,
    checked,
    value,
    name,
    className,
    type = 'checkbox',
    ...restProps
  } = props

  return (
    <div
      ref={ref}
      className={cx(classes.root, className)}
      {...restProps}
    >
      <input
        id={id}
        className={classes.input}
        type={type}
        name={name}
        onChange={onChange}
        disabled={disabled}
        value={value}
        checked={checked}
        required={required}
        {...inputProps}
      />
      <label className={classes.label} htmlFor={id}>
        <span className={classes.icon}>
          <TickIcon fill={disabled ? '#666' : themeColors.greenPrimary} />
        </span>
        <span className={classes.text}>
          {label}
        </span>
      </label>
    </div>
  )
})
