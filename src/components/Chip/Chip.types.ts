import React from 'react'

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  clickable?: boolean
  active?: boolean
  label?: React.ReactNode
}
