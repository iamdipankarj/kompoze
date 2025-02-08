import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const CaretLeftIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  return (
    <IconWrapper
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M16 6.421L10.716 11.7L16 16.989L14.58 18.41L7.88 11.71L14.58 5L16 6.421Z' />
    </IconWrapper>
  )
})
