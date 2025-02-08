import React from 'react'
import type { OkElement } from '../../utils/utils.types'

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement>, OkElement {
  expanded?: boolean | null
  startIcon?: React.ReactNode | null
  endIcon?: React.ReactNode | null
  label?: string
  onOpen?: () => void
  onClose?: () => void
}
