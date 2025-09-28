import type { KompozeElement } from '@/utils/utils.types'

export interface RadioProps extends React.HTMLAttributes<HTMLDivElement>, KompozeElement {
  id: string
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
  disabled?: boolean
  checked?: boolean
  required?: boolean
  name?: string
  value?: any
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  hasPointer?: boolean
}
