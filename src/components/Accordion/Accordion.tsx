import React, { forwardRef } from 'react'
import { useState, useEffect } from 'react'
import cx from 'classnames'
import type { AccordionProps } from './Accordion.types'
import { CaretRightIcon } from '@/components/Icon'
import { themeColors } from '@/theme'
import classes from './Accordion.module.css'

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const {
    expanded = false,
    children,
    label,
    startIcon = null,
    className,
    classList = {},
    onOpen = () => {},
    onClose = () => {},
    endIcon,
    ...restProps
  } = props
  const {
    childrenClass,
    root,
    container,
    active,
    iconStart,
    labelClass,
    iconEnd,
    iconEndActive,
    region
  } = classList as any

  const [expandedState, setExpandedState] = useState(false)

  useEffect(() => {
    if (expanded !== null) {
      setExpandedState(expanded)
    }
  }, [expanded])

  useEffect(() => {
    if (expandedState) {
      onClose()
    } else {
      onOpen()
    }
  }, [expandedState])

  const handleToggle = () => {
    setExpandedState(!expandedState)
  }

  const handleKeyPress = (e: any) => {
    if (e.which === 13) {
      handleToggle()
    }
  }

  return (
    <div
      ref={ref}
      className={cx(classes.root, root, className)}
      aria-expanded={expandedState}
      aria-label={label}
      {...restProps}
    >
      <div
        tabIndex={0}
        role='button'
        onClick={handleToggle}
        onKeyPress={handleKeyPress}
        className={cx(classes.container, container, {
          [classes.active]: expandedState,
          [active]: expandedState
        })}
      >
        {startIcon && <span className={cx(classes.icon, classes.iconStart, iconStart)}>{startIcon}</span>}
        <h3 className={cx(classes.label, labelClass)}>{label}</h3>
        <span
          className={cx(classes.icon, classes.direction, iconEnd, {
            [classes.iconActive]: expandedState,
            [iconEndActive]: expandedState
          })}
        >
          {endIcon || <CaretRightIcon size={24} fill={themeColors.greenPrimary} />}
        </span>
      </div>
      {expandedState ? (
        <div className={cx(classes.region, region)}>
          <div role='region' className={childrenClass}>
            {children}
          </div>
        </div>
      ) : null}
    </div>
  )
})
