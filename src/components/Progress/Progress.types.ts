export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Transition Style: static or infinite
   * @default infinite
   */
  variant?: 'static' | 'infinite'
  /**
   * Width value in percentage if the variant is static
   * @default 0
   */
  percentage?: number
  /**
   * Transition duration for static variant
   * @default 200
   */
  duration?: number
  /**
   * Container height of the component
   * @default 3
   */
  height?: number
}
