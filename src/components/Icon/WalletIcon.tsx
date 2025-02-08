import React, { memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { SVGIconProps } from './IconWrapper.types'

export const WalletIcon = memo<SVGIconProps>((props: SVGIconProps) => {
  return (
    <IconWrapper
      viewBox='0 0 20 20'
      {...props}
    >
      <path d='M0 0h20v20H0z' fill='none' />
      <path d='M17.211 6.329V4.556A1.572 1.572 0 0015.632 3H4.579A1.567 1.567 0 003 4.556v10.888A1.567 1.567 0 004.579 17h11.053a1.572 1.572 0 001.579-1.556v-1.773A1.552 1.552 0 0018 12.333V7.667a1.543 1.543 0 00-.789-1.338zm-.789 1.338v4.667h-5.527V7.667zM4.579 15.444V4.556h11.053v1.555h-4.737a1.572 1.572 0 00-1.579 1.556v4.667a1.572 1.572 0 001.579 1.556h4.737v1.556z' />
      <circle cx='1.5' cy='1.5' r='1.5' transform='translate(11.738 8.5)' />
    </IconWrapper>
  )
})
