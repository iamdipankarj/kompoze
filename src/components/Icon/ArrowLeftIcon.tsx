import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const ArrowLeftIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  return (
    <IconWrapper
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z' />
    </IconWrapper>
  )
})
