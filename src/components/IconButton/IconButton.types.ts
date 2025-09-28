import type { KompozeButtonAppearance, KompozeColor, KompozeElementSize, KompozeElement } from '@/utils/utils.types'

export interface IconButtonProps extends KompozeElement {
  size?: KompozeElementSize
  variant?: KompozeButtonAppearance
  color?: KompozeColor
  disabled?: boolean
}
