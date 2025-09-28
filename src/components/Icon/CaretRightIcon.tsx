import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const CaretRightIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M5.88 3.421L11.164 8.7 5.88 13.989 7.3 15.41l6.7-6.7L7.3 2z' transform='translate(2.12 3)' />
      </IconWrapper>
    )
  })
)
