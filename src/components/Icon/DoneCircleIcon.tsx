import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const DoneCircleIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  const { fill = '#1c873b' } = props
  return (
    <IconWrapper
      viewBox='0 0 31 31'
      fill={fill}
      {...props}
    >
      <path fill='none' d='M.5.5h30v30H.5z' /><path fill='#fff' stroke='#fff' strokeWidth='6' d='M15.5 3A12.5 12.5 0 1028 15.5 12.5 12.5 0 0015.5 3z' /><path d='M15.5 3A12.5 12.5 0 1028 15.5 12.5 12.5 0 0015.5 3zM13 21.75L6.75 15.5l1.762-1.762L13 18.212l9.487-9.487L24.25 10.5z' />
    </IconWrapper>
  )
})
