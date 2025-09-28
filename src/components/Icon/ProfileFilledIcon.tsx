import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const ProfileFilledIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <g transform='translate(-.267 24)'>
          <path fill='none' d='M-336-72h24v24h-24z' transform='translate(336.267 48)' />
          <path d='M12-22A10 10 0 002-12 10 10 0 0012-2a10 10 0 0010-10 10 10 0 00-10-10zm0 3a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z' clipRule='evenodd' />
        </g>
      </IconWrapper>
    )
  })
)
