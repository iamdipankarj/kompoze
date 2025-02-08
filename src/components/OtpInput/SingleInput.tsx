import React, { memo, useRef, useLayoutEffect, useEffect } from 'react'
import cx from 'classnames'
import classes from './OtpInput.module.css'
import type { SingleOTPInputProps } from './OtpInput.types'

const usePrevious = (value?: any) => {
  const ref = useRef<any>()

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current
}

export const SingleInput = memo<SingleOTPInputProps>((props: SingleOTPInputProps) => {
  const {
    focus,
    autoFocus,
    filled = false,
    error = false,
    ...rest
  } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const prevFocus = usePrevious(!!focus)

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus()
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus()
        inputRef.current.select()
      }
    }
  }, [autoFocus, focus, prevFocus])

  return (
    <input
      ref={inputRef}
      type='number'
      className={cx(classes.singleInput, {
        [classes.filled]: filled,
        [classes.error]: error
      })}
      {...rest}
    />
  )
})
