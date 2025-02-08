import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const RepeatIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  return (
    <IconWrapper
      viewBox='0 0 24 24'
      {...props}
    >
      <path fill='none' d='M0,0H24V24H0Z' /><path d='M7.091,7.095H17.329v1.83a.507.507,0,0,0,.87.358l2.857-2.852a.505.505,0,0,0,0-.726L18.2,2.853a.512.512,0,0,0-.87.368v1.83H6.067A1.026,1.026,0,0,0,5.043,6.073v4.088a1.024,1.024,0,0,0,2.048,0ZM17.329,17.316H7.091v-1.83a.507.507,0,0,0-.87-.358L3.364,17.98a.505.505,0,0,0,0,.726L6.22,21.558a.512.512,0,0,0,.87-.368V19.36H18.353a1.026,1.026,0,0,0,1.024-1.022V14.25a1.024,1.024,0,0,0-2.048,0Z' transform='translate(-0.21 -0.206)' />
    </IconWrapper>
  )
})
