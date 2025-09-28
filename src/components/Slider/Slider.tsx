import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import cx from 'classnames'
import type { SliderProps, ISliderData, UIDomEvent } from './Slider.types'
import classes from './Slider.module.css'
import { IconButton } from '@/components/IconButton'
import { CaretLeftIcon, CaretRightIcon } from '@/components/Icon'

const SCROLL_OFFSET_TO_STOP_SCROLL = 30

const getDragX = (e: UIDomEvent, isTouch: boolean) => {
  return isTouch ? e.touches[0].pageX : e.pageX
}

export const Slider: React.FC<SliderProps> = props => {
  const {
    selected = 0,
    loop = false,
    showArrows = false,
    showNav = true,
    className,
    children = [],
    navPosition = 'bottom',
    autoTransition = false,
    autoTransitionDelay = 4000,
    highlightVisited = false,
    onSlideChange,
    classList = {},
    ...restProps
  } = props
  const { navClass, navBtnClass, navBtnActiveClass, containerClass, slidesContainerClass } = classList as any

  const childCount = (children as React.ReactNode[]).filter(Boolean).length
  const slides = useMemo(() => {
    return (children as React.ReactNode[]).filter(React.isValidElement)
  }, [childCount])
  const rootRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<any>(null)

  const [data, setData] = useState<ISliderData>({
    dragStart: 0,
    index: selected,
    lastIndex: selected,
    transition: false,
    dragStartTime: new Date(),
    slideWidth: 0
  })
  const [isManualEvent, setIsManualEvent] = useState(false)

  /**
   * Update individual state
   * @param {string }key State key
   * @param {any} value The value to update to
   */
  const updateState = (key: keyof ISliderData, value: any) => {
    setData({
      ...data,
      [key]: value
    })
  }

  /**
   * Initiate dragging process
   * @param {UIDomEvent} event
   * @param {boolean} isTouch Is it on mobile?
   */
  const handleDragStart = (event: UIDomEvent, isTouch: boolean) => {
    const x = getDragX(event, isTouch)

    setData({
      ...data,
      dragStart: x,
      dragStartTime: new Date(),
      transition: false,
      slideWidth: rootRef.current?.offsetWidth || 0
    })
  }

  /**
   * Calculate touch offsets during slide drag
   *
   * @param {UIDomEvent}
   * @param {boolean} isTouch Is it on mobile?
   */
  const handleDragMove = (event: UIDomEvent, isTouch: boolean) => {
    const {
      dragStart,
      lastIndex,
      slideWidth
    } = data

    const x = getDragX(event, isTouch)
    const offset = dragStart - x
    const percentageOffset = offset / slideWidth
    const newIndex = lastIndex + percentageOffset

    if (Math.abs(offset) > SCROLL_OFFSET_TO_STOP_SCROLL) {
      event.stopPropagation()
      event.preventDefault()
    }

    updateState('index', newIndex)
  }

  /**
   * Detect slide upon touch/drag is ended
   */
  const handleDragEnd = () => {
    const {
      dragStartTime,
      index,
      lastIndex
    } = data

    const timeElapsed = new Date().getTime() - dragStartTime.getTime()
    const offset = lastIndex - index
    const velocity = Math.round((offset / timeElapsed) * 10000)

    let newIndex = Math.round(index)

    if (Math.abs(velocity) > 5) {
      newIndex = velocity < 0 ? lastIndex + 1 : lastIndex - 1
    }

    if (children) {
      if (newIndex < 0) {
        newIndex = 0
      } else if (newIndex >= slides.length) {
        newIndex = slides.length - 1
      }
    }

    setData({
      ...data,
      dragStart: 0,
      index: newIndex,
      lastIndex: newIndex,
      transition: true
    })
  }

  /**
   * Navigate to a particular slide
   * @param {number} index The index of the slide
   * @param {UIDomEvent} event
   */
  const goToSlide = useCallback((index: number, event?: UIDomEvent) => {
    if (event) {
      setIsManualEvent(true)
      event.preventDefault()
      event.stopPropagation()
    } else {
      setIsManualEvent(false)
    }

    let currentIndex = index

    if (currentIndex < 0) {
      currentIndex = loop ? slides.length - 1 : 0
    } else if (currentIndex >= slides.length) {
      currentIndex = loop ? 0 : slides.length - 1
    }

    setData({
      ...data,
      index: currentIndex,
      lastIndex: currentIndex,
      transition: true
    })
  }, [loop, slides.length, data])

  const shouldHighlightNavBtn = (index: number) => {
    return highlightVisited ? index <= data.lastIndex : index === data.lastIndex
  }

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  /**
   * Start autotransition
   */
  const startAuto = useCallback(() => {
    let index = data.index
    timerRef.current = setInterval(() => {
      let newIndex = index + 1
      if (newIndex < slides.length) {
        goToSlide(newIndex)
      } else if (loop) {
        newIndex = 0
        goToSlide(newIndex)
      } else {
        clearTimer()
      }
      index = newIndex
    }, autoTransitionDelay)
  }, [data.index, slides.length, loop])

  /**
   * Fire callback onSlideChange with the index after slide change
   */
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(data.lastIndex)
    }
  }, [data.lastIndex, onSlideChange])

  /**
   * Initiate autotransition on component mount if autoTransition is true
   */
  useEffect(() => {
    if (autoTransition) {
      startAuto()
    }
    return () => {
      clearTimer()
    }
  }, [autoTransition])

  /**
   * Restart the autotransition after every manual transition
   */
  useEffect(() => {
    if (autoTransition && isManualEvent) {
      clearTimer()
      startAuto()
    }
  }, [data.index, isManualEvent, autoTransition])

  return (
    <div
      ref={rootRef}
      className={cx(classes.root, className)}
      {...restProps}
    >
      {/* Left Arrow */}
      {showArrows && (loop || data.lastIndex > 0) && (
        <IconButton
          className={cx(classes.arrow, classes.arrowLeft)}
          onClick={(e: any) => goToSlide(data.lastIndex - 1, e)}
        >
          <CaretLeftIcon fill='#212121' size={36} />
        </IconButton>
      )}

      {/* Right Arrow */}
      {showArrows && (loop || data.lastIndex < slides.length - 1) && (
        <IconButton
          className={cx(classes.arrow, classes.arrowRight)}
          onClick={(e: any) => goToSlide(data.lastIndex + 1, e)}
        >
          <CaretRightIcon fill='#212121' size={36} />
        </IconButton>
      )}

      <div
        className={containerClass}
        onTouchStart={(event: any) => handleDragStart(event, true)}
        onTouchMove={(event: any) => handleDragMove(event, true)}
        onTouchEnd={handleDragEnd}
      >
        {showNav && navPosition === 'top' ? (
          <div className={cx(classes.sliderNav, classes.sliderNavTop, navClass)}>
            {slides.map((_, idx) => (
              <button
                type='button'
                key={idx}
                onClick={(e: any) => goToSlide(idx, e)}
                className={cx(classes.navBtn, navBtnClass, {
                  [cx(classes.navBtnActive, navBtnActiveClass)]: (shouldHighlightNavBtn(idx))
                })}
              >
                {idx}
              </button>
            ))}
          </div>
        ) : null}
        <div
          className={cx(classes.container, slidesContainerClass, {
            [classes.withTransition]: data.transition
          })}
          style={{
            transform: `translateX(${-1 * data.index * (100 / slides.length)}%)`,
            width: `${100 * slides.length}%`
          }}
        >
          {children}
        </div>
        {showNav && navPosition === 'bottom' ? (
          <div className={cx(classes.sliderNav, classes.sliderNavBottom, navClass)}>
            {slides.map((_, idx) => (
              <button
                type='button'
                key={idx}
                onClick={(e: any) => goToSlide(idx, e)}
                className={cx(classes.navBtn, navBtnClass, {
                  [cx(classes.navBtnActive, navBtnActiveClass)]: (shouldHighlightNavBtn(idx))
                })}
              >
                {idx}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
