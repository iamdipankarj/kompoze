import type { InputHTMLAttributes } from 'react'
import type { KompozeElementSize } from '@/utils/utils.types'

export interface ChipSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
  id: string
  area?: KompozeElementSize
  label?: string
  disabled?: boolean
  checked?: boolean
  name?: string
  required?: boolean
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  value?: InputHTMLAttributes<HTMLInputElement>['value']
  type?: 'checkbox' | 'radio'
}
