import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const SyncIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M12 4V2.21a.5.5 0 0 0-.85-.35l-2.8 2.79a.5.5 0 0 0 0 .71l2.79 2.79a.506.506 0 0 0 .86-.36V6a6 6 0 0 1 6 6 5.823 5.823 0 0 1-.44 2.25.961.961 0 0 0 .23 1.04 1 1 0 0 0 1.64-.34A7.828 7.828 0 0 0 20 12a8 8 0 0 0-8-8zm0 14a6 6 0 0 1-6-6 5.823 5.823 0 0 1 .44-2.25.961.961 0 0 0-.23-1.04 1 1 0 0 0-1.64.34A7.828 7.828 0 0 0 4 12a8 8 0 0 0 8 8v1.79a.5.5 0 0 0 .85.35l2.79-2.79a.5.5 0 0 0 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36z' transform='translate(0 -.128)' />
      </IconWrapper>
    )
  })
)
