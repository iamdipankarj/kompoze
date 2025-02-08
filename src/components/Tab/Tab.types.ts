export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  label?: string
  index?: number
}
