import React from 'react'
import type { KompozeElement } from '@/utils/utils.types'

export interface SVGIconProps extends React.SVGProps<SVGSVGElement>, KompozeElement {
  size?: number
  fill?: string
}

export type IconComponentProps = Omit<SVGIconProps, 'ref'>
