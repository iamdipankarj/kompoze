import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const InfoFilledIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  return (
    <IconWrapper
      viewBox='0 0 12 12'
      {...props}
    >
      <path d='M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm.6 9H7.4V7.4h1.2zm0-4.8H7.4V5h1.2z' transform='translate(-2 -2)' />
    </IconWrapper>
  )
})
