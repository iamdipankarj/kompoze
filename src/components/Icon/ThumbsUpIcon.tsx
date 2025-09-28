import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const ThumbsUpIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M21 8h-6.31l.95-4.57.03-.32a1.505 1.505 0 00-.44-1.06L14.17 1 7.59 7.59A1.955 1.955 0 007 9v10a2.006 2.006 0 002 2h9a1.987 1.987 0 001.84-1.22l3.02-7.05A1.976 1.976 0 0023 12v-2a2.006 2.006 0 00-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21zM1 9h4v12H1z' />
      </IconWrapper>
    )
  })
)
