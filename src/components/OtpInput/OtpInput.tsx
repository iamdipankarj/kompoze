import React, { forwardRef } from 'react'
import { memo, useState, useCallback } from 'react'
import cx from 'classnames'
import { SingleInput } from './SingleInput'
import type { OTPInputProps } from './OtpInput.types'
import classes from './OtpInput.module.css'

export const OtpInput = forwardRef<HTMLDivElement, OTPInputProps>((props, ref) => {
  const {
    className,
    length,
    isNumberInput,
    autoFocus,
    disabled,
    onOTPChange,
    inputStyle,
    error = false,
    ...rest
  } = props

  const [activeInput, setActiveInput] = useState(0)
  const [otpValues, setOTPValues] = useState(Array<string>(length).fill(''))

  // Helper to return OTP from inputs
  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join('')
      onOTPChange(otpValue)
    },
    [onOTPChange]
  )

  // Helper to return value with the right type: 'text' or 'number'
  const getRightValue = useCallback(
    (str: string) => {
      const changedValue = str
      if (!isNumberInput) {
        return changedValue
      }
      return !changedValue || /\d/.test(changedValue) ? changedValue : ''
    },
    [isNumberInput]
  )

  // Change OTP value at focussing input
  const changeCodeAtFocus = useCallback(
    (str: string) => {
      const updatedOTPValues = Array.from(otpValues)
      updatedOTPValues[activeInput] = str[0] || ''
      setOTPValues(updatedOTPValues)
      handleOtpChange(updatedOTPValues)
    },
    [activeInput, handleOtpChange, otpValues]
  )

  // Focus `inputIndex` input
  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0)
      setActiveInput(selectedIndex)
    },
    [length]
  )

  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1)
  }, [activeInput, focusInput])

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1)
  }, [activeInput, focusInput])

  // Handle onFocus input
  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index)
    },
    [focusInput]
  )

  // Handle onChange value for each input
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = getRightValue(e.currentTarget.value)
      if (!val) {
        e.preventDefault()
        return
      }
      changeCodeAtFocus(val)
      focusNextInput()
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  )

  // Hanlde onBlur input
  const onBlur = useCallback(() => {
    setActiveInput(-1)
  }, [])

  // Handle onKeyDown input
  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'Backspace':
        case 'Delete': {
          e.preventDefault()
          if (otpValues[activeInput]) {
            changeCodeAtFocus('')
          } else {
            focusPrevInput()
          }
          break
        }
        case 'ArrowLeft': {
          e.preventDefault()
          focusPrevInput()
          break
        }
        case 'ArrowRight': {
          e.preventDefault()
          focusNextInput()
          break
        }
        case ' ': {
          e.preventDefault()
          break
        }
        default:
          break
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
  )

  const handleOnPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      const pastedData = e.clipboardData
        .getData('text/plain')
        .trim()
        .slice(0, length - activeInput)
        .split('')
      if (pastedData) {
        let nextFocusIndex = 0
        const updatedOTPValues = Array.from(otpValues)
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val)
            if (changedValue) {
              updatedOTPValues[index] = changedValue
              nextFocusIndex = index
            }
          }
        })
        setOTPValues(updatedOTPValues)
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1))
      }
    },
    [activeInput, getRightValue, length, otpValues]
  )

  return (
    <div ref={ref} className={cx(classes.root, className)} {...rest}>
      {Array(length)
        .fill('')
        .map((_, index) => {
          const value = otpValues && otpValues[index]
          return (
            <SingleInput
              key={`SingleInput-${index}`}
              focus={activeInput === index}
              value={value}
              autoFocus={autoFocus}
              onFocus={handleOnFocus(index)}
              onChange={handleOnChange}
              onKeyDown={handleOnKeyDown}
              onBlur={onBlur}
              onPaste={handleOnPaste}
              style={inputStyle}
              disabled={disabled}
              error={error}
              filled={value !== ''}
            />
          )
        })}
    </div>
  )
})
