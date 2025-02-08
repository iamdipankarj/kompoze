import React from 'react'
import type { OkElement } from '../../utils/utils.types'

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement>, OkElement {
  primary?: React.ReactNode
  secondary?: React.ReactNode
  icon?: React.ReactNode
  endAdornment?: React.ReactNode | null
}
