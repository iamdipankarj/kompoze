export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The size of the spinner in pixels (px) */
  size?: number
  color?: string
  /**
   * Animation duration in milliseconds (number)
   */
  duration?: number
  strokeWidth?: number
}
