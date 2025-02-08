export interface TitleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  primary?: React.ReactNode | null
  secondary?: React.ReactNode | null
  avatar?: React.ReactNode | null
  onStartIconClick?: (e: React.SyntheticEvent) => void
  hideStartIcon?: boolean
  endAdornment?: React.ReactNode | null
  startIcon?: React.ReactNode | null
}
