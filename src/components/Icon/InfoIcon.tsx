import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const InfoIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <g transform='translate(0 24)'>
          <path fill='none' d='M-384-504h24v24h-24z' transform='translate(384 480)' />
          <path d='M11-7h2v-6h-2v6zm1-15A10 10 0 002-12 10 10 0 0012-2a10 10 0 0010-10 10 10 0 00-10-10zm0 18a8.011 8.011 0 01-8-8 8.011 8.011 0 018-8 8.011 8.011 0 018 8 8.011 8.011 0 01-8 8zm-1-11h2v-2h-2v2z' clipRule='evenodd' />
        </g>
      </IconWrapper>
    )
  })
)
