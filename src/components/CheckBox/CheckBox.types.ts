import type { IElementSize, OkElement } from '@/utils/utils.types'

export interface CheckBoxProps extends React.HTMLAttributes<HTMLDivElement>, OkElement {
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
  id: string
  area?: IElementSize
  disabled?: boolean
  checked?: boolean
  required?: boolean
  alignCenter?: boolean,
  name?: string
  value?: any
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  classList?: {
    childrenClass?: string
    labelClass?: string
  }
}
