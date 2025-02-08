import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const ThumbsDownIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  return (
    <IconWrapper
      viewBox='0 0 24 24'
      {...props}
    >
      <path fill='none' d='M24 24H0V0h24z' />
      <path d='M3 16h6.31l-.95 4.57-.03.32a1.505 1.505 0 00.44 1.06L9.83 23l6.58-6.59A1.955 1.955 0 0017 15V5a2.006 2.006 0 00-2-2H6a1.987 1.987 0 00-1.84 1.22l-3.02 7.05A1.976 1.976 0 001 12v2a2.006 2.006 0 002 2zm0-4l3-7h9v10l-4.34 4.34L11.77 14H3zm20 3h-4V3h4z' />
    </IconWrapper>
  )
})
