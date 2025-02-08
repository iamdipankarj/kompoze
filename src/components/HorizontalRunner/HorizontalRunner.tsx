import React from 'react'
import { useRef, useState, useEffect } from 'react'
import cx from 'classnames'
import classes from './HorizontalRunner.module.css'
import type { HorizontalRunnerProps } from './HorizontalRunner.types'
import { IconButton } from '@/components/IconButton'
import { CaretLeftIcon, CaretRightIcon } from '@/components/Icon'

export const HorizontalRunner: React.FC<HorizontalRunnerProps> = ({
  children,
  className,
  speed = 25,
  distance = 100,
  step = 10,
  ...restProps
}) => {
  const contentWrapper = useRef<any>(null)
  const [scrollButtonState, setScrollButtonState] = useState({ left: false, right: false })

  const updateScrollButtonState = () => {
    const { scrollLeft, scrollWidth, clientWidth } = contentWrapper.current
    const right = scrollLeft < scrollWidth - clientWidth - 1
    const left = scrollLeft > 1
    setScrollButtonState({
      left,
      right
    })
  }

  const sideScroll = (stepVal: number) => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      contentWrapper.current.scrollLeft += stepVal
      scrollAmount += Math.abs(stepVal)
      if (scrollAmount >= distance) {
        clearInterval(slideTimer)
        updateScrollButtonState()
      }
    }, speed)
  }

  useEffect(() => {
    updateScrollButtonState()
  }, [])

  return (
    <div className={cx(classes.root, className)} {...restProps}>
      <IconButton
        tabIndex={0}
        className={classes.iconContainer}
        variant='outlined'
        size='small'
        onClick={() => { sideScroll(-step) }}
        disabled={!scrollButtonState.left}
      >
        <CaretLeftIcon size={24} />
      </IconButton>

      <div ref={contentWrapper} className={classes.contentContainer}>
        {children}
      </div>
      <IconButton
        tabIndex={0}
        className={classes.iconContainer}
        variant='outlined'
        size='small'
        onClick={() => { sideScroll(step) }}
        disabled={!scrollButtonState.right}
      >
        <CaretRightIcon size={24} />
      </IconButton>
    </div>
  )
}
