import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const SmartPhoneIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    const { fill = '#1c873b' } = props

    return (
      <IconWrapper
        fill={fill}
        viewBox='0 0 24 24'
        {...props}
      >
        <path d='M0,0H24V24H0Z' fill='none' />
        <path d='M17,1.01,7,1A2,2,0,0,0,5.01,3V21A2,2,0,0,0,7,23H17a2.006,2.006,0,0,0,2-2V3A2,2,0,0,0,17,1.01ZM17,19H7V5H17Z' fill='#1c873b' />
      </IconWrapper>
    )
  })
)
