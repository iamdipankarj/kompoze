import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const TickIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  const { fill = '#1c873b' } = props
  return (
    <IconWrapper
      viewBox='0 0 16 16'
      fill={fill}
      {...props}
    >
      <path d='M6 10.8L3.2 8l-.933.933L6 12.666l8-8-.933-.933z' />
    </IconWrapper>
  )
})
