import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const TransitionIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  return (
    <IconWrapper
      viewBox='0 0 24 24'
      {...props}
    >
      <g>
        <path d='M0 0H24V24H0z' fill='none' />
        <path d='M0 0H24V24H0z' fill='none' />
      </g>
      <g transform='translate(2 3)'>
        <path d='M16.717 7.7a.984.984 0 0 0 0 1.4l1.9 1.9h-9.2a1 1 0 0 0-1 1 1 1 0 0 0 1 1h9.2l-1.9 1.9a.984.984 0 0 0 0 1.4.984.984 0 0 0 1.4 0l3.59-3.59a1 1 0 0 0 0-1.41l-3.59-3.6a.984.984 0 0 0-1.4 0z' transform='translate(-2 -3)' />
        <path d='M4 19h7a1 1 0 0 1 1 1 1 1 0 0 1-1 1H4a2.006 2.006 0 0 1-2-2V5a2.006 2.006 0 0 1 2-2h7a1 1 0 0 1 1 1 1 1 0 0 1-1 1H4z' transform='translate(-2 -3)' />
      </g>
    </IconWrapper>
  )
})
