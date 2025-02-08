export interface SizeProps {
  size?: 'small' | 'medium'
}

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
  id: string
  disabled?: boolean
  size?: SizeProps['size']
  checked?: boolean
  required?: boolean
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}
