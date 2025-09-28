import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const BoldArrowDownIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 20 20'
        {...props}
      >
        <path fill='none' d='M0 20V0h20v20z' /><path d='M8.667 2v10.893L5.88 10.12 4 12l6 6 6-6-1.88-1.88-2.787 2.773V2z' />
      </IconWrapper>
    )
  })
)
