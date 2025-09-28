import React, { forwardRef } from 'react'
import { useState, useEffect } from 'react'
import cx from 'classnames'
import classes from './Snackbar.module.css'
import type { SnackbarProps } from './Snackbar.types'
import { useEventCallback } from '@/utils/hooks'

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>((props, ref) => {
  const {
    autoHide = false,
    autoHideDuration = 6000,
    action = null,
    startAdornment = null,
    onExit,
    children,
    className,
    ...restProps
  } = props
  const [mounted, setMounted] = useState<boolean>(true)

  const handleExit = useEventCallback((e: any) => {
    if (onExit) {
      onExit(e, 'timeout')
    }
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (autoHide) {
        handleExit()
        setMounted(false)
      }
    }, autoHideDuration)

    return () => clearTimeout(timeout)
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={ref}
      className={cx(classes.root, className)}
      role='alert'
      {...restProps}
    >
      {startAdornment ? (
        <span className={classes.adornment}>{startAdornment}</span>
      ) : null}
      <span className={classes.message}>{children}</span>
      {action ? (
        <div className={classes.action}>{action}</div>
      ) : null}
    </div>
  )
})
