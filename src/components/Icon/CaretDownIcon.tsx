import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const CaretDownIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <path fill='none' d='M0 0h24v24H0z' transform='rotate(-90 12 12)' />
        <path d='M6 0L0 6l6 6 1.41-1.41L2.83 6l4.58-4.59z' transform='rotate(-90 12 12) translate(8.2 6)' />
      </IconWrapper>
    )
  })
)
