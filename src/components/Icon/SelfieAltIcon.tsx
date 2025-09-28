import React, { forwardRef, memo } from 'react'
import { IconWrapper } from './IconWrapper'
import type { IconComponentProps } from './IconWrapper.types'

export const SelfieAltIcon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>((props, ref) => {
    const { fill } = props

    return (
      <IconWrapper
        fill={fill}
        viewBox='0 0 24 24'
        {...props}
      >
        <g transform='translate(-104.964 -451.322)'>
          <path d='M165.637-775.715a2.575,2.575,0,0,1-1.9-.74,2.575,2.575,0,0,1-.74-1.9,2.575,2.575,0,0,1,.74-1.9,2.575,2.575,0,0,1,1.9-.74,2.575,2.575,0,0,1,1.9.74,2.575,2.575,0,0,1,.74,1.9,2.575,2.575,0,0,1-.74,1.9A2.575,2.575,0,0,1,165.637-775.715Zm-4.58,5.655a1.019,1.019,0,0,1-.749-.308,1.019,1.019,0,0,1-.308-.749v-.6a1.939,1.939,0,0,1,.335-1.145,2.148,2.148,0,0,1,.863-.722,13.233,13.233,0,0,1,2.264-.793,9.146,9.146,0,0,1,2.176-.264,8.762,8.762,0,0,1,2.167.273,14.991,14.991,0,0,1,2.255.784,2.123,2.123,0,0,1,.881.722,1.939,1.939,0,0,1,.335,1.145v.6a1.019,1.019,0,0,1-.308.749,1.019,1.019,0,0,1-.749.308Z' transform='translate(-48.673 1238.852)' fill='#9e9e9e' />
          <path d='M963.968,561v5.165h5.165' transform='translate(-855.29 -94.252)' fill='none' stroke='#9e9e9e' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
          <path d='M969.133,561v5.165h-5.165' transform='translate(-843.811 -94.252)' fill='none' stroke='#9e9e9e' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
          <path d='M963.968,566.165V561h5.165' transform='translate(-855.29 -105.731)' fill='none' stroke='#9e9e9e' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
          <path d='M969.133,566.165V561h-5.165' transform='translate(-843.811 -105.731)' fill='none' stroke='#9e9e9e' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
          <line y2='24' transform='translate(116.964 451.322)' fill='none' stroke='#707070' strokeWidth='1' />
          <line y2='24' transform='translate(128.964 463.322) rotate(90)' fill='none' stroke='#707070' strokeWidth='1' />
        </g>
      </IconWrapper>
    )
  })
)
