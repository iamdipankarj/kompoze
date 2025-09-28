import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const BoldArrowUpIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 20 20'
        {...props}
      >
        <path fill='none' d='M0 0v20h20V0z' /><path d='M8.667 18V7.107L5.88 9.88 4 8l6-6 6 6-1.88 1.88-2.787-2.773V18z' />
      </IconWrapper>
    )
  })
)
