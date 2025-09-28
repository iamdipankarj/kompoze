import type { kompozeShimmerType } from '@/utils/utils.types'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: kompozeShimmerType
  borderRadius?: number
  height?: number
  width?: number
  size?: number
}
