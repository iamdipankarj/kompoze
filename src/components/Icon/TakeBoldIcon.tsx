import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const TakeBoldIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  return (
    <IconWrapper
      viewBox='0 0 28 28'
      {...props}
    >
      <path d='M18.667 10.37H9.193v3.775L0 7.206 9.193 0v3.918h9.473z' transform='rotate(-270 14 14) rotate(180 11.375 10.603)' />
    </IconWrapper>
  )
})
