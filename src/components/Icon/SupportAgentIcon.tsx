import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const SupportAgentIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    const { fill = '#1c873b' } = props

    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 20 20'
        fill={fill}
        {...props}
      >
        <path d='M7.5,15V13.332h6.667V7.416a5.834,5.834,0,0,0-11.667,0V12.5H1.668A1.673,1.673,0,0,1,0,10.832V9.166A1.641,1.641,0,0,1,.834,7.733a7.5,7.5,0,1,1,15-.051,1.534,1.534,0,0,1,.834,1.349V10.95a1.537,1.537,0,0,1-.834,1.365v1.017A1.672,1.672,0,0,1,14.167,15ZM10,8.332a.834.834,0,1,1,.834.834A.834.834,0,0,1,10,8.332Zm-5,0a.834.834,0,1,1,.834.834A.834.834,0,0,1,5,8.332ZM8.375,2.5a5.035,5.035,0,0,1,4.959,4.191A6.7,6.7,0,0,1,7.4,2.966,6.722,6.722,0,0,1,3.349,7.875,5.039,5.039,0,0,1,8.375,2.5Z' transform='translate(1.666 2.501)' />
      </IconWrapper>
    )
  })
)
