import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const VoiceIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  const { fill = '#0574e3' } = props

  return (
    <IconWrapper
      viewBox='0 0 24 24'
      fill={fill}
      {...props}
    >
      <g transform='translate(-252 -381)'>
        <g transform='translate(252 405)'>
          <path fill='none' d='M-192-216h24v24h-24z' transform='translate(192 192)' />
          <path fill={fill} d='M12-10a2.987 2.987 0 002.99-3l.01-6a3 3 0 00-3-3 3 3 0 00-3 3v6a3 3 0 003 3zm5.3-3A5.189 5.189 0 0112-7.9 5.189 5.189 0 016.7-13H5a6.984 6.984 0 006 6.72V-3h2v-3.28A6.968 6.968 0 0019-13z' clipRule='evenodd' />
        </g>
      </g>
    </IconWrapper>
  )
})
