import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const ShieldIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z' />
      </IconWrapper>
    )
  })
)
