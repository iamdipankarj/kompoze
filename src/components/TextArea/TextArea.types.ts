export interface TextAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: boolean
  name?: string
  helperText?: string
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>
  startAdornment?: React.ReactNode | null
  endAdornment?: React.ReactNode | null
  value?: any
  required?: boolean
  classList?: {
    textAreaClass?: string
  }
}
