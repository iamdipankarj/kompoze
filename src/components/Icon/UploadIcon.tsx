import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const UploadIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  const { fill = '#1c873b' } = props
  return (
    <IconWrapper
      viewBox='0 0 20 20'
      {...props}
    >
      <path fill='none' d='M0,0H20V20H0Z' transform='translate(20 20) rotate(180)' /><path fill={fill} d='M5,8.058l2.158-2.15L8.333,7.083,4.167,11.25,0,7.083,1.175,5.908l2.158,2.15V0H5Z' transform='translate(14.167 17.5) rotate(180)' /><rect fill={fill} width='13.333' height='1.667' transform='translate(16.667 4.167) rotate(180)' />
    </IconWrapper>
  )
})
