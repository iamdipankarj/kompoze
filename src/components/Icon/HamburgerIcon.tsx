import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const HamburgerIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  const { fill = '#212121' } = props

  return (
    <IconWrapper
      viewBox='0 0 24 24'
      fill={fill}
      {...props}
    >
      <path fill='none' d='M0 0h24v24H0z' /><path fill={fill} d='M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' />
    </IconWrapper>
  )
})
