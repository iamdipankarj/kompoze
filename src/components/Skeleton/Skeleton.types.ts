import type { IShimmerType } from '../../utils/utils.types'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: IShimmerType
  borderRadius?: number
  height?: number
  width?: number
  size?: number
}
