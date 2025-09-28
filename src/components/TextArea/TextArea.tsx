import React, { forwardRef } from 'react'
import cx from 'classnames'
import type { TextAreaProps } from './TextArea.types'
import classes from './TextArea.module.css'

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>((props, ref) => {
  const {
    startAdornment = null,
    endAdornment = null,
    error = false,
    name,
    required = false,
    helperText,
    placeholder,
    inputProps,
    className,
    value,
    classList = {},
    ...restProps
  } = props
  const { textAreaClass } = classList as any

  return (
    <div
      ref={ref}
      className={cx(classes.root, className)}
      {...restProps}
    >
      <div className={classes.container}>
        {startAdornment ? (
          <span className={cx(
            classes.adornElement,
            classes.startAdornElement
          )}
          >{startAdornment}
          </span>
        ) : null}
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          className={cx(
            classes.input,
            {
              [classes.hasStartAdornment]: (startAdornment !== null),
              [classes.hasEndAdornment]: (endAdornment !== null),
              [classes.inputError]: error
            },
            textAreaClass
          )}
          required={required}
          {...inputProps}
        />
        {endAdornment ? (
          <span className={cx(
            classes.adornElement,
            classes.endAdornElement
          )}
          >{endAdornment}
          </span>
        ) : null}
      </div>
      {helperText ? (
        <span
          className={cx(
            classes.helper,
            {
              [classes.helperError]: error
            }
          )}
        >{helperText}
        </span>
      ) : null}
    </div>
  )
})
