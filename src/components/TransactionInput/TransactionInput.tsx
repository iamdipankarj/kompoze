import React, { forwardRef } from 'react'
import { useRef, useState, useEffect } from 'react'
import cx from 'classnames'
import classes from './TransactionInput.module.css'
import type { TransactionInputProps } from './TransactionInput.types'

export const TransactionInput = forwardRef<HTMLDivElement, TransactionInputProps>((props, ref) => {
  const inputEl = useRef<HTMLInputElement>(null)
  const {
    inputProps,
    onChangeValue,
    required,
    className,
    iconColor,
    error = false,
    helperText,
    value,
    ...restProps
  } = props
  const [localValue, setLocalValue] = useState('')

  /**
   * @todo Add better regex for comma parsing
   * @requires Regex value.replace(/[^0-9.]/g, '')
   * @version 1.4.12
   * @param {Event} e - Input event
   */
  const onUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value)
    const floatValue = Number.parseFloat(e.target.value)
    if (onChangeValue) {
      onChangeValue(floatValue)
    }
  }

  const onClickRoot = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    if (inputEl.current) {
      inputEl.current.focus()
    }
  }

  useEffect(() => {
    if (value) {
      setLocalValue(value)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cx(classes.root, className)}
      onClick={onClickRoot}
      {...restProps}
    >
      <div className={cx(classes.wrapper, {
        [classes.wrapperError]: error
      })}>
        <div className={classes.container}>
          <span className={classes.proxy}>{localValue}</span>
          <div className={classes.inputWrapper}>
            <span className={cx(classes.icon, {
              color: iconColor
            })}>₹</span>
            <input
              ref={inputEl}
              className={classes.input}
              type='number'
              inputMode='numeric'
              value={value}
              onChange={onUpdate}
              required={required}
              {...inputProps}
            />
          </div>
        </div>
      </div>
      {helperText ? (
        <span
          className={cx(
            classes.helper,
            { [classes.helperError]: error }
          )}
        >{helperText}
        </span>
      ) : null}
    </div>
  )
})
