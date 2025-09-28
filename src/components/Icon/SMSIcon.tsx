import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const SMSIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M20 2H4a2.006 2.006 0 0 0-2 2v18l4-4h14a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2zm0 14H5.17L4 17.17V4h16zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z' />
      </IconWrapper>
    )
  })
)
