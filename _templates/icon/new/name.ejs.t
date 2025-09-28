---
to: src/components/Icon/<%= name %>.tsx
---
import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import { SVGIconProps } from './IconWrapper.types'

export const <%= name %> = memo<SVGIconProps>((props: SVGIconProps) => {
  const { fill = '#1c873b' } = props

  return (
    <IconWrapper
      fill={fill}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M5.989 23A2 2 0 014 21V3a2.006 2.006 0 012-2h10l4 4v16a2.006 2.006 0 01-2 2zM6 21h12V6h-3V3H6zm1.5-2.29v-1.5h9v1.5zm0-2.5v-1.5h9v1.5zm0-2.5v-1.5h9v1.5zm4.716-2.5v-1.5H16.5v1.5zm-3.181 0L7.5 8.737v-.528h.528a.885.885 0 00.5-.14.587.587 0 00.262-.4H7.5v-.815h1.32a.634.634 0 00-.26-.391.849.849 0 00-.5-.146h-.561v-.822h3.84v.822h-1.176a1.292 1.292 0 01.12.249 2.225 2.225 0 01.079.288h.977v.815h-1a1.589 1.589 0 01-1.144 1.2l1.6 2.335z" />
    </IconWrapper>
  )
})
