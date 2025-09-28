import React from 'react'
import type { KompozeElement } from '@/utils/utils.types'

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement>, KompozeElement {
  primary?: React.ReactNode
  secondary?: React.ReactNode
  icon?: React.ReactNode
  endAdornment?: React.ReactNode | null
}
