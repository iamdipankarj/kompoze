import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const UserIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 24 24'
        {...props}
      >
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M21.834 5H4.2a2.2 2.2 0 0 0-2.189 2.2L2 20.426a2.21 2.21 0 0 0 2.2 2.2h17.63a2.21 2.21 0 0 0 2.2-2.2V7.2A2.21 2.21 0 0 0 21.834 5z' transform='translate(-1.019 -1.816)' />
        <path d='M10.161 14.2a2.518 2.518 0 1 0-2.518-2.518 2.525 2.525 0 0 0 2.518 2.518zm-5.036 5.038H15.2v-1.259c0-1.674-3.361-2.518-5.036-2.518s-5.036.843-5.036 2.518z' transform='translate(1.771 -2.204)' fill='#fff' />
      </IconWrapper>
    )
  })
)
