import React from 'react'
import type { OkElement } from '../../utils/utils.types'

export interface SVGIconProps extends React.SVGProps<SVGSVGElement>, OkElement {
  size?: number
  fill?: string
}
