import React, { forwardRef, memo, useMemo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const ProfileDummyIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    const { fill = 'rgba(216,216,216,0.5)' } = props
    const clipId = useMemo(() => `profile_${Date.now()}`, [])

    return (
      <IconWrapper
        ref={ref}
        viewBox='0 0 128 128'
        {...props}
      >
        <defs>
          <clipPath id={clipId}>
            <path d='M52 52a24 24 0 10-24-24 23.993 23.993 0 0024 24zm0 12C35.98 64 4 72.04 4 88v12h96V88c0-15.96-31.98-24-48-24z' fill='#fff' transform='translate(-4 -4)' />
          </clipPath>
        </defs>
        <g transform='translate(-16 -40)'>
          <circle cx='64' cy='64' r='64' fill={fill} transform='translate(16 40)' />
          <g clipPath={`url(#${clipId})`} transform='translate(32 70)'>
            <circle cx='62.4' cy='62.4' r='62.4' fill='#fff' transform='translate(-14.4 -28.8)' />
          </g>
        </g>
      </IconWrapper>
    )
  })
)
