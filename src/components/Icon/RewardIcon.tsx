import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const RewardIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    const { fill = '#1c873b' } = props

    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        fill={fill}
        {...props}
      >
        <path fill='none' d='M0 0h24v24H0z' /><path d='M19 5h-2V3H7v2H5a2.006 2.006 0 00-2 2v1a4.991 4.991 0 004.39 4.94A5.009 5.009 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.009 5.009 0 003.61-2.96A4.991 4.991 0 0021 8V7a2.006 2.006 0 00-2-2zM5 8V7h2v3.82A3.01 3.01 0 015 8zm7 6a3.009 3.009 0 01-3-3V5h6v6a3.009 3.009 0 01-3 3zm7-6a3.01 3.01 0 01-2 2.82V7h2z' />
      </IconWrapper>
    )
  })
)
