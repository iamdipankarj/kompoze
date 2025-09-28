import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const TruckIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M20 8h-3V4H3a2.006 2.006 0 00-2 2v11h2a3 3 0 006 0h6a3 3 0 006 0h2v-5zm-.5 1.5l1.96 2.5H17V9.5zM6 18a1 1 0 111-1 1 1 0 01-1 1zm2.22-3a2.964 2.964 0 00-4.44 0H3V6h12v9zM18 18a1 1 0 111-1 1 1 0 01-1 1z' />
      </IconWrapper>
    )
  })
)
