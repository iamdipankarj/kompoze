import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const TickIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    const { fill = '#1c873b', ...rest } = props
    return (
      <IconWrapper ref={ref} viewBox="0 0 16 16" fill={fill} {...rest}>
        <path d="M6 10.8L3.2 8l-.933.933L6 12.666l8-8-.933-.933z" />
      </IconWrapper>
    )
  })
)
