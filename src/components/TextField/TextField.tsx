import React from 'react'
import { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import { isValidValue } from '../../utils'
import classes from './TextField.module.css'
import type { TextFieldProps } from './TextField.types'

export const TextField: React.FC<TextFieldProps> = props => {
  const {
    startAdornment = null,
    endAdornment = null,
    error = false,
    type = 'text',
    name,
    required = false,
    disabled = false,
    helperText,
    placeholder = '',
    onChange,
    inputProps,
    className,
    value,
    label,
    classList = {},
    ...restProps
  } = props
  const { startAdornmentClass, inputClass, endAdornmentClass, helperClass } = classList as any

  const inputRef = useRef<HTMLInputElement>(null)
  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  useEffect(() => {
    if (value) {
      setFocused(isValidValue(value))
    }
  }, [value])

  return (
    <div
      className={cx(classes.root, className)}
      {...restProps}
    >
      <div className={classes.container}>
        {(label && !placeholder) && (
          <label className={cx(classes.label, {
            [classes.focusActive]: focused || isValidValue(inputRef?.current?.value),
            [classes.focusActiveError]: error,
            [classes.adornActive]: startAdornment !== null
          })}
          >
            {label}
          </label>
        )}
        <div className={classes.fieldContainer}>
          {startAdornment && (
            <span className={cx(
              classes.adornElement,
              classes.startAdornElement,
              startAdornmentClass
            )}
            >{startAdornment}
            </span>
          )}
          <input
            ref={inputRef}
            type={type}
            name={name}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={cx(
              classes.input,
              inputClass,
              {
                [classes.hasStartAdornment]: (startAdornment !== null),
                [classes.hasEndAdornment]: (endAdornment !== null),
                [classes.inputError]: error
              }
            )}
            required={required}
            {...inputProps}
          />
          {endAdornment && (
            <span className={cx(
              classes.adornElement,
              classes.endAdornElement,
              endAdornmentClass
            )}
            >{endAdornment}
            </span>
          )}
        </div>
      </div>
      {helperText && (
        <span
          className={cx(
            helperClass,
            classes.helper,
            {
              [classes.helperError]: error,
              [classes.focusedHelper]: focused
            }
          )}
        >{helperText}
        </span>
      )}
    </div>
  )
}
