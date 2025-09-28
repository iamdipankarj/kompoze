import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const InfoFilledIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 12 12'
        {...props}
      >
        <path d='M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm.6 9H7.4V7.4h1.2zm0-4.8H7.4V5h1.2z' transform='translate(-2 -2)' />
      </IconWrapper>
    )
  })
)